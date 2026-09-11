import { WORDS, WORD_BY_ID, wordsForLevel } from '../data/words.js'

const KEY = 'engvocab-state-v1'
const SESSION_KEY = 'engvocab-session-v1'
const DAY_MS = 24 * 60 * 60 * 1000
const SESSION_SIZE = 8
const NEW_PER_SESSION = 4

export const emptyState = () => ({
  onboardingDone: false,
  learnerLevel: 'A1',
  streak: 0,
  lastStudyDate: null,
  cards: {},
  quizHistory: [],
})

export function pool(state) {
  const level = state.learnerLevel || 'A1'
  const list = wordsForLevel(level)
  return list.length ? list : WORDS
}

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyState()
    return { ...emptyState(), ...JSON.parse(raw) }
  } catch {
    return emptyState()
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Private mode or a full disk should not crash the page.
  }
  return state
}

export function getCard(state, id) {
  return (
    state.cards[id] || {
      stage: 'new',
      intervalDays: 0,
      due: 0,
      consecutive: 0,
      seen: 0,
      again: 0,
      almost: 0,
      know: 0,
    }
  )
}

export function dueIds(state, now = Date.now()) {
  return pool(state)
    .filter((word) => {
      const card = getCard(state, word.id)
      if (card.stage === 'new') return false
      return card.due <= now
    })
    .map((word) => word.id)
}

export function newIds(state) {
  return pool(state)
    .filter((word) => getCard(state, word.id).stage === 'new')
    .map((word) => word.id)
}

function shuffle(list) {
  const ids = [...list]
  for (let i = ids.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
  }
  return ids
}

export function buildSession(state) {
  const due = dueIds(state)
  const fresh = newIds(state)
  const reviews = due.slice(0, NEW_PER_SESSION)
  const news = fresh.slice(0, SESSION_SIZE - reviews.length)
  let ids = [...reviews, ...news]

  if (ids.length < SESSION_SIZE) {
    const extra = shuffle(pool(state).map((word) => word.id).filter((id) => !ids.includes(id))).slice(
      0,
      SESSION_SIZE - ids.length,
    )
    ids = [...ids, ...extra]
  }

  return shuffle(ids)
}

export function buildTopicSession(state, topicIds) {
  const allowed = topicIds.filter((id) => WORD_BY_ID[id])
  if (!allowed.length) return []

  const level = state.learnerLevel || 'A1'
  const inLevel = allowed.filter((id) => WORD_BY_ID[id].level === level)
  const poolIds = inLevel.length >= SESSION_SIZE ? inLevel : allowed
  const poolSet = new Set(poolIds)

  const due = dueIds(state).filter((id) => poolSet.has(id))
  const fresh = newIds(state).filter((id) => poolSet.has(id))
  const reviews = due.slice(0, NEW_PER_SESSION)
  const news = fresh.slice(0, SESSION_SIZE - reviews.length)
  let ids = [...reviews, ...news]

  if (ids.length < SESSION_SIZE) {
    const extra = shuffle(poolIds.filter((id) => !ids.includes(id))).slice(0, SESSION_SIZE - ids.length)
    ids = [...ids, ...extra]
  }

  return shuffle(ids)
}

export function rateCard(state, id, rating) {
  const card = { ...getCard(state, id) }
  const now = Date.now()
  card.seen += 1
  card[rating] += 1

  if (rating === 'again') {
    card.stage = 'learning'
    card.intervalDays = 0
    card.consecutive = 0
    card.due = now
  } else if (rating === 'almost') {
    card.stage = 'learning'
    card.intervalDays = 1
    card.consecutive = 0
    card.due = now + DAY_MS
  } else {
    const ladder = { 0: 1, 1: 3, 3: 7, 7: 14, 14: 30 }
    const next = ladder[card.intervalDays] || 30
    card.intervalDays = next
    card.consecutive = (card.consecutive || 0) + 1
    card.stage = next >= 30 ? 'mastered' : 'review'
    card.due = now + next * DAY_MS
  }

  return saveState({
    ...state,
    cards: { ...state.cards, [id]: card },
  })
}

export function recordStudyDay(state) {
  const today = todayKey()
  if (state.lastStudyDate === today) return state

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const nextStreak = state.lastStudyDate === todayKey(yesterday) ? state.streak + 1 : 1

  return saveState({
    ...state,
    streak: nextStreak,
    lastStudyDate: today,
  })
}

export function getStats(state) {
  const list = pool(state)
  const counts = { new: 0, learning: 0, review: 0, mastered: 0, seen: 0 }
  for (const word of list) {
    const card = getCard(state, word.id)
    if (counts[card.stage] !== undefined) counts[card.stage] += 1
    if (card.seen > 0) counts.seen += 1
  }
  return {
    ...counts,
    dueToday: dueIds(state).length,
    newLeft: counts.new,
    total: list.length,
    allTotal: WORDS.length,
    streak: state.streak,
    level: state.learnerLevel || 'A1',
  }
}

export function getWordOfDay(level = 'A1') {
  const list = wordsForLevel(level)
  const source = list.length ? list : WORDS
  const key = todayKey()
  let hash = 0
  for (let i = 0; i < key.length; i += 1) hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  return source[hash % source.length]
}

export function speak(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.9
  const american = window.speechSynthesis
    .getVoices()
    .find((voice) => /^en-US/i.test(voice.lang) || /united states|us english|american/i.test(voice.name))
  if (american) utterance.voice = american
  window.speechSynthesis.speak(utterance)
}

export function loadLiveSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveLiveSession(session) {
  try {
    if (!session) sessionStorage.removeItem(SESSION_KEY)
    else sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } catch {
    // Ignore quota errors so study can still finish this visit.
  }
}

export { SESSION_SIZE }
