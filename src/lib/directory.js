import { WORDS } from '../data/words.js'

export const LETTERS = [...'abcdefghijklmnopqrstuvwxyz']

const indexById = new Map(WORDS.map((word, index) => [word.id, index]))

export function letterOf(word) {
  const letter = String(word?.word || '').charAt(0).toLowerCase()
  return LETTERS.includes(letter) ? letter : ''
}

export function wordsForLetter(letter) {
  const target = String(letter || '').toLowerCase()
  if (!LETTERS.includes(target)) return []
  return WORDS.filter((item) => letterOf(item) === target)
}

export function letterCounts() {
  const counts = Object.fromEntries(LETTERS.map((letter) => [letter, 0]))
  for (const word of WORDS) {
    const letter = letterOf(word)
    if (letter) counts[letter] += 1
  }
  return counts
}

export function neighborWords(id) {
  const index = indexById.get(id)
  if (index == null) return { previous: null, next: null }
  return {
    previous: WORDS[index - 1] || null,
    next: WORDS[index + 1] || null,
  }
}
