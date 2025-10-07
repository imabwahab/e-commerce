import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import FlashSale from '../components/FlashSale'
import NewArrival from '../components/NewArrival'

const Home = () => {
  return (
    <div className='pt-20 max-w-7xl mx-auto'>

      <HeroSection />
      <FlashSale />
      <Categories />
      <BestSelling />
      <NewArrival />
    </div>

  )
}

export default Home