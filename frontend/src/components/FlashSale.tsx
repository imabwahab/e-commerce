import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import ProductCard from "./ProductCard"
import { useContext, useRef } from "react"
import { AppContext } from "../context/AppContext"

const FlashSale = () => {

  const { products, navigate } = useContext(AppContext);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -300,
      behavior: "smooth"
    })
  }

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className='w-full mt-16 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Today's</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Flash Sales
        </h2>

        <div className='flex gap-2'>
          <button
            onClick={handleScrollLeft}
            className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowLeft className='text-lg' />
          </button>
          <button
            onClick={handleScrollRight}
            className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowRight className='text-lg' />
          </button>
        </div>


      </div>

      <div
        ref={scrollContainerRef}
        className=' flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-9  scroll-smooth'>
        {products
          .filter((product) => product.isOnSale === true)

          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>

      <button
        onClick={() => navigate('/products')}
        className='px-6 text-sm md:px-10 py-4 flex items-center justify-center bg-red-500 text-white  rounded-lg transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer'>
        View All
      </button>
    </div>
  )
}

export default FlashSale