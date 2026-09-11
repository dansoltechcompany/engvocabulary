import { A1_WORDS } from './a1.js'
import { A2_WORDS } from './a2.js'
import { B1_WORDS } from './b1.js'
import { B2_WORDS } from './b2.js'
import { C1_WORDS } from './c1.js'
import { C2_WORDS } from './c2.js'

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

function merge(lists) {
  const byId = new Map()
  for (const list of lists) {
    for (const word of list) {
      if (!byId.has(word.id)) byId.set(word.id, word)
    }
  }
  return [...byId.values()].sort((a, b) => a.word.localeCompare(b.word, 'en'))
}

export const WORDS = merge([A1_WORDS, A2_WORDS, B1_WORDS, B2_WORDS, C1_WORDS, C2_WORDS])
export const WORD_BY_ID = Object.fromEntries(WORDS.map((word) => [word.id, word]))

export function wordsForLevel(level) {
  return WORDS.filter((word) => word.level === level)
}

export function levelCounts() {
  const counts = Object.fromEntries(LEVELS.map((level) => [level, 0]))
  for (const word of WORDS) counts[word.level] += 1
  return counts
}
