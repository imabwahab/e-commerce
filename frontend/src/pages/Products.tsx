import { IoIosSearch } from "react-icons/io";
import { products } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState } from "react";

const Products = () => {
  const [sortPopup, setSortPopup] = useState(false);
  return (
    <>
      <div className='w-full max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='w-4 h-10 bg-red-500 rounded'></span>
            <p className='text-red-500 font-semibold text-base'>All Categories</p>
          </div>
        </div>

        {/* Title and Navigation */}
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Products
          </h2>
          <div className='flex flex-row gap-3'>
            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
              <input
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
              />
              <IoIosSearch />
            </div>

            <div className='relative '>
              <button
                onClick={() => setSortPopup(true)}
                className='py-2 px-3 rounded text-white cursor-pointer bg-red-500'>Sort</button>

              <ul className={`${sortPopup ? "block" : 'hidden'} absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40`}>
                <li onClick={() => setSortPopup(false)} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>a-z</li>
                <li onClick={() => setSortPopup(false)} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>z-a</li>
                <li onClick={() => setSortPopup(false)} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>lowest price</li>
                <li onClick={() => setSortPopup(false)} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>highest price</li>
              </ul>
            </div>

          </div>


        </div>

        <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 md:gap-6 mt-6'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Products