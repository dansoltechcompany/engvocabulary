import Link from 'next/link'
import { buildLesson } from '../lib/lesson.js'
import { headword } from '../lib/labels.js'
import { crumbForWord, relatedWords } from '../lib/related.js'
import { topicsForWord, topicLabel } from '../data/topics.js'
import { Pronunciation } from './Pronunciation.jsx'
import { SpeakButton } from './SpeakButton.jsx'
import { StageChip } from './StageChip.jsx'

export function WordArticle({ word }) {
  const related = relatedWords(word.id)
  const lesson = buildLesson(word, related)
  const wordTopics = topicsForWord(word.id)
  const crumb = crumbForWord(word.id)
  const title = headword(word.word)

  return (
    <article className="screen entry-layout">
      <div>
        <p className="eyebrow">
          <Link href={crumb.href} scroll={false}>{crumb.label}</Link>
          {' / '}{word.level}
        </p>
        <span className="chip" style={{ marginTop: 12 }}>{word.pos} · {word.level}</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 12, alignItems: 'flex-start' }}>
          <h1 className="word-hero">{title}</h1>
          <SpeakButton word={word.word} label={`Pronounce ${title}`} />
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
                <Link
                  key={topic.slug}
                  className="ghost topic-more"
                  href={`/vocabulary/${topic.slug}`}
                >
                  {topicLabel(topic)}
                </Link>
              ))}
            </div>
          </>
        ) : null}

        <p style={{ marginTop: 24 }}><StageChip id={word.id} /></p>
      </div>
      {lesson.related.length > 0 && (
        <aside>
          <h2 className="entry-h" style={{ marginTop: 0 }}>More {word.level} words</h2>
          <p className="muted" style={{ margin: '0 0 12px' }}>
            Read these next. Each one has its own full page.
          </p>
          <div className="stack">
            {lesson.related.map((item) => (
              <Link
                key={item.id}
                className="word-row related-row"
                href={`/word/${item.id}`}
              >
                <span>
                  <b>{headword(item.word)}</b>
                  <span className="muted">{item.pos} · {item.meaning}</span>
                </span>
                <span className="chip">{item.level}</span>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  )
}
