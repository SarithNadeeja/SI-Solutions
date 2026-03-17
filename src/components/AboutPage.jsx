import Navbar from './Navbar'
import Footer from './Footer'
import ContactModal from './ContactModel'
import { useState } from 'react'

const OFFERINGS = [
  {
    id: 1,
    title: 'Advanced Surveillance Systems',
    description:
      'From high-definition cameras to intelligent video analytics, our range of products is designed to meet diverse security requirements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'We understand that every client is unique. Our team works closely with you to design and implement a surveillance system tailored to your specific needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'Our skilled technicians above 10 years experienced ensure that your surveillance system is installed correctly and efficiently, providing optimal coverage and performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'We are committed to providing ongoing support and maintenance to ensure your system operates seamlessly, offering peace of mind long after the initial installation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 9a3 3 0 0 1 6 0c0 1.657-3 3-3 3" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="about-page">
      <Navbar isVisible={true} />
      <main className="about-page__main">
        <section className="about-company about-page__section">
          <div className="about-company__inner">
            <header className="about-company__header">
              <p className="about-company__eyebrow">ABOUT</p>
              <h1 className="about-company__title">About Our Company</h1>
              <p className="about-company__lead">
                At SI Solutions (Pvt) Ltd, we are dedicated to providing cutting-edge surveillance
                solutions tailored to meet the unique needs of our clients. With a steadfast
                commitment to security and innovation, we strive to deliver reliable, high-quality
                products and services that safeguard your assets and enhance your peace of mind.
              </p>
            </header>

            <div className="about-company__main">
              <div className="about-company__about">
                <h2 className="about-company__subheading">Who We Are</h2>
                <p className="about-company__text">
                  Founded in 2019, SI Solutions (Pvt) Ltd has grown to become a trusted leader in
                  the surveillance industry. Our team of seasoned professionals brings together
                  extensive experience and a passion for security technology, enabling us to offer
                  comprehensive solutions that are both effective and efficient.
                </p>
              </div>
              <aside className="about-company__mission">
                <h2 className="about-company__subheading">Our Mission</h2>
                <p className="about-company__text">
                  Our mission is simple: to provide state-of-the-art surveillance systems that help
                  our clients protect what matters most. We achieve this by continuously investing
                  in research and development, ensuring that our products remain at the forefront
                  of technological advancements. Whether you need a simple home security setup or
                  a complex commercial surveillance network, we have the expertise and resources to
                  deliver exceptional results.
                </p>
              </aside>
            </div>

            <section className="about-company__offerings">
              <div className="about-company__offerings-header">
                <h3 className="about-company__offerings-title">What We Offer</h3>
              </div>
              <div className="about-company__offerings-grid">
                {OFFERINGS.map((offering) => (
                  <article key={offering.id} className="about-company__offering">
                    <div className="about-company__offering-icon" aria-hidden="true">
                      {offering.icon}
                    </div>
                    <h4 className="about-company__offering-title">{offering.title}</h4>
                    <p className="about-company__offering-text">{offering.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="about-company__cta">
              <p className="about-company__cta-text">
                Ready to enhance your security with a top-tier surveillance system? Contact us today
                to learn more about our products and services or to schedule a consultation with
                one of our experts.
              </p>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setIsContactOpen(true)}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

