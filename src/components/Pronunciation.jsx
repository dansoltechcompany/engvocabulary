import { respell } from '../lib/pronounce.js'

export function Pronunciation({ word }) {
  const say = respell(word)
  if (!say && !word.phonetic) return null
  return (
    <p className="phonetic">
      {say ? <span className="say">{say}</span> : null}
      {word.phonetic ? <span className="ipa">{word.phonetic}</span> : null}
    </p>
  )
}
