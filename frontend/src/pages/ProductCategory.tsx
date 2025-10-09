
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductHeader from "../components/ProductHeader";


const ProductCategory = () => {

  const { filteredProducts } = useContext(AppContext);


  const category = useParams<{ category: string }>();
  const products = filteredProducts.filter((item) => item.category.toLowerCase() === category.category?.toLocaleLowerCase());
  console.log(products)
  return (
    <div className='max-w-7xl mx-auto w-full mt-32 mb-20 px-4 sm:px-6 lg:px-8'>

      <ProductHeader header="Category" title={category.category} />

      <div className=' grid gap-4  justify-items-center px-auto py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>
    </div>
  )
}

export default ProductCategory;