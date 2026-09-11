import Link from 'next/link'
import { LEVELS } from '../data/words.js'
import { TOPICS, topicLabel, topicWords } from '../data/topics.js'
import { topicMark } from '../lib/related.js'

export function TopicsIndex() {
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
            <Link
              key={topic.slug}
              className="card topic-card"
              href={`/vocabulary/${topic.slug}`}
            >
              <span className={`topic-mark ${topic.slug}`} aria-hidden="true">{topicMark(topic)}</span>
              <p className="eyebrow">{count} words{range ? ` · ${range}` : ''}</p>
              <h2>{topic.title}</h2>
              <p className="muted">{topic.blurb}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
