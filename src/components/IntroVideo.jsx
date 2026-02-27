import { useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Fullscreen intro video (2s). Fades out when ended, then calls onIntroEnd.
 * Place your 2-second CCTV lens zoom MP4 in public/intro.mp4
 * If the video fails to load, triggers onIntroEnd after 2.5s so you can test the hero.
 */
/** Start navbar + hero animation this many seconds before video ends (overlay on video) */
const START_ANIMATION_BEFORE_END_SECONDS = 1.2

export default function IntroVideo({ onIntroEnd, isFadingOut }) {
  const fallbackTimeout = useRef(null)
  const hasTriggered = useRef(false)

  const triggerHero = useCallback(() => {
    if (hasTriggered.current) return
    hasTriggered.current = true
    if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)
    onIntroEnd()
  }, [onIntroEnd])

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
    [triggerHero]
  )

  useEffect(() => {
    fallbackTimeout.current = setTimeout(triggerHero, 800)
    return () => {
      if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)
    }
  }, [triggerHero])

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
      <video
        className="intro-video"
        src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={triggerHero}
        onError={triggerHero}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </motion.div>
  )
}
