import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CLIENT_IMAGES = [
  { src: `${import.meta.env.BASE_URL}assets/clients/client_1.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_2.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_3.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_4.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_5.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_6.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_7.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_8.jpg`, label: 'Client' },
  { src: `${import.meta.env.BASE_URL}assets/clients/client_9.jpg`, label: 'Client' },
]

const VISIBLE_RADIUS = 3
const AUTO_ADVANCE_MS = 5000
const DRAG_STEP_PX = 60

function wrapOffset(index, center, n) {
  let offset = index - center
  if (offset > n / 2) offset -= n
  if (offset < -n / 2) offset += n
  return offset
}

export default function ClientsSection() {
  const clients = CLIENT_IMAGES
  const [centerIndex, setCenterIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })
  const dragStartX = useRef(0)

  useEffect(() => {
    if (isDragging) return
    const id = setInterval(() => {
      setCenterIndex((i) => (i + 1) % clients.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [clients.length, isDragging])

  const n = clients.length

  const handlePointerDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    dragStartX.current = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
  }

  const handlePointerMove = (e) => {
    if (!isDragging) return
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
    const deltaX = clientX - dragStartX.current
    if (Math.abs(deltaX) >= DRAG_STEP_PX) {
      const direction = deltaX > 0 ? -1 : 1
      setCenterIndex((i) => (i + direction + n) % n)
      dragStartX.current = clientX
    }
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <section className="products-section clients-section" ref={ref}>
      <div className="products-section__inner">
        <motion.header
          className="products-section__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="products-section__title">Our Clients</h2>
          <p className="products-section__subtitle">
            We take pride in the trust placed in us by our esteemed clients
          </p>
        </motion.header>

        <motion.div
          className="products-stage"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="products-stage__track"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
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
        </motion.div>
      </div>
    </section>
  )
}
