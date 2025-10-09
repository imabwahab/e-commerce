
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { categories } from '../assets/assets';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Categories = () => {

  const { navigate } = useContext(AppContext);
  const HandleCategoryClick = (path: string) => {
    navigate(`/products/${path}`)
  }
  return (
    <div className='w-full mt-16 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Categories</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Browse By Category
        </h2>
        {/* <div className='flex gap-2'>
          <button className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowLeft className='text-lg' />
          </button>
          <button className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md'>
            <FaArrowRight className='text-lg' />
          </button>
        </div> */}
      </div>

      {/* Categories Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6'>
        {categories.map((cat, index) => (
          <div key={index} onClick={() => HandleCategoryClick(cat.path)}>
            <div
              key={index}
              className='group bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col gap-4 items-center justify-center hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[180px]'
            >
              <div className='w-16 h-16 flex items-center justify-center overflow-hidden'>
                <img
                  src={cat.image}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  alt={cat.title}
                />
              </div>
              <h3 className='text-base font-medium text-gray-900 group-hover:text-red-500 transition-colors duration-300 text-center'>
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories