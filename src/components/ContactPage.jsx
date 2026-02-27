import Navbar from './Navbar'
import Footer from './Footer'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar isVisible={true} />
      <main className="contact-page__main" id="contact">
        <section className="contact-page__section">
          <div className="contact-page__inner">
            <header className="contact-page__header">
              <p className="contact-page__eyebrow">CONTACT</p>
              <h1 className="contact-page__title">Contact us</h1>
              <p className="contact-page__subtitle">
                Reach out to our team for consultations, support, or tailored security solutions.
              </p>
            </header>

            <div className="contact-page__layout">
              <div className="contact-page__info">
                <div className="contact-page__info-block">
                  <h2 className="contact-page__label">Address</h2>
                  <p className="contact-page__text">
                    151/18, Jayaliyagama Road, Polgasowita, Sri Lanka.
                  </p>
                </div>

                <div className="contact-page__info-block">
                  <h2 className="contact-page__label">Mail Us</h2>
                  <p className="contact-page__text">
                    <a href="mailto:info@sisolutions.lk" className="contact-page__link">
                      info@sisolutions.lk
                    </a>
                  </p>
                </div>

                <div className="contact-page__info-block">
                  <h2 className="contact-page__label">Telephone</h2>
                  <p className="contact-page__text">
                    <a href="tel:+94707047536" className="contact-page__link">
                      +94 70 704 7536
                    </a>
                  </p>
                </div>

                <div className="contact-page__info-block">
                  <h2 className="contact-page__label">WhatsApp</h2>
                  <p className="contact-page__text">
                    <a
                      href="https://wa.me/94707047536"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-page__link"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-page__map-block">
                <h2 className="contact-page__label">Location</h2>
                <p className="contact-page__map-title">
                  SI SOLUTIONS (PVT) LTD<br />
                  WVFH+C38, Dr Danister De Silva Mawatha, Colombo 00900
                </p>
                <div className="contact-page__map-frame">
                  <iframe
                    title="SI Solutions Location"
                    src="https://www.google.com/maps?q=WVFH%2BC38%20Dr%20Danister%20De%20Silva%20Mawatha%20Colombo%2000900&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

