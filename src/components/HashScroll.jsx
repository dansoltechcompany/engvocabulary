'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function HashScroll() {
  const pathname = usePathname()
  useEffect(() => {
    const hash = safeDecode(window.location.hash.replace(/^#/, ''))
    const run = () => {
      if (hash && hash !== 'main') {
        const node = document.getElementById(hash)
        if (node) {
          node.scrollIntoView({ block: 'center' })
          return
        }
      }
      window.scrollTo(0, 0)
    }
    requestAnimationFrame(run)
  }, [pathname])
  return null
}
