import { useEffect, useMemo, useState } from 'react'
import { WORDS, WORD_BY_ID, LEVELS, wordsForLevel, levelCounts } from './data/words.js'
import { TOPICS, topicBySlug, topicIds, topicWords, topicsForWord, topicLabel, topicLevelRange } from './data/topics.js'
import {
  buildSession,
  buildTopicSession,
  getCard,
  getStats,
  getWordOfDay,
  loadLiveSession,
  loadState,
  rateCard,
  recordStudyDay,
  saveLiveSession,
  saveState,
  speak,
} from './lib/progress.js'
import { setPageSeo, setWordJsonLd, setTopicJsonLd } from './lib/seo.js'
import { buildLesson } from './lib/lesson.js'
import { respell } from './lib/pronounce.js'
import { AboutPage, ContactPage, PrivacyPage } from './pages/SitePages.jsx'

function locationKey() {
  return (window.location.pathname || '/') + window.location.hash
}

function usePath() {
  const [path, setPath] = useState(locationKey)

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const next = window.location.hash.slice(1) || '/'
      window.history.replaceState({}, '', next)
      setPath(locationKey())
    }
    const onPop = () => setPath(locationKey())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const go = (to) => {
    window.history.pushState({}, '', to)
    const url = new URL(to, window.location.origin)
    setPath((url.pathname || '/') + url.hash)
  }

  return [path, go]
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function parseRoute(path) {
  const clean = (path.split('#')[0] || '/').replace(/\/+$/, '') || '/'
  if (clean.startsWith('/word/')) return { name: 'word', id: safeDecode(clean.replace('/word/', '')) }
  if (clean.startsWith('/vocabulary/')) return { name: 'topic', slug: safeDecode(clean.replace('/vocabulary/', '')) }
  if (clean === '/vocabulary') return { name: 'topics' }
  if (clean === '/learn') return { name: 'learn' }
  if (clean === '/quiz') return { name: 'quiz' }
  if (clean === '/words') return { name: 'words' }
  if (clean === '/progress') return { name: 'progress' }
  if (clean === '/about') return { name: 'about' }
  if (clean === '/privacy') return { name: 'privacy' }
  if (clean === '/contact') return { name: 'contact' }
  if (clean === '/') return { name: 'home' }
  return { name: 'notfound' }
}

