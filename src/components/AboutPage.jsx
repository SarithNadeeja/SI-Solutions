import Navbar from './Navbar'
import Footer from './Footer'

const HIGHLIGHTS = [
  'Island wide service guarantee',
  'High quality branded products',
  'Rely on professionals',
]

export default function AboutPage() {
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
                solutions tailored to the unique needs of our clients.
              </p>
            </header>

            <div className="about-company__main">
              <div className="about-company__about">
                <h2 className="about-company__subheading">Who We Are</h2>
                <p className="about-company__text">
                  Founded in 2019, SI Solutions (Pvt) Ltd has grown to become a trusted leader in
                  the surveillance industry. Our team of seasoned professionals brings extensive
                  experience and a passion for security technology.
                </p>
                <p className="about-company__text" style={{ marginTop: '0.85rem' }}>
                  We design, implement, and manage advanced security solutions that protect your
                  business, assets, and people. From video surveillance and access control to
                  intrusion detection and beyond, we deliver integrated strategies to meet the
                  complex challenges of modern security.
                </p>
              </div>
              <aside className="about-company__mission">
                <h2 className="about-company__subheading">Our Mission</h2>
                <p className="about-company__text">
                  To provide state-of-the-art surveillance solutions that empower our clients to
                  protect their assets with confidence. Through quality, innovation, and responsive
                  service, we ensure reliable, future-ready security systems that deliver genuine
                  peace of mind.
                </p>
              </aside>
            </div>

            <div className="about-page__highlights">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="about-page__highlight">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

