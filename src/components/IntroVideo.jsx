import { useCallback, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Fullscreen intro video (2s). Fades out when ended, then calls onIntroEnd.
 * Place your 2-second CCTV lens zoom MP4 in public/intro.mp4
 * If the video fails to load, triggers onIntroEnd after fallback so you can test the hero.
 */
const START_ANIMATION_BEFORE_END_SECONDS = 1.2

export default function IntroVideo({ onIntroEnd, isFadingOut }) {
  const fallbackTimeout = useRef(null)
  const hasTriggered = useRef(false)
  const [isVideoReady, setIsVideoReady] = useState(false)

  const triggerHero = useCallback(() => {
    if (hasTriggered.current) return
    hasTriggered.current = true
    if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)
    onIntroEnd()
  }, [onIntroEnd])

  useEffect(() => {
    fallbackTimeout.current = setTimeout(triggerHero, 4000)
    return () => {
      if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)
    }
  }, [triggerHero])

  const handleTimeUpdate = useCallback(
    (e) => {
      const video = e.currentTarget
      if (
        video.duration > 0 &&
        video.currentTime >= video.duration - START_ANIMATION_BEFORE_END_SECONDS
      ) {
        triggerHero()
      }
    },
    [triggerHero],
  )

  const handleEnded = useCallback(() => {
    triggerHero()
  }, [triggerHero])

  const handleError = useCallback(() => {
    triggerHero()
  }, [triggerHero])

  const handleCanPlayThrough = useCallback(() => {
    setIsVideoReady(true)
  }, [])

  return (
    <motion.div
      className="intro-video-layer"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isFadingOut ? 0 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 20,
        pointerEvents: isFadingOut ? 'none' : 'auto',
        background: '#000',
      }}
    >
      {!isVideoReady && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Initializing...
        </div>
      )}

      <video
        className="intro-video"
        src={`${import.meta.env.BASE_URL}intro.mp4`}
        autoPlay
        muted
        playsInline
        onCanPlayThrough={handleCanPlayThrough}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          visibility: isVideoReady ? 'visible' : 'hidden',
        }}
      />
    </motion.div>
  )
}
