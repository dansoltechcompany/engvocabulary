'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { WORD_BY_ID } from '../data/words.js'
import { topicIds } from '../data/topics.js'
import {
  buildSession,
  buildTopicSession,
  emptyState,
  loadLiveSession,
  loadState,
  rateCard,
  recordStudyDay,
  saveLiveSession,
  saveState,
} from '../lib/progress.js'
import { buildQuiz } from '../lib/quiz.js'

const StudyContext = createContext(null)

export function StudyProvider({ children }) {
  const router = useRouter()
  const [state, setState] = useState(emptyState)
  const [session, setSession] = useState(null)
  const [installEvent, setInstallEvent] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setState(loadState())
    setSession(loadLiveSession())
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

  const startSession = useCallback(() => {
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
    const ids = buildSession(current)
    const next = { ids, index: 0, revealed: false, ratings: {} }
    setSession(next)
    saveLiveSession(next)
    router.push('/learn')
  }, [markOnboarded, router, session])

  const startTopicSession = useCallback((topic) => {
    const current = markOnboarded()
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

  const finishLearn = useCallback((current, latestState) => {
    setState(recordStudyDay(latestState))
    const quiz = buildQuiz(current.ids)
    const next = { ...current, quiz, quizIndex: 0, quizScore: 0, quizLocked: false, quizDone: false }
    setSession(next)
    saveLiveSession(next)
    router.push('/quiz')
  }, [router])

  const setLevel = useCallback((level) => {
    const next = saveState({ ...state, onboardingDone: true, learnerLevel: level })
    setState(next)
    setSession(null)
    saveLiveSession(null)
  }, [state])

  const reveal = useCallback(() => {
    const next = { ...session, revealed: true }
    setSession(next)
    saveLiveSession(next)
  }, [session])

  const rate = useCallback((rating) => {
    const id = session.ids[session.index]
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
      finishLearn(next, nextState)
      return
    }
    setSession(next)
    saveLiveSession(next)
  }, [finishLearn, session, state])

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
