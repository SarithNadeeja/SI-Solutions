import { useState, useCallback, useEffect } from 'react'
import IntroVideo from './IntroVideo'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

const FADE_DURATION_MS = 800

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)
  const [showHero, setShowHero] = useState(false)

  const handleIntroEnd = useCallback(() => {
    setFadingOut(true)
    setShowHero(true)
  }, [])

  useEffect(() => {
    if (!fadingOut) return
    const t = setTimeout(() => setShowIntro(false), FADE_DURATION_MS)
    return () => clearTimeout(t)
  }, [fadingOut])

  return (
    <>
      {showIntro && (
        <IntroVideo onIntroEnd={handleIntroEnd} isFadingOut={fadingOut} />
      )}
      <div style={{ background: '#000000', minHeight: '100vh' }}>
        <Navbar isVisible={showHero} />
        {showHero && <HeroSection />}
      </div>
    </>
  )
}