function shuffle(items) {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function uniqueWords(list, needed, used) {
  const seen = new Set(used)
  const out = []
  for (const item of list) {
    if (seen.has(item.word)) continue
    seen.add(item.word)
    out.push(item.word)
    if (out.length >= needed) break
  }
  return out
}

function buildQuiz(ids) {
  const usable = shuffle(ids.filter((id) => WORD_BY_ID[id])).slice(0, Math.min(5, ids.length))
  return usable.map((id) => {
    const word = WORD_BY_ID[id]
    const sameLevel = shuffle(WORDS.filter((item) => item.id !== id && item.level === word.level))
    let distractors = uniqueWords(sameLevel, 3, [word.word])
    if (distractors.length < 3) {
      distractors = [
        ...distractors,
        ...uniqueWords(
          shuffle(WORDS.filter((item) => item.id !== id)),
          3 - distractors.length,
          [word.word, ...distractors],
        ),
      ]
    }
    return {
      id,
      meaning: word.meaning,
      answer: word.word,
      options: shuffle([word.word, ...distractors]),
    }
  })
}

function Pronunciation({ word }) {
  const say = respell(word)
  if (!say && !word.phonetic) return null
  return (
    <p className="phonetic">
      {say ? <span className="say">{say}</span> : null}
      {word.phonetic ? <span className="ipa">{word.phonetic}</span> : null}
    </p>
  )
}

function stageLabel(stage) {
  if (stage === 'mastered') return 'Mastered'
  if (stage === 'review') return 'Review'
  if (stage === 'learning') return 'Learning'
  return 'New'
}

function relatedWords(id) {
  const word = WORD_BY_ID[id]
  if (!word) return []
  const topicMate = new Set(topicsForWord(id).flatMap((topic) => topicIds(topic)))
  const levelList = wordsForLevel(word.level).filter((item) => item.id !== id)
  const close = levelList.filter((item) => topicMate.has(item.id))
  const rest = levelList.filter((item) => !topicMate.has(item.id))
  return [...close, ...rest].slice(0, 8)
}

function crumbFor(href) {
  const path = String(href || '/words').split('#')[0]
  if (path === '/') return { href, label: 'Home' }
  if (path === '/words') return { href, label: 'Words' }
  if (path === '/vocabulary') return { href, label: 'Topics' }
  if (path.startsWith('/vocabulary/')) {
    const topic = topicBySlug(path.replace('/vocabulary/', ''))
    return { href, label: topic ? topicLabel(topic) : 'Topics' }
  }
  return { href: '/words', label: 'Words' }
}

export default function App() {
  const [path, go] = usePath()
  const route = parseRoute(path)
  const [state, setState] = useState(loadState)
  const [installEvent, setInstallEvent] = useState(null)
  const [session, setSession] = useState(() => loadLiveSession())
  const [wordBack, setWordBack] = useState('/words')
  const stats = getStats(state)
  const wotd = useMemo(() => getWordOfDay(state.learnerLevel), [state.learnerLevel])

  useEffect(() => {
    const hash = safeDecode(window.location.hash.replace(/^#/, ''))
    const run = () => {
      if (hash && hash !== 'main') {
        const node = document.getElementById(hash)
        if (node) {
          node.scrollIntoView({ block: 'center' })
          return
        }
      }
      window.scrollTo(0, 0)
    }
    requestAnimationFrame(run)
  }, [path])

  useEffect(() => {
    if (route.name === 'word' && WORD_BY_ID[route.id]) {
      const word = WORD_BY_ID[route.id]
      const lesson = buildLesson(word)
      setPageSeo({
        title: `${word.word} meaning — ${word.level} English | EngVocab`,
        description: lesson.explainer.slice(0, 158),
        path: `/word/${word.id}`,
      })
      setWordJsonLd({ ...word, explainer: lesson.explainer })
      setTopicJsonLd(null)
      return
    }
    setWordJsonLd(null)
    setTopicJsonLd(null)
    if (route.name === 'word') {
      setPageSeo({
        title: 'Word not found | EngVocab',
        description: 'That word is not in the EngVocab dictionary. Browse by topic or by level.',
        path: `/word/${route.id || ''}`,
        noindex: true,
      })
      return
    }
    if (route.name === 'learn' || route.name === 'quiz' || route.name === 'progress') {
      setPageSeo({
        title: route.name === 'progress' ? 'Progress | EngVocab' : 'Study | EngVocab',
        description: 'A short English vocabulary session on this device.',
        path: `/${route.name}`,
        noindex: true,
      })
      return
    }
    if (route.name === 'topics') {
      setPageSeo({
        title: 'English vocabulary by topic | EngVocab',
        description: 'Learn English words in 16 topics such as weather, family, travel, food, work, and health. Short meanings and examples from A1 to C2.',
        path: '/vocabulary',
      })
      return
    }
    if (route.name === 'topic') {
      const topic = topicBySlug(route.slug)
      if (topic) {
        const range = topicLevelRange(topic)
        setPageSeo({
          title: `${topic.title} in English${range ? ` (${range})` : ''} | EngVocab`,
          description: topic.description,
          path: `/vocabulary/${topic.slug}`,
        })
        setTopicJsonLd(topic, topicWords(topic).length)
        return
      }
      setPageSeo({
        title: 'Topic not found | EngVocab',
        description: 'That topic is not on EngVocab. Browse the sixteen vocabulary lists.',
        path: `/vocabulary/${route.slug || ''}`,
        noindex: true,
      })
      return
    }
    if (route.name === 'notfound') {
      setPageSeo({
        title: 'Page not found | EngVocab',
        description: 'That page is not on EngVocab. Browse words by topic or by level.',
        path: path.split('#')[0] || '/',
        noindex: true,
      })
      return
    }
    if (route.name === 'words') {
      setPageSeo({
        title: 'English vocabulary A1 to C2 | EngVocab',
        description: 'Browse English words by level, with clear meanings and example sentences.',
        path: '/words',
      })
      return
    }
    if (route.name === 'about') {
      setPageSeo({
        title: 'About EngVocab',
        description: 'EngVocab is an English vocabulary site with short lessons from A1 to C2, plus a daily study loop.',
        path: '/about',
      })
      return
    }
    if (route.name === 'privacy') {
      setPageSeo({
        title: 'Privacy — EngVocab',
        description: 'How EngVocab stores progress on your device, and what we do not collect.',
        path: '/privacy',
      })
      return
    }
    if (route.name === 'contact') {
      setPageSeo({
        title: 'Contact EngVocab',
        description: 'Write to EngVocab about a lesson, a missing word, or an idea for the site.',
        path: '/contact',
      })
      return
    }
    setPageSeo({
      title: 'EngVocab — learn English vocabulary',
      description: 'Short daily English practice. Clear meanings, examples, and a study loop that helps you remember.',
      path: '/',
    })
  }, [path])

  useEffect(() => {
    const onInstall = (event) => {
      event.preventDefault()
      setInstallEvent(event)
    }
    window.addEventListener('beforeinstallprompt', onInstall)
    return () => window.removeEventListener('beforeinstallprompt', onInstall)
  }, [])

  const markOnboarded = (current = state) => {
    if (current.onboardingDone) return current
    const next = saveState({ ...current, onboardingDone: true, learnerLevel: current.learnerLevel || 'A1' })
    setState(next)
    return next
  }

  const openWord = (id, back = '/words') => {
    setWordBack(back)
    go(`/word/${id}`)
  }

  const startSession = () => {
    const current = markOnboarded()
    const quizInProgress = session?.quiz?.length && !session.quizDone
    if (quizInProgress) {
      if (route.name !== 'quiz') go('/quiz')
      return
    }
    const learnInProgress = session?.ids?.length && session.index < session.ids.length && !session.quiz
    if (learnInProgress) {
      if (route.name !== 'learn') go('/learn')
      return
    }
    const ids = buildSession(current)
    const next = { ids, index: 0, revealed: false, ratings: {} }
    setSession(next)
    saveLiveSession(next)
    go('/learn')
  }

  const startTopicSession = (topic) => {
    const current = markOnboarded()
    const ids = buildTopicSession(current, topicIds(topic))
    const next = {
      ids,
      index: 0,
      revealed: false,
      ratings: {},
      topic: topic.slug,
    }
    setSession(next)
    saveLiveSession(next)
    go('/learn')
  }

  const finishLearn = (current, latestState) => {
    setState(recordStudyDay(latestState))
    const quiz = buildQuiz(current.ids)
    const next = { ...current, quiz, quizIndex: 0, quizScore: 0, quizLocked: false, quizDone: false }
    setSession(next)
    saveLiveSession(next)
    go('/quiz')
  }

  const navButtons = (key) => (
    <>
      <button type="button" key={`${key}-home`} className={route.name === 'home' ? 'active' : ''} onClick={() => go('/')}>
        Home
      </button>
      <button type="button" key={`${key}-study`} className={route.name === 'learn' || route.name === 'quiz' ? 'active' : ''} onClick={startSession}>
        Study
      </button>
      <button type="button" key={`${key}-topics`} className={route.name === 'topics' || route.name === 'topic' ? 'active' : ''} onClick={() => go('/vocabulary')}>
        Topics
      </button>
      <button type="button" key={`${key}-words`} className={route.name === 'words' || route.name === 'word' ? 'active' : ''} onClick={() => go('/words')}>
        Words
      </button>
      <button type="button" key={`${key}-progress`} className={route.name === 'progress' ? 'active' : ''} onClick={() => go('/progress')}>
        Progress
      </button>
    </>
  )

  const shell = (content) => (
    <div className="site">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          const main = document.getElementById('main')
          if (!main) return
          main.focus()
          main.scrollIntoView()
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <a
            className="brand"
            href="/"
            onClick={(event) => {
              event.preventDefault()
              go('/')
            }}
          >
            <span className="brand-mark">E</span>
            <span>
              EngVocab
              <small>English vocabulary</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Primary">{navButtons('top')}</nav>
        </div>
      </header>
      <main id="main" className="site-main" tabIndex={-1}>{content}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>EngVocab — English words with short lessons and a daily practice.</p>
          <nav className="footer-links" aria-label="Site">
            <a href="/vocabulary" onClick={(event) => { event.preventDefault(); go('/vocabulary') }}>Topics</a>
            <a href="/about" onClick={(event) => { event.preventDefault(); go('/about') }}>About</a>
            <a href="/privacy" onClick={(event) => { event.preventDefault(); go('/privacy') }}>Privacy</a>
            <a href="/contact" onClick={(event) => { event.preventDefault(); go('/contact') }}>Contact</a>
          </nav>
        </div>
      </footer>
      <nav className="nav" aria-label="Mobile">{navButtons('bottom')}</nav>
    </div>
  )

  return shell(
    <>
      {route.name === 'home' && (
        <Home
          stats={stats}
          wotd={wotd}
          continueCount={
            session?.quiz?.length && !session.quizDone
              ? session.quiz.length - (session.quizIndex || 0)
              : session?.ids?.length && !session.quiz && session.index < session.ids.length
                ? session.ids.length - session.index
                : 0
          }
          continueKind={session?.quiz?.length && !session.quizDone ? 'quiz' : 'learn'}
          installEvent={installEvent}
          onInstall={async () => {
            if (!installEvent) return
            installEvent.prompt()
            await installEvent.userChoice
            setInstallEvent(null)
          }}
          onStudy={startSession}
          onWord={(id) => openWord(id, '/')}
          level={state.learnerLevel || 'A1'}
          onLevel={(level) => {
            const next = saveState({ ...state, onboardingDone: true, learnerLevel: level })
            setState(next)
            setSession(null)
            saveLiveSession(null)
          }}
          onTopics={() => go('/vocabulary')}
          onTopic={(slug) => go(`/vocabulary/${slug}`)}
        />
      )}
      {route.name === 'learn' && (
        <Learn
          session={session}
          backLabel={session?.topic ? 'Topic' : 'Home'}
          onBack={() => go(session?.topic ? `/vocabulary/${session.topic}` : '/')}
          onReveal={() => {
            const next = { ...session, revealed: true }
            setSession(next)
            saveLiveSession(next)
          }}
          onRate={(rating) => {
            const id = session.ids[session.index]
            if (!id || !WORD_BY_ID[id]) return
            const nextState = recordStudyDay(rateCard(state, id, rating))
            setState(nextState)
            const nextIndex = session.index + 1
            const next = {
              ...session,
              index: nextIndex,
              revealed: false,
              ratings: { ...session.ratings, [id]: rating },
            }
            if (nextIndex >= session.ids.length) {
              finishLearn(next, nextState)
              return
            }
            setSession(next)
            saveLiveSession(next)
          }}
        />
      )}
      {route.name === 'quiz' && (
        <Quiz
          session={session}
          finishLabel={session?.topic ? 'Back to topic' : 'Back home'}
          onChoose={(option) => {
            if (!session?.quiz?.length || session.quizLocked) return
            const question = session.quiz[session.quizIndex]
            if (!question) return
            const correct = option === question.answer
            const next = {
              ...session,
              quizLocked: true,
              chosen: option,
              quizScore: session.quizScore + (correct ? 1 : 0),
            }
            setSession(next)
            saveLiveSession(next)
          }}
          onNext={() => {
            const nextIndex = session.quizIndex + 1
            if (nextIndex >= session.quiz.length) {
              const next = { ...session, quizDone: true }
              setSession(next)
              saveLiveSession(next)
              return
            }
            const next = { ...session, quizIndex: nextIndex, quizLocked: false, chosen: null }
            setSession(next)
            saveLiveSession(next)
          }}
          onFinish={() => {
            const slug = session?.topic
            saveLiveSession(null)
            setSession(null)
            go(slug ? `/vocabulary/${slug}` : '/')
          }}
        />
      )}
      {route.name === 'topics' && (
        <TopicsIndex onOpen={(slug) => go(`/vocabulary/${slug}`)} />
      )}
      {route.name === 'topic' && (
        <TopicHub
          key={route.slug}
          topic={topicBySlug(route.slug)}
          onBack={() => go('/vocabulary')}
          onOpen={(id) => openWord(id, `/vocabulary/${route.slug}#entry-${id}`)}
          onStudy={() => {
            const topic = topicBySlug(route.slug)
            if (topic) startTopicSession(topic)
          }}
          onTopic={(slug) => go(`/vocabulary/${slug}`)}
        />
      )}
      {route.name === 'words' && <Library state={state} onOpen={(id) => openWord(id, '/words')} />}
      {route.name === 'word' && (
        <WordDetail
          word={WORD_BY_ID[route.id]}
          card={getCard(state, route.id)}
          related={relatedWords(route.id)}
          backHref={crumbFor(wordBack).href}
          backLabel={crumbFor(wordBack).label}
          onBack={() => go(crumbFor(wordBack).href)}
          onOpen={(id) => openWord(id, crumbFor(wordBack).href)}
          onTopic={(slug) => go(`/vocabulary/${slug}`)}
        />
      )}
      {route.name === 'progress' && <Progress stats={stats} />}
      {route.name === 'about' && <AboutPage onOpen={go} />}
      {route.name === 'privacy' && <PrivacyPage onOpen={go} />}
      {route.name === 'contact' && <ContactPage onOpen={go} />}
      {route.name === 'notfound' && <NotFound onHome={() => go('/')} onTopics={() => go('/vocabulary')} />}
    </>
  )
}

function topicMark(topic) {
  const marks = {
    weather: 'We',
    family: 'Fa',
    home: 'Hm',
    sports: 'Sp',
    travel: 'Tr',
    food: 'Fd',
    academic: 'Ac',
    emotions: 'Em',
    work: 'Wk',
    shopping: 'Sh',
    technology: 'Te',
    money: 'Mo',
    school: 'Sc',
    health: 'Ht',
    environment: 'En',
    hobbies: 'Hb',
  }
  return marks[topic.slug] || topicLabel(topic).slice(0, 2)
}

function NotFound({ onHome, onTopics }) {
  return (
    <section className="screen study-shell">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p className="muted">It may have moved, or the link is wrong. Try a topic list or the home page.</p>
      <div className="stack" style={{ marginTop: 24 }}>
        <button className="cta" type="button" onClick={onTopics}>
          Browse topics <span>→</span>
        </button>
        <button className="ghost" type="button" onClick={onHome}>Home</button>
      </div>
    </section>
  )
}

function Home({ stats, wotd, onStudy, onWord, installEvent, onInstall, continueCount, continueKind, level, onLevel, onTopics, onTopic }) {
  const ready = stats.dueToday > 0 || stats.newLeft > 0
    ? Math.min(8, stats.dueToday + Math.min(4, stats.newLeft))
    : Math.min(8, stats.total)
  const ctaLabel = continueKind === 'quiz' && continueCount > 0
    ? 'Continue quiz'
    : continueCount > 0
      ? 'Continue'
      : 'Start today’s session'
  const ctaMeta = continueKind === 'quiz' && continueCount > 0
    ? `${continueCount} ${continueCount === 1 ? 'question' : 'questions'} left`
    : continueCount > 0
      ? `${continueCount} words left`
      : `${ready} words ready`
  const counts = levelCounts()

  return (
    <section className="screen home-grid">
      <div>
        <p className="eyebrow">English vocabulary · {level}</p>
        <h1>Learn words you’ll actually remember.</h1>
        <p className="hero-copy muted">
          Clear meanings and examples, from beginner A1 to advanced C2.
          Then a short daily session so the words stay.
        </p>
        <div className="filters" style={{ marginTop: 22 }}>
          {LEVELS.map((item) => (
            <button key={item} className={level === item ? 'on' : ''} type="button" onClick={() => onLevel(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="stack" style={{ marginTop: 16 }}>
          <button className="cta" type="button" onClick={onStudy}>
            <span>
              {ctaLabel}
              <br />
              <small>{ctaMeta}</small>
            </span>
            <span>→</span>
          </button>
          {installEvent && (
            <button className="ghost install-banner" type="button" onClick={onInstall}>
              Install on this phone
            </button>
          )}
        </div>
      </div>
      <aside className="stack">
        <div className="stats-row">
          <div className="stat">
            <b>{stats.seen}</b>
            <span className="muted">{stats.seen === 1 ? 'Word seen' : 'Words seen'}</span>
          </div>
          <div className="stat">
            <b>{stats.dueToday}</b>
            <span className="muted">Due to review</span>
          </div>
        </div>
        <div className="stat">
          <b>{stats.allTotal}</b>
          <span className="muted">
            words in the dictionary · A1 {counts.A1} · C2 {counts.C2}
          </span>
        </div>
        {wotd ? (
          <button className="card wotd" type="button" onClick={() => onWord(wotd.id)}>
            <p className="eyebrow">Word of the day</p>
            <p className="word-hero">{wotd.word}</p>
            <Pronunciation word={wotd} />
            <p className="muted" style={{ marginTop: 10 }}>{wotd.meaning}</p>
          </button>
        ) : null}
        <p className="muted">{stats.streak} day streak</p>
        <button className="card topic-home" onClick={onTopics} type="button">
          <p className="eyebrow">Topics</p>
          <p className="hero-copy" style={{ margin: '8px 0 0' }}>Sixteen lists for everyday English</p>
          <p className="muted" style={{ marginTop: 8 }}>Grouped from words already on the site.</p>
        </button>
        <div className="topic-chip-row">
          {TOPICS.map((topic) => (
            <button key={topic.slug} className="ghost" type="button" onClick={() => onTopic(topic.slug)}>
              {topicLabel(topic)}
            </button>
          ))}
        </div>
      </aside>
    </section>
  )
}

function Learn({ session, onBack, onReveal, onRate, backLabel = 'Home' }) {
  if (!session?.ids?.length) {
    return (
      <section className="screen study-shell">
        <h1>Nothing due</h1>
        <p className="muted">Come back tomorrow, or browse the word list.</p>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={onBack}>
          {backLabel === 'Topic' ? 'Back to topic' : 'Back home'} <span>→</span>
        </button>
      </section>
    )
  }

  const word = WORD_BY_ID[session.ids[session.index]]
  if (!word) {
    return (
      <section className="screen study-shell">
        <h1>Session expired</h1>
        <p className="muted">Start a new study session from home.</p>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={onBack}>
          {backLabel === 'Topic' ? 'Back to topic' : 'Back home'} <span>→</span>
        </button>
      </section>
    )
  }
  const progress = ((session.index) / session.ids.length) * 100

  return (
    <section className="screen study-shell">
      <div className="topbar">
        <button className="ghost" type="button" onClick={onBack}>{backLabel}</button>
        <span className="chip">{session.index + 1} / {session.ids.length}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="card learn-card" style={{ marginTop: 16 }}>
        <div>
          <span className="chip">{word.pos} · {word.level}</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12, marginTop: 16 }}>
            <h1 className="word-hero">{word.word}</h1>
            <button className="icon-btn" type="button" onClick={() => speak(word.word)} aria-label="Pronounce">
              ♪
            </button>
          </div>
          <Pronunciation word={word} />
        </div>
        {session.revealed ? (
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.45, margin: '18px 0 0' }}>{word.meaning}</p>
            <p className="example">“{word.example}”</p>
            <p className="muted" style={{ marginTop: 10 }}>{word.hint}</p>
          </div>
        ) : (
          <p className="muted">Say the meaning in your head, then reveal it.</p>
        )}
      </div>
      {session.revealed ? (
        <div className="rate-row">
          <button className="rate again" type="button" onClick={() => onRate('again')}>Didn’t know</button>
          <button className="rate almost" type="button" onClick={() => onRate('almost')}>Almost</button>
          <button className="rate know" type="button" onClick={() => onRate('know')}>Knew it</button>
        </div>
      ) : (
        <button className="cta wide" style={{ marginTop: 14 }} type="button" onClick={onReveal}>
          Show meaning <span>→</span>
        </button>
      )}
    </section>
  )
}

function Quiz({ session, onChoose, onNext, onFinish, finishLabel = 'Back home' }) {
  if (!session?.quiz?.length) {
    return (
      <section className="screen study-shell">
        <h1>Session saved</h1>
        <p className="muted">Come back tomorrow for the words that need review.</p>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={onFinish}>
          {finishLabel} <span>→</span>
        </button>
      </section>
    )
  }

  if (session.quizDone) {
    return (
      <section className="screen study-shell">
        <p className="eyebrow">Done for now</p>
        <h1>That’s the loop.</h1>
        <p className="done-num">{session.quizScore}/{session.quiz.length}</p>
        <p className="muted">Hard words will come back sooner. Easy ones can wait.</p>
        <button className="cta" style={{ marginTop: 22 }} type="button" onClick={onFinish}>
          {finishLabel} <span>→</span>
        </button>
      </section>
    )
  }

  const question = session.quiz[session.quizIndex]
  if (!question) {
    return (
      <section className="screen study-shell">
        <h1>Session saved</h1>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={onFinish}>
          {finishLabel} <span>→</span>
        </button>
      </section>
    )
  }

  return (
    <section className="screen study-shell">
      <div className="topbar">
        <p className="eyebrow">Quick check</p>
        <span className="chip">{session.quizIndex + 1} / {session.quiz.length}</span>
      </div>
      <h1>Which word matches this meaning?</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <p style={{ fontSize: 18, lineHeight: 1.5, margin: 0 }}>{question.meaning}</p>
      </div>
      <div className="stack" style={{ marginTop: 14 }}>
        {question.options.map((option, index) => {
          let className = 'choice'
          if (session.quizLocked && option === question.answer) className += ' right'
          if (session.quizLocked && option === session.chosen && option !== question.answer) className += ' wrong'
          return (
            <button key={`${option}-${index}`} className={className} type="button" onClick={() => onChoose(option)}>
              {option}
            </button>
          )
        })}
        {session.quizLocked && (
          <button className="cta wide" type="button" onClick={onNext}>
            {session.quizIndex + 1 === session.quiz.length ? 'See result' : 'Next'} <span>→</span>
          </button>
        )}
      </div>
    </section>
  )
}

function TopicsIndex({ onOpen }) {
  return (
    <section className="screen">
      <p className="eyebrow">Topics</p>
      <h1>English vocabulary by topic</h1>
      <p className="hero-copy muted">
        Sixteen lists for everyday English. Each word still has its own lesson.
      </p>
      <div className="topic-grid">
        {TOPICS.map((topic) => {
          const words = topicWords(topic)
          const count = words.length
          const present = LEVELS.filter((item) => words.some((word) => word.level === item))
          const range = present.length > 1 ? `${present[0]}–${present[present.length - 1]}` : present[0] || ''
          return (
            <a
              key={topic.slug}
              className="card topic-card"
              href={`/vocabulary/${topic.slug}`}
              onClick={(event) => {
                event.preventDefault()
                onOpen(topic.slug)
              }}
            >
              <span className={`topic-mark ${topic.slug}`} aria-hidden="true">{topicMark(topic)}</span>
              <p className="eyebrow">{count} words{range ? ` · ${range}` : ''}</p>
              <h2>{topic.title}</h2>
              <p className="muted">{topic.blurb}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}

function TopicHub({ topic, onBack, onOpen, onStudy, onTopic }) {
  const [level, setLevel] = useState('all')

  if (!topic) {
    return (
      <section className="screen">
        <h1>Topic not found</h1>
        <p className="muted">Browse the topic list, or go back to all sixteen hubs.</p>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={onBack}>
          All topics <span>→</span>
        </button>
      </section>
    )
  }

  const allWords = topicWords(topic)
  const total = allWords.length
  const visible = topicWords(topic, level)
  const present = LEVELS.filter((item) => allWords.some((word) => word.level === item))
  const range = present.length > 1 ? `${present[0]} to ${present[present.length - 1]}` : present[0] || ''

  return (
    <article className="screen">
      <p className="eyebrow">
        <a href="/vocabulary" onClick={(event) => { event.preventDefault(); onBack() }}>Topics</a>
        {' / '}{topic.title}
      </p>
      <h1>{topic.h1}</h1>
      <p className="hero-copy muted">{topic.blurb} {total} words{range ? `, ${range}` : ''}.</p>
      <div className="stack" style={{ marginTop: 20, maxWidth: 560 }}>
        <button className="cta" type="button" onClick={onStudy}>
          <span>
            Study this topic
            <br />
            <small>8 words from the list</small>
          </span>
          <span>→</span>
        </button>
      </div>
      <div className="filters" style={{ marginTop: 22 }}>
        {['all', ...present].map((item) => (
          <button key={item} className={level === item ? 'on' : ''} type="button" onClick={() => setLevel(item)}>
            {item === 'all' ? 'All levels' : item}
          </button>
        ))}
      </div>
      <p className="muted" style={{ margin: '8px 0 0' }}>
        {visible.length} {visible.length === 1 ? 'word' : 'words'}
        {level !== 'all' && visible.length === 0 ? ` at ${level} on this list.` : ''}
      </p>
      {topic.groups.map((group) => {
        const rows = group.ids
          .map((id) => WORD_BY_ID[id])
          .filter(Boolean)
          .filter((word) => level === 'all' || word.level === level)
        if (!rows.length) return null
        return (
          <section key={group.heading}>
            <h2 className="entry-h">{group.heading}</h2>
            <div className="topic-word-list">
              {rows.map((word) => (
                <a
                  key={word.id}
                  id={`entry-${word.id}`}
                  className="topic-word"
                  href={`/word/${word.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onOpen(word.id)
                  }}
                >
                  <span className="topic-word-head">
                    <b>{word.word}</b>
                    <span className="chip">{word.level}</span>
                  </span>
                  <span className="muted">{word.meaning}</span>
                  <span className="topic-word-ex">“{word.example}”</span>
                </a>
              ))}
            </div>
          </section>
        )
      })}
      <h2 className="entry-h">More topics</h2>
      <div className="topic-chip-row">
        {TOPICS.filter((item) => item.slug !== topic.slug).map((item) => (
          <a
            key={item.slug}
            className="ghost topic-more"
            href={`/vocabulary/${item.slug}`}
            onClick={(event) => {
              event.preventDefault()
              onTopic(item.slug)
            }}
          >
            {topicLabel(item)}
          </a>
        ))}
      </div>
    </article>
  )
}

function Library({ state, onOpen }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [level, setLevel] = useState(state.learnerLevel || 'all')
  const [shown, setShown] = useState(80)
  const list = WORDS.filter((word) => {
    const card = getCard(state, word.id)
    const matchesQuery = `${word.word} ${word.meaning}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'all' || card.stage === filter
    const matchesLevel = level === 'all' || word.level === level
    return matchesQuery && matchesFilter && matchesLevel
  })
  const visible = list.slice(0, shown)

  return (
    <section className="screen">
      <p className="eyebrow">Library</p>
      <h1>English words, A1 to C2</h1>
      <input
        className="search"
        style={{ marginTop: 16 }}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setShown(80)
        }}
        placeholder="Search a word or meaning"
      />
      <div className="filters">
        {['all', ...LEVELS].map((item) => (
          <button
            key={item}
            className={level === item ? 'on' : ''}
            type="button"
            onClick={() => {
              setLevel(item)
              setShown(80)
            }}
          >
            {item === 'all' ? 'All levels' : item}
          </button>
        ))}
      </div>
      <div className="filters">
        {['all', 'new', 'learning', 'review', 'mastered'].map((item) => (
          <button
            key={item}
            className={filter === item ? 'on' : ''}
            type="button"
            onClick={() => {
              setFilter(item)
              setShown(80)
            }}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <p className="muted" style={{ margin: '4px 0 8px' }}>
        {list.length} {list.length === 1 ? 'word' : 'words'}
        {visible.length < list.length ? ` · showing ${visible.length}` : ''}
      </p>
      <div className="word-grid">
      {visible.map((word) => {
        const card = getCard(state, word.id)
        return (
          <a key={word.id} className="word-row" href={`/word/${word.id}`} onClick={(event) => {
            event.preventDefault()
            onOpen(word.id)
          }}>
            <span>
              <b>{word.word}</b>
              <span className="muted">{word.pos} · {word.level}</span>
            </span>
            <span className="chip">{stageLabel(card.stage)}</span>
          </a>
        )
      })}
      </div>
      {list.length === 0 ? (
        <p className="muted" style={{ marginTop: 16 }}>Nothing matches that search. Try another word, or clear a filter.</p>
      ) : null}
      {visible.length < list.length ? (
        <button className="ghost" style={{ marginTop: 16 }} type="button" onClick={() => setShown((n) => n + 80)}>
          Show more
        </button>
      ) : null}
    </section>
  )
}

function WordDetail({ word, card, related, onBack, onOpen, onTopic, backHref = '/words', backLabel = 'Words' }) {
  if (!word) {
    return (
      <section className="screen study-shell">
        <h1>Word not found</h1>
        <button className="ghost" type="button" onClick={onBack}>Back</button>
      </section>
    )
  }

  const lesson = buildLesson(word, related)
  const wordTopics = topicsForWord(word.id)

  return (
    <article className="screen entry-layout">
      <div>
        <p className="eyebrow">
          <a href={backHref} onClick={(event) => { event.preventDefault(); onBack() }}>{backLabel}</a>
          {' / '}{word.level}
        </p>
        <span className="chip" style={{ marginTop: 12 }}>{word.pos} · {word.level}</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 12, alignItems: 'flex-start' }}>
          <h1 className="word-hero">{word.word}</h1>
          <button className="icon-btn" type="button" onClick={() => speak(word.word)} aria-label={`Pronounce ${word.word}`}>♪</button>
        </div>
        <Pronunciation word={word} />

        <p className="prose">{lesson.explainer}</p>

        <h2 className="entry-h">Meaning</h2>
        <p className="prose tight">{word.meaning}</p>

        <h2 className="entry-h">Examples</h2>
        <ul className="example-list">
          {lesson.examples.map((line) => (
            <li key={line}>“{line}”</li>
          ))}
        </ul>

        {lesson.note ? (
          <>
            <h2 className="entry-h">Good to know</h2>
            <p className="note-box">{lesson.note}</p>
          </>
        ) : null}

        {lesson.synonyms.length > 0 ? (
          <>
            <h2 className="entry-h">Near in meaning</h2>
            <p className="prose tight">{lesson.synonyms.join(', ')}</p>
          </>
        ) : null}

        {wordTopics.length > 0 ? (
          <>
            <h2 className="entry-h">Topics</h2>
            <div className="topic-chip-row">
              {wordTopics.map((topic) => (
                <a
                  key={topic.slug}
                  className="ghost topic-more"
                  href={`/vocabulary/${topic.slug}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onTopic(topic.slug)
                  }}
                >
                  {topicLabel(topic)}
                </a>
              ))}
            </div>
          </>
        ) : null}

        <p style={{ marginTop: 24 }}><span className="chip">{stageLabel(card.stage)}</span></p>
      </div>
      {lesson.related.length > 0 && (
        <aside>
          <h2 className="entry-h" style={{ marginTop: 0 }}>More {word.level} words</h2>
          <p className="muted" style={{ margin: '0 0 12px' }}>
            Read these next. Each one has its own full page.
          </p>
          <div className="stack">
            {lesson.related.map((item) => (
              <a
                key={item.id}
                className="word-row related-row"
                href={`/word/${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  onOpen(item.id)
                }}
              >
                <span>
                  <b>{item.word}</b>
                  <span className="muted">{item.pos} · {item.meaning}</span>
                </span>
                <span className="chip">{item.level}</span>
              </a>
            ))}
          </div>
        </aside>
      )}
    </article>
  )
}

function Progress({ stats }) {
  return (
    <section className="screen progress-grid">
      <div>
        <p className="eyebrow">Your progress</p>
        <h1>Keep the streak honest.</h1>
        <p className="done-num">{stats.streak}</p>
        <p className="muted">day streak · {stats.seen} of {stats.total} {stats.level} words</p>
      </div>
      <div className="stack">
        <div className="stats-row">
          <div className="stat"><b>{stats.learning}</b><span className="muted">Learning</span></div>
          <div className="stat"><b>{stats.review}</b><span className="muted">In review</span></div>
        </div>
        <div className="stats-row">
          <div className="stat"><b>{stats.mastered}</b><span className="muted">Mastered</span></div>
          <div className="stat"><b>{stats.dueToday}</b><span className="muted">Due today</span></div>
        </div>
        <div className="card">
          <p className="eyebrow">How memory works here</p>
          <p style={{ margin: '10px 0 0', lineHeight: 1.5 }}>
            If you miss a word, it comes back soon. If you know it, it waits longer.
            That is the whole system. Progress stays on this device.
          </p>
        </div>
      </div>
    </section>
  )
}
