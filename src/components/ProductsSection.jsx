import { useState, useEffect } from 'react'

const PRODUCT_IMAGES = [
  { src: '/assets/products/product_2.jpg', label: 'Product' },
  { src: '/assets/products/product_3.jpg', label: 'Product' },
  { src: '/assets/products/product_4.jpg', label: 'Product' },
  { src: '/assets/products/product_6.jpg', label: 'Product' },
  { src: '/assets/products/product_7.jpg', label: 'Product' },
  { src: '/assets/products/product_8.jpg', label: 'Product' },
  { src: '/assets/products/product_9.jpg', label: 'Product' },
  { src: '/assets/products/product_12.jpg', label: 'Product' },
  { src: '/assets/products/product_14.jpg', label: 'Product' },
  { src: '/assets/products/product_15.jpg', label: 'Product' },
  { src: '/assets/products/product_16.jpg', label: 'Product' },
  { src: '/assets/products/product_17.jpg', label: 'Product' },
]

const VISIBLE_RADIUS = 3
const AUTO_ADVANCE_MS = 5000

function wrapOffset(index, center, n) {
  let offset = index - center
  if (offset > n / 2) offset -= n
  if (offset < -n / 2) offset += n
  return offset
}

export default function ProductsSection() {
  const products = PRODUCT_IMAGES
  const [centerIndex, setCenterIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCenterIndex((i) => (i + 1) % products.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [products.length])

  const n = products.length

  return (
    <section className="products-section">
      <div className="products-section__inner">
        <header className="products-section__header">
          <h2 className="products-section__title">Our Products</h2>
          <p className="products-section__subtitle">
            We introduce world renowned products for our clients
          </p>
        </header>

        <div className="products-stage">
          <div className="products-stage__track">
            {products.map((product, index) => {
              const offset = wrapOffset(index, centerIndex, n)
              const absOffset = Math.abs(offset)
              if (absOffset > VISIBLE_RADIUS) return null

              return (
                <article
                  key={product.src}
                  className="products-stage__card"
                  data-center={offset === 0}
                  style={{
                    '--stage-offset': offset,
                    '--stage-abs': absOffset,
                  }}
                >
                  <div className="products-stage__card-inner">
                    <div className="products-stage__image-wrap">
                      <img src={product.src} alt={product.label} loading="lazy" />
                    </div>
                    <p className="products-stage__label">{product.label}</p>
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
