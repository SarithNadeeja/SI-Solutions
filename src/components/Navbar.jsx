import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

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
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()

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
        <Link to="/" className="navbar-logo">
          <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="SI Solutions logo" />
        </Link>

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
          {navItems.map((label) => {
            const to = getNavHref(label)
            const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
            return (
              <Link
                key={label}
                to={to}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={handleNavClick}
              >
                {label}
              </Link>
            )
          })}
          <button
            type="button"
            className={`navbar__theme-toggle navbar__theme-toggle--${theme}`}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <span className="navbar__theme-track">
              <span className="navbar__theme-icon navbar__theme-icon--sun">☀️</span>
              <span className="navbar__theme-icon navbar__theme-icon--moon">☾</span>
              <span className="navbar__theme-thumb" />
            </span>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}
