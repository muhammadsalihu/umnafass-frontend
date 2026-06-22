import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) && !(navigator as any).standalone

const isInStandaloneMode = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as any).standalone === true

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)
  const [iosHint, setIosHint] = useState(false)

  useEffect(() => {
    if (isInStandaloneMode()) return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // iOS doesn't fire beforeinstallprompt — show manual instructions instead
    if (isIOS()) setIosHint(true)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setVisible(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setVisible(false)
    setIosHint(false)
  }

  // Android / Chrome install banner
  if (visible && deferredPrompt) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F220C] text-white px-4 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Umnafass" className="h-8 w-8 rounded-md object-contain bg-white p-0.5" />
          <div>
            <p className="text-sm font-semibold leading-tight">Install Umnafass App</p>
            <p className="text-xs text-green-300 leading-tight">Add to your home screen for quick access</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          <button
            onClick={handleInstall}
            className="bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white text-lg leading-none px-1"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  // iOS manual instructions banner
  if (iosHint) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F220C] text-white px-4 py-3 shadow-2xl">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Umnafass" className="h-8 w-8 rounded-md object-contain bg-white p-0.5" />
            <div>
              <p className="text-sm font-semibold leading-tight">Install Umnafass App</p>
              <p className="text-xs text-green-300 leading-tight">
                Tap <span className="font-bold">Share</span> then <span className="font-bold">"Add to Home Screen"</span>
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white text-lg leading-none px-1 ml-4 shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return null
}
