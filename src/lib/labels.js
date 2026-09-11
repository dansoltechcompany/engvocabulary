export function stageLabel(stage) {
  if (stage === 'mastered') return 'Mastered'
  if (stage === 'review') return 'Review'
  if (stage === 'learning') return 'Learning'
  return 'New'
}

/** Display form for a dictionary headword: Apple, Ice Cream, USB Stick. */
export function headword(text) {
  const value = String(text || '')
  if (!value) return ''
  return value.replace(/[A-Za-z']+/g, (segment) => {
    if (segment.length > 1 && segment === segment.toUpperCase()) return segment
    return segment.charAt(0).toUpperCase() + segment.slice(1)
  })
}

const SMALL_TITLE_WORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'but',
  'for',
  'to',
  'in',
  'on',
  'of',
  'with',
  'by',
  'as',
  'at',
  'from',
  'into',
  'over',
  'per',
  'via',
])

/**
 * Headline / SEO title case: capitalize main words; keep short words lowercase
 * unless they are first or last. Keeps EngVocabulary and A1–C2 levels intact.
 */
export function titleCase(text) {
  const words = String(text || '').trim().split(/\s+/)
  if (!words[0]) return ''
  return words
    .map((word, index) => {
      if (/^[—–|·•/]$/.test(word)) return word
      if (/^EngVocabulary\b/i.test(word)) {
        return word.replace(/^engvocabulary/i, 'EngVocabulary')
      }
      if (/^\(?[A-C][12]([–-][A-C][12])?\)?$/i.test(word)) {
        return word.replace(/[A-Ca-c][12]/g, (level) => level.toUpperCase())
      }

      const isEdge = index === 0 || index === words.length - 1
      const bare = word.replace(/[^A-Za-z']/g, '').toLowerCase()
      if (!bare) return word
      if (!isEdge && SMALL_TITLE_WORDS.has(bare)) {
        return word.replace(/[A-Za-z']+/g, bare)
      }

      return word.replace(/[A-Za-z']+/g, (segment) => {
        if (/^[A-C][12]$/i.test(segment)) return segment.toUpperCase()
        if (/^EngVocabulary$/i.test(segment)) return 'EngVocabulary'
        // Keep acronyms (USB, DIY, CCTV) and single letters (I) intact.
        if (segment.length > 1 && segment === segment.toUpperCase()) return segment
        return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
      })
    })
    .join(' ')
}

