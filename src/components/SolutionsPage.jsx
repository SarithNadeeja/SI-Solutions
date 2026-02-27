import Navbar from './Navbar'
import Footer from './Footer'
import SolutionsSection from './SolutionsSection'

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <Navbar isVisible={true} />
      <main className="solutions-page__main">
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  )
}

