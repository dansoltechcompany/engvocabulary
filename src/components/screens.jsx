'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LEVELS, WORDS, WORD_BY_ID, levelCounts } from '../data/words.js'
import { TOPICS, topicLabel, topicWords } from '../data/topics.js'
import { getCard, getStats, getWordOfDay } from '../lib/progress.js'
import { stageLabel } from '../lib/related.js'
import { Pronunciation } from './Pronunciation.jsx'
import { SpeakButton } from './SpeakButton.jsx'
import { useStudy } from './StudyProvider.jsx'

export function HomeScreen() {
  const { state, session, installEvent, startSession, setLevel, install } = useStudy()
  const stats = getStats(state)
  const [word, setWord] = useState(null)
  useEffect(() => {
    setWord(getWordOfDay(state.learnerLevel))
  }, [state.learnerLevel])
  const level = state.learnerLevel || 'A1'
  const continueCount =
    session?.quiz?.length && !session.quizDone
      ? session.quiz.length - (session.quizIndex || 0)
      : session?.ids?.length && !session.quiz && session.index < session.ids.length
        ? session.ids.length - session.index
        : 0
  const continueKind = session?.quiz?.length && !session.quizDone ? 'quiz' : 'learn'
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
            <button key={item} className={level === item ? 'on' : ''} type="button" onClick={() => setLevel(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="stack" style={{ marginTop: 16 }}>
          <button className="cta" type="button" onClick={startSession}>
            <span>
              {ctaLabel}
              <br />
              <small>{ctaMeta}</small>
            </span>
            <span>→</span>
          </button>
          {installEvent && (
            <button className="ghost install-banner" type="button" onClick={install}>
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
        {word ? (
          <Link className="card wotd" href={`/word/${word.id}`}>
            <p className="eyebrow">Word of the day</p>
            <p className="word-hero">{word.word}</p>
            <Pronunciation word={word} />
            <p className="muted" style={{ marginTop: 10 }}>{word.meaning}</p>
          </Link>
        ) : null}
        <p className="muted">{stats.streak} day streak</p>
        <Link className="card topic-home" href="/vocabulary">
          <p className="eyebrow">Topics</p>
          <p className="hero-copy" style={{ margin: '8px 0 0' }}>Sixteen lists for everyday English</p>
          <p className="muted" style={{ marginTop: 8 }}>Grouped from words already on the site.</p>
        </Link>
        <div className="topic-chip-row">
          {TOPICS.map((topic) => (
            <Link key={topic.slug} className="ghost" href={`/vocabulary/${topic.slug}`}>
              {topicLabel(topic)}
            </Link>
          ))}
        </div>
      </aside>
    </section>
  )
}

export function LearnScreen() {
  const { session, reveal, rate } = useStudy()
  const backHref = session?.topic ? `/vocabulary/${session.topic}` : '/'
  const backLabel = session?.topic ? 'Topic' : 'Home'

  if (!session?.ids?.length) {
    return (
      <section className="screen study-shell">
        <h1>Nothing due</h1>
        <p className="muted">Come back tomorrow, or browse the word list.</p>
        <Link className="cta" style={{ marginTop: 20 }} href={backHref}>
          {backLabel === 'Topic' ? 'Back to topic' : 'Back home'} <span>→</span>
        </Link>
      </section>
    )
  }

  const word = WORD_BY_ID[session.ids[session.index]]
  if (!word) {
    return (
      <section className="screen study-shell">
        <h1>Session expired</h1>
        <p className="muted">Start a new study session from home.</p>
        <Link className="cta" style={{ marginTop: 20 }} href="/">
          Back home <span>→</span>
        </Link>
      </section>
    )
  }
  const progress = (session.index / session.ids.length) * 100

  return (
    <section className="screen study-shell">
      <div className="topbar">
        <Link className="ghost" href={backHref}>{backLabel}</Link>
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
            <SpeakButton word={word.word} label="Pronounce" />
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
          <button className="rate again" type="button" onClick={() => rate('again')}>Didn’t know</button>
          <button className="rate almost" type="button" onClick={() => rate('almost')}>Almost</button>
          <button className="rate know" type="button" onClick={() => rate('know')}>Knew it</button>
        </div>
      ) : (
        <button className="cta wide" style={{ marginTop: 14 }} type="button" onClick={reveal}>
          Show meaning <span>→</span>
        </button>
      )}
    </section>
  )
}

export function QuizScreen() {
  const { session, chooseQuiz, nextQuiz, finishQuiz } = useStudy()
  const finishLabel = session?.topic ? 'Back to topic' : 'Back home'

  if (!session?.quiz?.length) {
    return (
      <section className="screen study-shell">
        <h1>Session saved</h1>
        <p className="muted">Come back tomorrow for the words that need review.</p>
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={finishQuiz}>
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
        <button className="cta" style={{ marginTop: 22 }} type="button" onClick={finishQuiz}>
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
        <button className="cta" style={{ marginTop: 20 }} type="button" onClick={finishQuiz}>
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
            <button key={`${option}-${index}`} className={className} type="button" onClick={() => chooseQuiz(option)}>
              {option}
            </button>
          )
        })}
        {session.quizLocked && (
          <button className="cta wide" type="button" onClick={nextQuiz}>
            {session.quizIndex + 1 === session.quiz.length ? 'See result' : 'Next'} <span>→</span>
          </button>
        )}
      </div>
    </section>
  )
}

