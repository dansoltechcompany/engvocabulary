import { PrivacyPage } from '../../components/legal.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Privacy — EngVocabulary',
  description: 'How EngVocabulary stores progress on your device, and what we do not collect.',
  path: '/privacy',
})

export default function Privacy() {
  return <PrivacyPage />
}
