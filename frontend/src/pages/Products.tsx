import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ImFinder } from "react-icons/im";
import ProductHeader from "../components/ProductHeader";

const Products = () => {

  const { filteredProducts } = useContext(AppContext);


  return (
    <>
      <div className='w-full max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8'>

        <ProductHeader header="All Categories" title="Products" />

        {(filteredProducts.length !== 0) ?
          <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 md:gap-6 mt-6'>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          :
          <div className='w-full max-w-7xl mx-auto  mb-20 px-4 sm:px-6 lg:px-8' >
            <div className='flex flex-col items-center justify-center py-20'>
              <ImFinder className='w-24 h-24 text-gray-300 mb-4' />
              <h2 className='text-2xl font-semibold text-gray-700 mb-2'>No Product Found.</h2>
              <p className='text-gray-500'>search/select another product category</p>
            </div>
          </div>
        }

      </div >
    </>
  )
}

export default Products