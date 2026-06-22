import { useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// Captures the install prompt and stores it on window so any button can use it
export default function PWAInstallBanner() {
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      ;(window as any).__pwaPrompt = e as BeforeInstallPromptEvent
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  return null
}
