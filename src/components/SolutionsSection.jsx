import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SOLUTIONS = [
  {
    id: 1,
    title: 'CCTV Surveillance System',
    image: `${import.meta.env.BASE_URL}assets/cctv.jpg`,
    features: [
      'Installation and Setup',
      'Monitoring and Surveillance',
      'Maintenance and Support',
      'Video Storage and Management',
      'Security and Analytics',
    ],
  },
  {
    id: 2,
    title: 'Access Control Systems',
    image: `${import.meta.env.BASE_URL}assets/access_control.jpg`,
    features: [
      'System Design and Installation',
      'User Management and Authentication',
      'Integration with Other Systems',
      'Monitoring and Reporting',
      'Maintenance and Support',
    ],
  },
  {
    id: 3,
    title: 'Fire Detection System',
    image: `${import.meta.env.BASE_URL}assets/fire.png`,
    features: [
      'Fire Detection',
      'Alerting and Notification',
      'Control and Suppression',
      'Integration with Other Systems',
      'Emergency Response Coordination',
      'Maintenance and Testing',
      'System Monitoring',
    ],
  },
  {
    id: 4,
    title: 'Security Alarm System',
    image: `${import.meta.env.BASE_URL}assets/security_alarm_1.jpg`,
    features: [
      'Monitoring and Analysis',
      'Threat Detection',
      'Alerting and Notification',
      'Incident Response',
      'Behavioral Analysis',
      'Signature-based Detection',
      'Anomaly-based Detection',
      'Integration with Other Security Tools',
    ],
  },
]

function Card({ solution, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      className="solution-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: isInView ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="solution-card__media">
        <img src={solution.image} alt={solution.title} loading="lazy" />
      </div>
      <div className="solution-card__body">
        <h3 className="solution-card__title">{solution.title}</h3>
        <ol className="solution-card__list">
          {solution.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{
                duration: 0.3,
                delay: isInView ? index * 0.1 + i * 0.04 : 0,
                ease: 'easeOut',
              }}
            >
              {i + 1}. {feature}
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.article>
  )
}

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-60px' })

  return (
    <section className="solutions-section" ref={ref}>
      <motion.header
        className="solutions-section__header"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="solutions-section__title">Our Solutions</h2>
        <p className="solutions-section__subtitle">
          Safeguard what matters most with our advanced electronic security solutions
        </p>
      </motion.header>

      <div className="solutions-section__grid">
        {SOLUTIONS.map((solution, index) => (
          <Card key={solution.id} solution={solution} index={index} />
        ))}
      </div>
    </section>
  )
}
