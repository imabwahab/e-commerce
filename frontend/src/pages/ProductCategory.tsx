import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";
import { TbCategoryMinus } from "react-icons/tb";
import { useAppSelector } from "../hooks";


const ProductCategory = () => {

  const { products } = useAppSelector((state) => state.app)

  const category = useParams<{ category: string }>();
  const filteredProducts = products.filter((item) => item.category.toLowerCase() === category.category?.toLocaleLowerCase());

  return (
    <div className='max-w-7xl mx-auto w-full mt-32 mb-20 px-4 sm:px-6 lg:px-8'>

      <ProductHeader header="Category" title={category.category} />

      {(filteredProducts.length === 0) ?
        <div className='w-full max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center py-20'>
            <TbCategoryMinus className='w-24 h-24 text-gray-300 mb-4' />
            <h2 className='text-2xl font-semibold text-gray-700 mb-2'>No prouduct in {category.category} category</h2>
            <p className='text-gray-500'>Explore other categories</p>
          </div>
        </div>
        :
        <div className=' grid gap-4  justify-items-center px-auto py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default ProductCategory;