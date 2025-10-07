import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { products } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";


const ProductCategory = () => {



  const category = useParams<{ category: string }>();
  const filteredProducts = products.filter((item) => item.category.toLowerCase() === category.category?.toLocaleLowerCase());
  console.log(filteredProducts)
  return (
    <div className='max-w-7xl mx-auto w-full mt-30 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Category</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          {category.category?.toLocaleUpperCase()}
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
        {filteredProducts
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>
    </div>
  )
}

export default ProductCategory;