export function speak(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.9

  let started = false
  const start = () => {
    if (started) return
    started = true
    const american = window.speechSynthesis
      .getVoices()
      .find((voice) => /^en-US/i.test(voice.lang) || /united states|us english|american/i.test(voice.name))
    if (american) utterance.voice = american
    window.speechSynthesis.speak(utterance)
  }

  if (window.speechSynthesis.getVoices().length) {
    start()
    return
  }

  const onVoices = () => {
    window.speechSynthesis.removeEventListener('voiceschanged', onVoices)
    start()
  }
  window.speechSynthesis.addEventListener('voiceschanged', onVoices)
  window.setTimeout(() => {
    window.speechSynthesis.removeEventListener('voiceschanged', onVoices)
    start()
  }, 300)
}
