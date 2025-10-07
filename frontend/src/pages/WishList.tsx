import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { products } from "../assets/assets";
import ProductCard from "../components/ProductCard";


const WishList = () => {

  const { wishList } = useContext(AppContext);

  const wishListProducts = products.filter((item) => wishList[item._id] === true);
  return (
    <div className='max-w-7xl mx-auto w-full mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
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
          WishList - ({Object.keys(wishList).length})
        </h2>
      </div>

      <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 md:gap-6 mt-6'>
        {wishListProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default WishList