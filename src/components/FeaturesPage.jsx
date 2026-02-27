import Navbar from './Navbar'
import Footer from './Footer'
import FeaturesSection from './FeaturesSection'

export default function FeaturesPage() {
  return (
    <div className="features-page">
      <Navbar isVisible={true} />
      <main className="features-page__main">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

