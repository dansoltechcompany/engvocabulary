import Link from 'next/link'
import { LETTERS, letterCounts } from '../lib/directory.js'
import { titleCase } from '../lib/labels.js'

export function WordDirectory() {
  const counts = letterCounts()
  const total = LETTERS.reduce((sum, letter) => sum + counts[letter], 0)

  return (
    <section className="screen">
      <p className="eyebrow">Library</p>
      <h1>{titleCase('English words, A1 to C2')}</h1>
      <p className="hero-copy muted">
        {total.toLocaleString('en-GB')} words, each with a short meaning and examples.
        Open a letter to see every word that starts with it.
      </p>
      <nav className="letter-index" aria-label="Browse words by letter">
        {LETTERS.map((letter) => (
          <Link
            key={letter}
            className="letter-card"
            href={`/words/${letter}`}
            aria-label={`${counts[letter]} words starting with ${letter.toUpperCase()}`}
          >
            <b>{letter.toUpperCase()}</b>
            <span className="muted">{counts[letter]}</span>
          </Link>
        ))}
      </nav>
    </section>
  )
}
