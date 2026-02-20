import { motion } from 'framer-motion'

const navItems = [
  'Home',
  'About',
  'Products',
  'Solutions',
  'Projects',
  'Features',
  'Contact us',
]

export default function Navbar({ isVisible }) {
  return (
    <motion.header
      className="navbar"
      initial={{
        opacity: 0,
        transform: 'translateZ(-120px)',
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              transform: 'translateZ(0)',
            }
          : {}
      }
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.15,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'transparent',
      }}
    >
      <span
        className="navbar-logo"
        style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
        }}
      >
        SI Solutions
      </span>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {navItems.map((label) => (
          <a
            key={label}
            href="#"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
