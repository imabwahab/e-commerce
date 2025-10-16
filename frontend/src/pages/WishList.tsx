import ProductCard from "../components/ProductCard";
import { FaRegHeart } from "react-icons/fa";
import { useAppSelector } from "../hooks";


const WishList = () => {

  // const { products, wishList } = useContext(AppContext);
  const { products, wishList } = useAppSelector((state) => state.app)

  const wishListProducts = products.filter((item) => wishList[item._id] === true);

  if (wishListProducts.length === 0) {
    return (
      <div className='w-full max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center py-20'>
          <FaRegHeart className='w-24 h-24 text-gray-300 mb-4' />
          <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Your wish list is empty</h2>
          <p className='text-gray-500'>Add some products to get started!</p>
        </div>
      </div>
    );
  }


  return (
    <div className='max-w-7xl mx-auto w-full mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Wishes</p>
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