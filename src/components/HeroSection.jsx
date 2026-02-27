import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ROTATE_INTERVAL_MS = 5500
const BANNERS = [
  {
    title: 'The World Best Products',
    subtitle: 'Comprehensive Physical Security Solutions for Greater Security, Safety and Efficiency',
  },
  {
    title: 'The World Renowned Brands',
    subtitle: 'Unify Real Estate Security and Building Systems for Simplified Management',
  },
  {
    title: 'The Most Experienced Professionals',
    subtitle: 'Advanced Services & Security, Peace of Mind with Your Family and Business',
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % BANNERS.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const banner = BANNERS[index]

  return (
    <section className="hero-wrapper">
      <div className="hero-inner">
        <div className="hero-orb hero-orb--left" aria-hidden="true" />
        <div className="hero-orb hero-orb--right" aria-hidden="true" />
      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          scale: 0.85,
          filter: 'blur(10px)',
          transform: 'translateZ(-1000px) rotateX(12deg)',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          transform: 'translateZ(0px) rotateX(0deg)',
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <p className="hero-label">SI SOLUTIONS</p>

        <div className="hero-banner-slot">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="hero-banner-slide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="hero-title">{banner.title}</h1>
              <p className="hero-subtitle">{banner.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="secondary-btn">
            Contact Us
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