export function LibraryScreen() {
  const { state, ready } = useStudy()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [level, setLevel] = useState('all')
  const [shown, setShown] = useState(80)
  useEffect(() => {
    if (ready) setLevel(state.learnerLevel || 'all')
  }, [ready, state.learnerLevel])
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
            <Link key={word.id} className="word-row" href={`/word/${word.id}`}>
              <span>
                <b>{word.word}</b>
                <span className="muted">{word.pos} · {word.level}</span>
              </span>
              <span className="chip">{stageLabel(card.stage)}</span>
            </Link>
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

export function TopicHubScreen({ topic }) {
  const { startTopicSession } = useStudy()
  const [level, setLevel] = useState('all')
  const allWords = topicWords(topic)
  const total = allWords.length
  const visible = topicWords(topic, level)
  const present = LEVELS.filter((item) => allWords.some((word) => word.level === item))
  const range = present.length > 1 ? `${present[0]} to ${present[present.length - 1]}` : present[0] || ''

  return (
    <article className="screen">
      <p className="eyebrow">
        <Link href="/vocabulary">Topics</Link>
        {' / '}{topic.title}
      </p>
      <h1>{topic.h1}</h1>
      <p className="hero-copy muted">{topic.blurb} {total} words{range ? `, ${range}` : ''}.</p>
      <div className="stack" style={{ marginTop: 20, maxWidth: 560 }}>
        <button className="cta" type="button" onClick={() => startTopicSession(topic)}>
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
                <Link
                  key={word.id}
                  id={`entry-${word.id}`}
                  className="topic-word"
                  href={`/word/${word.id}`}
                >
                  <span className="topic-word-head">
                    <b>{word.word}</b>
                    <span className="chip">{word.level}</span>
                  </span>
                  <span className="muted">{word.meaning}</span>
                  <span className="topic-word-ex">“{word.example}”</span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
      <h2 className="entry-h">More topics</h2>
      <div className="topic-chip-row">
        {TOPICS.filter((item) => item.slug !== topic.slug).map((item) => (
          <Link
            key={item.slug}
            className="ghost topic-more"
            href={`/vocabulary/${item.slug}`}
          >
            {topicLabel(item)}
          </Link>
        ))}
      </div>
    </article>
  )
}

export function ProgressScreen() {
  const { state } = useStudy()
  const stats = getStats(state)
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
