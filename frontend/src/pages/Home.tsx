import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='pt-20'>
      <HeroSection />


      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>



      <Footer />


    </div>
  )
}

export default Home