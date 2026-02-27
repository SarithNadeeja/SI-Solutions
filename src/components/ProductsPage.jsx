import Navbar from './Navbar'
import Footer from './Footer'

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

export default function ProductsPage() {
  return (
    <div className="products-page">
      <Navbar isVisible={true} />
      <main className="products-page__main">
        <section className="products-page__section">
          <div className="products-page__inner">
            <header className="products-page__header">
              <p className="products-page__eyebrow">PRODUCTS</p>
              <h1 className="products-page__title">Our Product Portfolio</h1>
              <p className="products-page__subtitle">
                Explore a curated selection of surveillance and security technologies we deploy for
                our clients.
              </p>
            </header>

            <div className="products-page__grid">
              {PRODUCT_IMAGES.map((product) => (
                <article key={product.src} className="products-page__card">
                  <div className="products-page__image-wrap">
                    <img src={product.src} alt={product.label} loading="lazy" />
                  </div>
                  <p className="products-page__label">{product.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

