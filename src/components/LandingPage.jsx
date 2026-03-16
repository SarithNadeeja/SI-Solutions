import { useState, useCallback, useEffect, useRef } from 'react'
import IntroVideo from './IntroVideo'
import Navbar from './Navbar'
import Banner from './Banner'
import ProductsSection from './ProductsSection'
import SolutionsSection from './SolutionsSection'
import ClientsSection from './ClientsSection'
import FeaturesSection from './FeaturesSection'
import AboutCompanySection from './AboutCompanySection'
import Footer from './Footer'

const FADE_DURATION_MS = 800

/** One-time layout debug: run in console after load to find overflow source */
function useLayoutDebug(enable) {
  const done = useRef(false)
  useEffect(() => {
    if (!enable || done.current) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (done.current) return
        done.current = true
        const vh = window.innerHeight
        const doc = document.documentElement
        const body = document.body
        const root = document.getElementById('root')
        const main = document.querySelector('.main-banner')
        const sections = main
          ? [
              main.querySelector('.solutions-section'),
              main.querySelector('.features-section'),
              main.querySelector('.products-section'),
              main.querySelector('.clients-section'),
              main.querySelector('.about-company'),
              main.querySelector('.footer'),
            ].filter(Boolean)
          : []
        const sectionHeights = sections.map((el) => el.offsetHeight)
        const sectionsSum = sectionHeights.reduce((a, b) => a + b, 0)
        const log = {
          viewportHeight: vh,
          documentScrollHeight: doc.scrollHeight,
          bodyOffsetHeight: body?.offsetHeight,
          rootOffsetHeight: root?.offsetHeight,
          mainBannerOffsetHeight: main?.offsetHeight,
          sectionsSum,
          sectionHeights: sectionHeights.map((h, i) => ({ i, h })),
          overflow: doc.scrollHeight - (main?.offsetHeight ?? 0),
        }
        console.log('[Layout debug]', log)
        if (log.overflow > 2) {
          console.warn('[Layout debug] Extra height (scroll - main-banner):', log.overflow, 'px – check body/#root or section padding/margins.')
        }
      })
    })
    return () => cancelAnimationFrame(id)
  }, [enable])
}

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)
  const [showHero, setShowHero] = useState(false)

  useLayoutDebug(showHero && !showIntro)

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
      <div className="main-banner">
        <Navbar isVisible={showHero} />
        {showHero && <Banner />}
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
