import '../index.css'
import { SITE } from '../data/site.js'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '../lib/seo.js'
import { StudyProvider } from '../components/StudyProvider.jsx'
import { SiteShell } from '../components/SiteShell.jsx'
import { HashScroll } from '../components/HashScroll.jsx'
import { ServiceWorkerRegister } from '../components/ServiceWorkerRegister.jsx'

export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: DEFAULT_TITLE,
    template: '%s',
  },
  description: DEFAULT_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/icon-192.png',
  },
  appleWebApp: {
    capable: true,
    title: 'EngVocab',
    statusBarStyle: 'default',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport = {
  themeColor: '#1c1915',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@500..800&family=Fraunces:opsz,wght@9..144,500..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StudyProvider>
          <HashScroll />
          <ServiceWorkerRegister />
          <SiteShell>{children}</SiteShell>
        </StudyProvider>
      </body>
    </html>
  )
}
