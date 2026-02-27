import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const TRAIL_SIZE = 14

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const trailX = useSpring(cursorX, { damping: 30, stiffness: 180 })
  const trailY = useSpring(cursorY, { damping: 30, stiffness: 180 })

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    const handleMouseOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, select, textarea')
      setIsPointer(!!interactive)
    }
    const handleMouseOut = () => {
      setIsPointer(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseleave', handleLeave)
    document.body.addEventListener('mouseenter', handleEnter)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.body.removeEventListener('mouseenter', handleEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="cursor-trail"
      data-pointer={isPointer}
      style={{
        x: trailX,
        y: trailY,
        translateX: -TRAIL_SIZE / 2,
        translateY: -TRAIL_SIZE / 2,
        width: TRAIL_SIZE,
        height: TRAIL_SIZE,
      }}
    />
  )
}
