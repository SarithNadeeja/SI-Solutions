import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import ProductsPage from './components/ProductsPage'
import SolutionsPage from './components/SolutionsPage'
import FeaturesPage from './components/FeaturesPage'
import ContactPage from './components/ContactPage'
import Cursor from './components/Cursor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)