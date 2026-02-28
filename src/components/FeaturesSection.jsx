import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    id: 1,
    title: 'Trusted Company',
    description:
      'With years of industry experience and a highly skilled team, we deliver dependable security solutions tailored to your needs. Work with experts you can trust.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Invest as a System',
    description:
      'Security is not an expense — it’s a smart long-term investment. Protect what matters most with integrated, future-ready security systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Flexible Plans',
    description:
      'Customized security solutions designed for every environment and budget. Flexible plans that adapt to your needs without compromise.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '24/7 Fast Support',
    description:
      'Round-the-clock assistance from our dedicated support team. Immediate response, reliable service, and peace of mind — anytime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section className="features-section" ref={ref}>
      <div className="features-section__inner">
        <motion.header
          className="features-section__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="features-section__title">Our Features</h2>
          <p className="features-section__subtitle">
            Experience unmatched excellence with our professional team, delivering reliable and innovative security solutions.
          </p>
        </motion.header>

        <div className="features-section__grid">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="features-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.45,
                delay: isInView ? index * 0.08 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="features-card__icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="features-card__title">{feature.title}</h3>
              <p className="features-card__description">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
