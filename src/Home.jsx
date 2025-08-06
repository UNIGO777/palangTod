import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Breadcrumbs from './Components/Breadcrumbs'
import Hero from './Components/Hero'
import OfferBar from './Components/OfferBar'
import AboutTheProduct from './Components/AboutTheProduct'
import ProductGallery from './Components/ProductGallery'
import BenefitsBanner from './Components/BenefitsBanner'
import ResultsShowcase from './Components/ResultsShowcase'
import Testimonials from './Components/Testimonials'
import Checkout from './Components/Checkout'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if URL has #checkout hash
    if (location.hash === '#checkout') {
      // Find checkout section and scroll to it smoothly
      const checkoutSection = document.getElementById('checkout');
      if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar/>
      <Breadcrumbs />
      <Hero/>
      <OfferBar/>
      <article>
        <AboutTheProduct/>
        {/* <ProductGallery/> */}
        <BenefitsBanner/>
        <Testimonials/>
        <ResultsShowcase/>
      </article>
      <section id="checkout" aria-labelledby="checkout-heading">
        <Checkout/>
      </section>
    </> 
  )
}

export default Home