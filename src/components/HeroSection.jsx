import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const duration = 1.4
const ease = [0.22, 1, 0.36, 1]

export default function HeroSection() {
  // Drive transform string with motion values so it interpolates smoothly (no z property)
  const translateZ = useMotionValue(-800)
  const rotateX = useMotionValue(8)
  const transform = useTransform(
    [translateZ, rotateX],
    ([z, rx]) => `translateZ(${z}px) rotateX(${rx}deg)`
  )

  useEffect(() => {
    const c1 = animate(translateZ, 0, { duration, ease })
    const c2 = animate(rotateX, 0, { duration, ease })
    return () => {
      c1.stop()
      c2.stop()
    }
  }, [translateZ, rotateX])

  return (
    <div
      className="hero-section-wrapper"
      style={{
        perspective: '1400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#000',
      }}
    >
      <div style={{ width: '100%', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            scale: 0.85,
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration,
            ease,
          }}
          style={{
            transformStyle: 'preserve-3d',
            transform,
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <motion.p
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '0.25rem',
            }}
          >
            SI Solutions
          </motion.p>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}
          >
            The World Best Products
          </motion.h1>
          <motion.p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '560px',
              marginBottom: '2rem',
            }}
          >
            Comprehensive Physical Security Solutions for Greater Security, Safety
            and Efficiency
          </motion.p>
          <motion.div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <motion.a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '4px',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              whileHover={{
                borderColor: '#fff',
                color: '#fff',
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
