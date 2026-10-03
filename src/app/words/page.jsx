import { LibraryScreen } from '../../components/screens.jsx'
import { WordDirectory } from '../../components/WordDirectory.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'English vocabulary A1 to C2 | EngVocabulary',
  description: 'Browse every English word from A to Z, with clear meanings and example sentences from A1 to C2.',
  path: '/words',
})

export default function WordsPage() {
  return (
    <>
      <WordDirectory />
      <LibraryScreen embedded />
    </>
  )
}
