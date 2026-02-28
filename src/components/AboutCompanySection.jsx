import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from "./ContactModel"

const OFFERINGS = [
  {
    id: 1,
    title: 'Advanced Surveillance Systems',
    description:
      'High-definition cameras, intelligent analytics, and integrated monitoring solutions.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <circle cx="9" cy="12" r="2.2" />
        <path d="M14.5 12H19" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description:
      'Tailored system design to meet your unique residential or commercial requirements.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Professional Installation',
    description:
      'Experienced technicians ensuring optimal coverage, configuration, and performance.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h4l3-7" />
        <path d="M13 3l8 8-4 4-8-8z" />
        <path d="M7 17l-4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description:
      'Reliable maintenance and 24/7 assistance to keep your systems running seamlessly.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 9a3 3 0 0 1 6 0c0 1.657-3 3-3 3" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

export default function AboutCompanySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="about-company" ref={ref}>
      <div className="about-company__inner">
        <motion.header
          className="about-company__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-company__eyebrow">ABOUT</p>
          <h2 className="about-company__title">About Our Company</h2>
          <p className="about-company__lead">
            At SI Solutions (Pvt) Ltd, we deliver cutting-edge surveillance systems designed
            for the evolving security needs of modern environments.
          </p>
        </motion.header>

        <motion.div
          className="about-company__main"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-company__about">
            <h3 className="about-company__subheading">Who we are</h3>
            <p className="about-company__text">
              Since 2019, we have built a reputation as a trusted security partner, combining
              technical expertise with innovative solutions to safeguard what matters most.
            </p>
          </div>
          <aside className="about-company__mission">
            <h3 className="about-company__subheading">Our Mission</h3>
            <p className="about-company__text">
              To provide state-of-the-art surveillance solutions that empower our clients to
              protect their assets with confidence. Through continuous innovation and a
              commitment to quality, we deliver reliable, future-ready security systems.
            </p>
          </aside>
        </motion.div>

        <section className="about-company__offerings">
          <div className="about-company__offerings-header">
            <h3 className="about-company__offerings-title">What We Offer</h3>
          </div>
          <div className="about-company__offerings-grid">
            {OFFERINGS.map((offering, index) => (
              <motion.article
                key={offering.id}
                className="about-company__offering"
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: 0.4,
                  delay: isInView ? index * 0.08 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about-company__offering-icon" aria-hidden="true">
                  {offering.icon}
                </div>
                <h4 className="about-company__offering-title">{offering.title}</h4>
                <p className="about-company__offering-text">{offering.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.div
          className="about-company__cta"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-company__cta-text">
            Ready to upgrade your security infrastructure?
          </p>
          <button
            type="button"
            className="secondary-btn"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  )
}

