'use client'

import { speak } from '../lib/speak.js'

export function SpeakButton({ word, label }) {
  return (
    <button type="button" className="icon-btn" onClick={() => speak(word)} aria-label={label || `Pronounce ${word}`}>
      ♪
    </button>
  )
}
