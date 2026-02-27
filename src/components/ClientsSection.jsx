import { useState, useEffect } from 'react'

const CLIENT_IMAGES = [
  { src: '/assets/clients/client_1.jpg', label: 'Client' },
  { src: '/assets/clients/client_2.jpg', label: 'Client' },
  { src: '/assets/clients/client_3.jpg', label: 'Client' },
  { src: '/assets/clients/client_4.jpg', label: 'Client' },
  { src: '/assets/clients/client_5.jpg', label: 'Client' },
  { src: '/assets/clients/client_6.jpg', label: 'Client' },
  { src: '/assets/clients/client_7.jpg', label: 'Client' },
  { src: '/assets/clients/client_8.jpg', label: 'Client' },
  { src: '/assets/clients/client_9.jpg', label: 'Client' },
]

const VISIBLE_RADIUS = 3
const AUTO_ADVANCE_MS = 5000

function wrapOffset(index, center, n) {
  let offset = index - center
  if (offset > n / 2) offset -= n
  if (offset < -n / 2) offset += n
  return offset
}

export default function ClientsSection() {
  const clients = CLIENT_IMAGES
  const [centerIndex, setCenterIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCenterIndex((i) => (i + 1) % clients.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [clients.length])

  const n = clients.length

  return (
    <section className="products-section clients-section">
      <div className="products-section__inner">
        <header className="products-section__header">
          <h2 className="products-section__title">Our Clients</h2>
          <p className="products-section__subtitle">
            We take pride in the trust placed in us by our esteemed clients
          </p>
        </header>

        <div className="products-stage">
          <div className="products-stage__track">
            {clients.map((client, index) => {
              const offset = wrapOffset(index, centerIndex, n)
              const absOffset = Math.abs(offset)
              if (absOffset > VISIBLE_RADIUS) return null

              return (
                <article
                  key={client.src}
                  className="products-stage__card"
                  data-center={offset === 0}
                  style={{
                    '--stage-offset': offset,
                    '--stage-abs': absOffset,
                  }}
                >
                  <div className="products-stage__card-inner">
                    <div className="products-stage__image-wrap">
                      <img src={client.src} alt={client.label} loading="lazy" />
                    </div>
                    <p className="products-stage__label">{client.label}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
