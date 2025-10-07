import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { products } from "../assets/assets"
import ProductCard from "./ProductCard"

const FlashSale = () => {
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
          <button className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowLeft className='text-lg' />
          </button>
          <button className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowRight className='text-lg' />
          </button>
        </div>
      </div>

      <div className=' grid gap-4  justify-items-center px-auto py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products
          .filter((product) => product.isOnSale === true)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>
    </div>
  )
}

export default FlashSale