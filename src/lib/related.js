import { WORD_BY_ID, wordsForLevel } from '../data/words.js'
import { topicBySlug, topicIds, topicLabel, topicsForWord } from '../data/topics.js'

export { stageLabel } from './labels.js'

export function relatedWords(id) {
  const word = WORD_BY_ID[id]
  if (!word) return []
  const topicMate = new Set(topicsForWord(id).flatMap((topic) => topicIds(topic)))
  const levelList = wordsForLevel(word.level).filter((item) => item.id !== id)
  const close = levelList.filter((item) => topicMate.has(item.id))
  const rest = levelList.filter((item) => !topicMate.has(item.id))
  return [...close, ...rest].slice(0, 8)
}

export function crumbForWord(id) {
  const topics = topicsForWord(id)
  if (topics[0]) {
    return { href: `/vocabulary/${topics[0].slug}#entry-${id}`, label: topicLabel(topics[0]) }
  }
  return { href: '/words', label: 'Words' }
}

export function crumbFor(href) {
  const path = String(href || '/words').split('#')[0]
  if (path === '/') return { href, label: 'Home' }
  if (path === '/words') return { href, label: 'Words' }
  if (path === '/vocabulary') return { href, label: 'Topics' }
  if (path.startsWith('/vocabulary/')) {
    const topic = topicBySlug(path.replace('/vocabulary/', ''))
    return { href, label: topic ? topicLabel(topic) : 'Topics' }
  }
  return { href: '/words', label: 'Words' }
}

export function topicMark(topic) {
  const marks = {
    weather: 'We',
    family: 'Fa',
    home: 'Hm',
    sports: 'Sp',
    travel: 'Tr',
    food: 'Fd',
    academic: 'Ac',
    emotions: 'Em',
    work: 'Wk',
    shopping: 'Sh',
    technology: 'Te',
    money: 'Mo',
    school: 'Sc',
    health: 'Ht',
    environment: 'En',
    hobbies: 'Hb',
  }
  return marks[topic.slug] || topicLabel(topic).slice(0, 2)
}
