import { useState, useCallback, useEffect } from 'react'
import IntroVideo from './IntroVideo'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ProductsSection from './ProductsSection'
import SolutionsSection from './SolutionsSection'
import ClientsSection from './ClientsSection'
import FeaturesSection from './FeaturesSection'
import AboutCompanySection from './AboutCompanySection'
import Footer from './Footer'

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
      <div className="main-banner" style={{ background: '#000000' }}>
        <Navbar isVisible={showHero} />
        {showHero && <HeroSection />}
        {showHero && <SolutionsSection />}
        {showHero && <FeaturesSection />}
        {showHero && <ProductsSection />}
        {showHero && <ClientsSection />}
        {showHero && <AboutCompanySection />}
        {showHero && <Footer />}
      </div>
    </>
  )
}
