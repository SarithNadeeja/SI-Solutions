import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const USEFUL_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Contact us', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M13 8.5h-1.1A1.9 1.9 0 0 0 10 10.4V12H9v2h1v4h2v-4h1.6L14 12h-2v-1.6a0.9 0.9 0 0 1 .9-.9H15V8.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social__link"
      aria-label={label}
    >
      <span className="footer-social__icon">{icon}</span>
    </a>
  )
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-60px' })

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col footer__col--company">
            <h3 className="footer__title">Company</h3>
            <p className="footer__text">
              SI Solutions delivers comprehensive physical security solutions for greater safety and efficiency.
            </p>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Useful Links</h3>
            <ul className="footer__links">
              {USEFUL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__link">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Social</h3>
            <div className="footer-social">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <SocialIcon key={label} href={href} label={label} icon={icon} />
              ))}
            </div>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Address & Contact</h3>
            <p className="footer__text">
              SI Solutions Private Limited<br />
              Colombo, Sri Lanka
            </p>
            <p className="footer__text footer__text--contact">
              <a href="mailto:info@sisolutions.lk" className="footer__link">info@sisolutions.lk</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          Copyright ©2024 SI Solutions Private Limited. All rights reserved.
        </p>
        <p className="footer__powered">
          Website powered by –{' '}
          <a href="https://infersioai.com" target="_blank" rel="noopener noreferrer" className="footer__powered-link">
            infersioai.com
          </a>
        </p>
      </div>
    </motion.footer>
  )
}
