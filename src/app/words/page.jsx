import { LibraryScreen } from '../../components/screens.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'English vocabulary A1 to C2 | EngVocabulary',
  description: 'Browse English words by level, with clear meanings and example sentences.',
  path: '/words',
})

export default function WordsPage() {
  return <LibraryScreen />
}
