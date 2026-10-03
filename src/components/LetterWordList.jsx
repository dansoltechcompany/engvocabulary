import Link from 'next/link'
import { LEVELS } from '../data/words.js'
import { LETTERS } from '../lib/directory.js'
import { headword } from '../lib/labels.js'

export function LetterWordList({ letter, words }) {
  const index = LETTERS.indexOf(letter)
  const previous = index > 0 ? LETTERS[index - 1] : ''
  const next = index >= 0 && index < LETTERS.length - 1 ? LETTERS[index + 1] : ''
  const present = LEVELS.filter((level) => words.some((word) => word.level === level))
  const range = present.length > 1 ? `${present[0]} to ${present[present.length - 1]}` : present[0] || ''
  const first = headword(words[0]?.word)
  const last = headword(words[words.length - 1]?.word)

  return (
    <section className="screen">
      <p className="eyebrow">
        <Link href="/words">Words</Link>
        {' / '}
        {letter.toUpperCase()}
      </p>
      <h1>English words starting with {letter.toUpperCase()}</h1>
      <p className="hero-copy muted">
        {words.length.toLocaleString('en-GB')} {words.length === 1 ? 'word' : 'words'}
        {first && last ? `, from ${first} to ${last}` : ''}
        {range ? `. Levels ${range}.` : '.'} Each one opens a full lesson.
      </p>
      <nav className="letter-index letter-index-compact" aria-label="Other letters">
        {LETTERS.map((item) => (
          <Link
            key={item}
            className={item === letter ? 'letter-card on' : 'letter-card'}
            href={`/words/${item}`}
            aria-current={item === letter ? 'page' : undefined}
          >
            <b>{item.toUpperCase()}</b>
          </Link>
        ))}
      </nav>
      <p className="letter-jump">
        {previous ? <Link href={`/words/${previous}`}>← {previous.toUpperCase()}</Link> : <span />}
        <Link href="/words#search">Search the dictionary</Link>
        {next ? <Link href={`/words/${next}`}>{next.toUpperCase()} →</Link> : <span />}
      </p>
      <div className="letter-list">
        {words.map((word) => (
          <Link key={word.id} className="word-row" href={`/word/${word.id}`}>
            <span>
              <b>{headword(word.word)}</b>
              <span className="muted">{word.pos} · {word.meaning}</span>
            </span>
            <span className="chip">{word.level}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
