import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { handleContactClick } from '../utils/contactActions'

const SLIDES = [
  {
    id: 1,
    label: 'Security Excellence',
    headline: 'The World Best Products for You',
    description:
      'Comprehensive physical security solutions engineered for 24/7 protection and operational efficiency.',
  },
  {
    id: 2,
    label: 'Trusted Global Brands',
    headline: 'The World Renowned Brands',
    description:
      'Unify cameras, sensors, and building systems from world‑class manufacturers into one intelligent platform.',
  },
  {
    id: 3,
    label: 'Expert Security Engineers',
    headline: 'The Most Experianced Professionals',
    description:
      'Design, deployment, and monitoring by certified specialists focused on what matters most to you.',
  },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  // Ensure Lottie web component script is loaded once
  useEffect(() => {
    if (document.querySelector('script[data-lottie-player]')) return
    const script = document.createElement('script')
    script.src =
      'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
    script.async = true
    script.setAttribute('data-lottie-player', 'true')
    document.body.appendChild(script)
  }, [])

  const current = SLIDES[index]

  return (
    <section className="banner">
      <motion.div
        className="banner__inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="banner__left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="banner__copy"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="banner__label-row">
                <span className="banner__pill">{current.label}</span>
              </div>

              <h1 className="banner__headline">{current.headline}</h1>
              <p className="banner__description">{current.description}</p>

              <div className="banner__actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleContactClick}
                >
                  Talk to an expert
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="banner__right"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="banner-visual"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <lottie-player
              src={`${import.meta.env.BASE_URL}assets/robo.json`}
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

