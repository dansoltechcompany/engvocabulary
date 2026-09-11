'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

export function TopicWordLists({ present, groups }) {
  const [level, setLevel] = useState('all')
  const visibleCount = useMemo(
    () => groups.reduce((sum, group) => sum + group.words.filter((word) => level === 'all' || word.level === level).length, 0),
    [groups, level],
  )

  return (
    <>
      <div className="filters" style={{ marginTop: 22 }}>
        {['all', ...present].map((item) => (
          <button key={item} className={level === item ? 'on' : ''} type="button" onClick={() => setLevel(item)}>
            {item === 'all' ? 'All levels' : item}
          </button>
        ))}
      </div>
      <p className="muted" style={{ margin: '8px 0 0' }}>
        {visibleCount} {visibleCount === 1 ? 'word' : 'words'}
        {level !== 'all' && visibleCount === 0 ? ` at ${level} on this list.` : ''}
      </p>
      {groups.map((group) => {
        const rows = group.words.filter((word) => level === 'all' || word.level === level)
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
                  prefetch={false}
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
    </>
  )
}
