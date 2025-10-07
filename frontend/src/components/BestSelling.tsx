
import { products } from '../assets/assets'
import ProductCard from './ProductCard'

const BestSelling = () => {
  return (
    <div className='w-full mt-16 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>This Month</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between  items-center mb-10'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>
          Best Selling Products
        </h2>

        <button className='px-6 text-sm md:px-10 py-4 flex items-center justify-center bg-red-500 text-white  rounded-lg transition-all duration-300 shadow-sm hover:shadow-md'>
          View All
        </button>

      </div>

      <div className=' grid gap-4  justify-items-center px-auto py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products
          .filter((product) => product.isBestSelling === true)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>


    </div>
  )
}

export default BestSelling