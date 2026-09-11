'use client'

import { speak } from '../lib/progress.js'

export function SpeakButton({ word, label }) {
  return (
    <button type="button" className="icon-btn" onClick={() => speak(word)} aria-label={label || `Pronounce ${word}`}>
      ♪
    </button>
  )
}
