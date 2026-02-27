import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  'Home',
  'About',
  'Products',
  'Solutions',
  'Features',
  'Contact us',
]

function getNavHref(label) {
  if (label === 'Home') return '/'
  if (label === 'About') return '/about'
  if (label === 'Products') return '/products'
  if (label === 'Solutions') return '/solutions'
  if (label === 'Features') return '/features'
  if (label === 'Contact us') return '/contact'
  return '#'
}

export default function Navbar({ isVisible }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
  }

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
    >
      <div className="navbar__inner">
        <a href="/" className="navbar-logo">
          <img src="/assets/logo.png" alt="SI Solutions logo" />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {navItems.map((label) => (
            <a
              key={label}
              href={getNavHref(label)}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
