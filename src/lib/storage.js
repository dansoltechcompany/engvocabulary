const KEY = 'engvocab-state-v1'
const SESSION_KEY = 'engvocab-session-v1'

export const emptyState = () => ({
  onboardingDone: false,
  learnerLevel: 'A1',
  streak: 0,
  lastStudyDate: null,
  cards: {},
  quizHistory: [],
})

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
