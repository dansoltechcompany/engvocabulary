import { WORDS, WORD_BY_ID } from '../data/words.js'
import { headword } from './labels.js'

export function shuffle(items) {
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
    const label = headword(item.word)
    if (seen.has(label)) continue
    seen.add(label)
    out.push(label)
    if (out.length >= needed) break
  }
  return out
}

export function buildQuiz(ids) {
  const usable = shuffle(ids.filter((id) => WORD_BY_ID[id])).slice(0, Math.min(5, ids.length))
  return usable.map((id) => {
    const word = WORD_BY_ID[id]
    const answer = headword(word.word)
    const sameLevel = shuffle(WORDS.filter((item) => item.id !== id && item.level === word.level))
    let distractors = uniqueWords(sameLevel, 3, [answer])
    if (distractors.length < 3) {
      distractors = [
        ...distractors,
        ...uniqueWords(
          shuffle(WORDS.filter((item) => item.id !== id)),
          3 - distractors.length,
          [answer, ...distractors],
        ),
      ]
    }
    return {
      id,
      meaning: word.meaning,
      answer,
      options: shuffle([answer, ...distractors]),
    }
  })
}
