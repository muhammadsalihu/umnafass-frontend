import { useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// Captures the install prompt and stores it on window so any button can use it
export default function PWAInstallBanner() {
  useEffect(() => {
    const handler = (e: Event) => {
      // Don't call e.preventDefault() — that suppresses Chrome's native install banner
      ;(window as any).__pwaPrompt = e as BeforeInstallPromptEvent
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  return null
}
