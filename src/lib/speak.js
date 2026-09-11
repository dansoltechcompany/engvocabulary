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
