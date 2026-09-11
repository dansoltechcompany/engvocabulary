const PHONES = [
  ['juː', 'yoo'],
  ['ju', 'yoo'],
  ['ʃn', 'shun'],
  ['tʃ', 'ch'],
  ['dʒ', 'j'],
  ['iː', 'ee'],
  ['uː', 'oo'],
  ['ɑː', 'ah'],
  ['ɔː', 'or'],
  ['ɜː', 'ur'],
  ['ŋɡ', 'ng'],
  ['eɪ', 'ay'],
  ['aɪ', 'Y'],
  ['ɔɪ', 'oy'],
  ['əʊ', 'oh'],
  ['oʊ', 'oh'],
  ['aʊ', 'ow'],
  ['ɪə', 'eer'],
  ['eə', 'air'],
  ['ʊə', 'oor'],
  ['ə', 'uh'],
  ['ɪ', 'i'],
  ['i', 'ee'],
  ['æ', 'a'],
  ['ɑ', 'ah'],
  ['ɒ', 'o'],
  ['ɔ', 'or'],
  ['ʊ', 'u'],
  ['u', 'oo'],
  ['ʌ', 'u'],
  ['ɜ', 'ur'],
  ['e', 'e'],
  ['ɛ', 'e'],
  ['θ', 'th'],
  ['ð', 'th'],
  ['ʃ', 'sh'],
  ['ʒ', 'zh'],
  ['ŋ', 'ng'],
  ['j', 'y'],
  ['ɡ', 'g'],
]

/** Hand fixes where IPA-to-spelling looks ugly. Stressed part in CAPITALS. */
const OVERRIDE = {
  apple: 'AP-uhl',
  language: 'LANG-gwij',
  information: 'in-fuh-MAY-shun',
  nuance: 'NYOO-ahns',
  answer: 'AHN-suh',
  beautiful: 'BYOO-ti-ful',
  colour: 'KUL-uh',
  comfortable: 'KUMF-tuh-bul',
  English: 'ING-glish',
  english: 'ING-glish',
  fruit: 'FROOT',
  people: 'PEE-pul',
  woman: 'WUM-uhn',
  women: 'WIM-in',
  water: 'WAW-tuh',
  sugar: 'SHUUG-uh',
  accommodate: 'uh-KOM-uh-dayt',
  neighbour: 'NAY-buh',
  practise: 'PRAK-tiss',
}

function nextPhone(ipa, i) {
  for (const [from, to] of PHONES) {
    if (ipa.startsWith(from, i)) return [from.length, to]
  }
  const ch = ipa[i]
  if (ch === 'ː' || ch === "'" || ch === 'ʳ' || ch === '̃') return [1, '']
  if (/[a-z]/i.test(ch)) return [1, ch]
  return [1, '']
}

function syllables(ipa) {
  const raw = String(ipa || '').replace(/\//g, '').trim()
  const parts = []
  let text = ''
  let stress = false

  const flush = () => {
    if (!text) return
    parts.push({ text, stress })
    text = ''
    stress = false
  }

  for (let i = 0; i < raw.length; ) {
    const mark = raw[i]
    if (mark === 'ˈ') {
      flush()
      stress = true
      i += 1
      continue
    }
    if (mark === 'ˌ' || mark === '.') {
      flush()
      i += 1
      continue
    }
    if (
      mark === 'ə' &&
      text &&
      !raw.startsWith('əʊ', i)
    ) {
      flush()
      parts.push({ text: 'uh', stress: false })
      i += 1
      continue
    }
    const [len, latin] = nextPhone(raw, i)
    let piece = latin
    if (latin === 'Y') {
      const rest = raw.slice(i + len)
      const followedByConsonant = Boolean(rest) && !/^[aeiouæɑɒɔʊʌəɛɪ]/.test(rest)
      piece = followedByConsonant ? 'y' : 'eye'
    }
    if (piece && text && /[aeiouy]/i.test(piece[0]) && /[aeiouy]/i.test(text)) {
      flush()
    }
    text += piece
    i += len
  }
  flush()
  return parts.filter((part) => part.text)
}

function titleSyllable(text, stress) {
  const clean = text.replace(/[^a-z]/gi, '') || text
  if (!stress) return clean.toLowerCase()
  return clean.toUpperCase()
}

export function respell(word) {
  if (word?.say) return word.say
  if (word?.id && OVERRIDE[word.id]) return OVERRIDE[word.id]
  if (word?.word && OVERRIDE[word.word]) return OVERRIDE[word.word]
  const ipa = typeof word === 'string' ? word : word?.phonetic
  const parts = syllables(ipa)
  if (!parts.length) return ''
  const anyStress = parts.some((part) => part.stress)
  return parts
    .map((part) => titleSyllable(part.text, anyStress ? part.stress : true))
    .join('-')
}
