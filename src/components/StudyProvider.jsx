'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { emptyState, loadLiveSession, loadState, saveLiveSession, saveState } from '../lib/storage.js'

const StudyContext = createContext(null)

export function StudyProvider({ children }) {
  const router = useRouter()
  const [state, setState] = useState(emptyState)
  const [session, setSession] = useState(null)
  const [installEvent, setInstallEvent] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setState(loadState())
    setSession((current) => current || loadLiveSession())
    setReady(true)
  }, [])

  useEffect(() => {
    const onInstall = (event) => {
      event.preventDefault()
      setInstallEvent(event)
    }
    window.addEventListener('beforeinstallprompt', onInstall)
    return () => window.removeEventListener('beforeinstallprompt', onInstall)
  }, [])

  const markOnboarded = useCallback((current = state) => {
    if (current.onboardingDone) return current
    const next = saveState({ ...current, onboardingDone: true, learnerLevel: current.learnerLevel || 'A1' })
    setState(next)
    return next
  }, [state])

  const startSession = useCallback(async () => {
    const current = markOnboarded()
    const quizInProgress = session?.quiz?.length && !session.quizDone
    if (quizInProgress) {
      router.push('/quiz')
      return
    }
    const learnInProgress = session?.ids?.length && session.index < session.ids.length && !session.quiz
    if (learnInProgress) {
      router.push('/learn')
      return
    }
    const { buildSession } = await import('../lib/progress.js')
    const ids = buildSession(current)
    const next = { ids, index: 0, revealed: false, ratings: {} }
    setSession(next)
    saveLiveSession(next)
    router.push('/learn')
  }, [markOnboarded, router, session])

  const startTopicSession = useCallback(async (topicOrSlug) => {
    const current = markOnboarded()
    const [{ buildTopicSession }, { topicBySlug, topicIds }] = await Promise.all([
      import('../lib/progress.js'),
      import('../data/topics.js'),
    ])
    const topic = typeof topicOrSlug === 'string' ? topicBySlug(topicOrSlug) : topicOrSlug
    if (!topic) return
    const ids = buildTopicSession(current, topicIds(topic))
    const next = {
      ids,
      index: 0,
      revealed: false,
      ratings: {},
      topic: topic.slug,
    }
    setSession(next)
    saveLiveSession(next)
    router.push('/learn')
  }, [markOnboarded, router])

  const setLevel = useCallback((level) => {
    const next = saveState({ ...state, onboardingDone: true, learnerLevel: level })
    setState(next)
    setSession(null)
    saveLiveSession(null)
  }, [state])

  const reveal = useCallback(() => {
    if (!session) return
    const next = { ...session, revealed: true }
    setSession(next)
    saveLiveSession(next)
  }, [session])

  const rate = useCallback(async (rating) => {
    if (!session?.ids?.length) return
    const id = session.ids[session.index]
    const [{ WORD_BY_ID }, { rateCard, recordStudyDay }, { buildQuiz }] = await Promise.all([
      import('../data/words.js'),
      import('../lib/progress.js'),
      import('../lib/quiz.js'),
    ])
    if (!id || !WORD_BY_ID[id]) return
    const nextState = recordStudyDay(rateCard(state, id, rating))
    setState(nextState)
    const nextIndex = session.index + 1
    const next = {
      ...session,
      index: nextIndex,
      revealed: false,
      ratings: { ...session.ratings, [id]: rating },
    }
    if (nextIndex >= session.ids.length) {
      const quiz = buildQuiz(next.ids)
      const quizSession = { ...next, quiz, quizIndex: 0, quizScore: 0, quizLocked: false, quizDone: false }
      setSession(quizSession)
      saveLiveSession(quizSession)
      router.push('/quiz')
      return
    }
    setSession(next)
    saveLiveSession(next)
  }, [router, session, state])

  const chooseQuiz = useCallback((option) => {
    if (!session?.quiz?.length || session.quizLocked) return
    const question = session.quiz[session.quizIndex]
    if (!question) return
    const correct = option === question.answer
    const next = {
      ...session,
      quizLocked: true,
      chosen: option,
      quizScore: session.quizScore + (correct ? 1 : 0),
    }
    setSession(next)
    saveLiveSession(next)
  }, [session])

  const nextQuiz = useCallback(() => {
    if (!session?.quiz) return
    const nextIndex = session.quizIndex + 1
    if (nextIndex >= session.quiz.length) {
      const next = { ...session, quizDone: true }
      setSession(next)
      saveLiveSession(next)
      return
    }
    const next = { ...session, quizIndex: nextIndex, quizLocked: false, chosen: null }
    setSession(next)
    saveLiveSession(next)
  }, [session])

  const finishQuiz = useCallback(() => {
    const slug = session?.topic
    saveLiveSession(null)
    setSession(null)
    router.push(slug ? `/vocabulary/${slug}` : '/')
  }, [router, session])

  const install = useCallback(async () => {
    if (!installEvent) return
    installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }, [installEvent])

  const value = useMemo(
    () => ({
      ready,
      state,
      session,
      installEvent,
      startSession,
      startTopicSession,
      setLevel,
      reveal,
      rate,
      chooseQuiz,
      nextQuiz,
      finishQuiz,
      install,
    }),
    [
      chooseQuiz,
      finishQuiz,
      install,
      installEvent,
      nextQuiz,
      rate,
      ready,
      reveal,
      session,
      setLevel,
      startSession,
      startTopicSession,
      state,
    ],
  )

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>
}

export function useStudy() {
  const value = useContext(StudyContext)
  if (!value) throw new Error('useStudy must be used inside StudyProvider')
  return value
}
