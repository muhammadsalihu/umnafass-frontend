import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent)
const isInStandaloneMode = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as any).standalone === true

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isInStandaloneMode()) {
      setInstalled(true)
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => setInstalled(true))

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  if (installed) return null

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') setInstalled(true)
      setDeferredPrompt(null)
    } else {
      // No native prompt available — show manual instructions
      setShowModal(true)
    }
  }

  return (
    <>
      {/* Sticky bottom install bar — always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F220C] text-white px-4 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Umnafass"
            className="h-8 w-8 rounded-md object-contain bg-white p-0.5 shrink-0"
          />
          <div>
            <p className="text-sm font-semibold leading-tight">Get the Umnafass App</p>
            <p className="text-xs text-green-300 leading-tight">Install for quick access anytime</p>
          </div>
        </div>
        <button
          onClick={handleInstallClick}
          className="ml-4 shrink-0 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-5 py-2 rounded-full transition-colors"
        >
          Install App
        </button>
      </div>

      {/* Instruction modal for iOS / unsupported browsers */}
      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 px-4 pb-20"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Umnafass" className="h-10 w-10 rounded-xl object-contain" />
              <div>
                <p className="font-bold text-base">Install Umnafass</p>
                <p className="text-xs text-gray-500">Add to your home screen</p>
              </div>
            </div>

            {isIOS() ? (
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>Tap the <span className="font-semibold">Share</span> button at the bottom of Safari (the box with an arrow)</li>
                <li>Scroll down and tap <span className="font-semibold">"Add to Home Screen"</span></li>
                <li>Tap <span className="font-semibold">Add</span> in the top right</li>
              </ol>
            ) : (
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>Open this site in <span className="font-semibold">Chrome</span> on your phone</li>
                <li>Tap the <span className="font-semibold">⋮ menu</span> (top right)</li>
                <li>Tap <span className="font-semibold">"Add to Home Screen"</span></li>
              </ol>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="mt-5 w-full bg-[#0F220C] text-white py-2.5 rounded-full text-sm font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}
