import Link from 'next/link'
import { LEVELS, WORD_BY_ID } from '../data/words.js'
import { TOPICS, topicLabel, topicWords } from '../data/topics.js'
import { TopicStudyButton } from './TopicStudyButton.jsx'
import { TopicWordLists } from './TopicWordLists.jsx'

export function TopicHub({ topic }) {
  const allWords = topicWords(topic)
  const total = allWords.length
  const present = LEVELS.filter((item) => allWords.some((word) => word.level === item))
  const range = present.length > 1 ? `${present[0]} to ${present[present.length - 1]}` : present[0] || ''
  const groups = topic.groups
    .map((group) => ({
      heading: group.heading,
      words: group.ids
        .map((id) => WORD_BY_ID[id])
        .filter(Boolean)
        .map((word) => ({
          id: word.id,
          word: word.word,
          meaning: word.meaning,
          example: word.example,
          level: word.level,
        })),
    }))
    .filter((group) => group.words.length > 0)

  return (
    <article className="screen">
      <p className="eyebrow">
        <Link href="/vocabulary">Topics</Link>
        {' / '}{topic.title}
      </p>
      <h1>{topic.h1}</h1>
      <p className="hero-copy muted">{topic.blurb} {total} words{range ? `, ${range}` : ''}.</p>
      <div className="stack" style={{ marginTop: 20, maxWidth: 560 }}>
        <TopicStudyButton slug={topic.slug} />
      </div>
      <TopicWordLists present={present} groups={groups} />
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
