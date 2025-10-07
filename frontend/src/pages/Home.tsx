import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import FlashSale from '../components/FlashSale'

const Home = () => {
  return (
    <div className='pt-20'>
      <div className='max-w-7xl mx-auto'>
        <HeroSection />
        <FlashSale />
        <Categories />
        <BestSelling />
      </div>

      <Footer />
    </div>
  )
}

export default Home