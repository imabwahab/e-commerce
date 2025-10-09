import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Star from '../assets/Five_star.png'
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import type { Product } from "../assets/assets";

const ProductDetails = () => {
  const { id } = useParams();
  const { filteredProducts, addToCart, wishList, toggleWishList } = useContext(AppContext);
  const product: Product = filteredProducts.find((pro) => pro._id === id);


  const [isFavorite, setIsFavorite] = useState(false);

  const [thumbnail, setThumbnail] = useState(product?.image[0]);

  const inWishList = wishList[product._id] === true;

  const relatedProducts = filteredProducts.filter(
    (pro) => pro.category.toLowerCase() === product?.category.toLowerCase() && pro._id !== product?._id
  );

  const HandleFavorite = (id: string) => {
    setIsFavorite(!isFavorite);
    toggleWishList(id)
  }

  useEffect(() => {
    setThumbnail(product?.image[0]);
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 my-20 text-center">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 my-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-gray-900 cursor-pointer">Products</span>
          <span>/</span>
          <span className="hover:text-gray-900 cursor-pointer">{product.category}</span>
          <span>/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-4 md:w-1/2">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className={`border-2 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${thumbnail === image
                    ? "border-primary shadow-md"
                    : "border-gray-200 hover:border-gray-400"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="  object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 border-2 flex items-center justify-center border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={thumbnail}
                alt={product.name}
                className="h-auto w-full max-w-100   object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <img src={Star} alt="" />
              <p className="text-gray-600">(122 reviews)</p>
            </div>

            {/* Pricing */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-bold text-gray-900">
                  ${product.offerPrice}
                </p>
                <p className="text-lg text-gray-500 line-through">
                  ${product.price}
                </p>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                (inclusive of all taxes)
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                About Product
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Premium quality materials and craftsmanship</li>
                <li>Designed for durability and long-lasting use</li>
                <li>Perfect for everyday use</li>
                <li>Easy to maintain and care for</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-4 mt-8">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-4 px-6 font-semibold bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Add to Cart
              </button>

              <button
                onClick={() => HandleFavorite(product._id)}
                className="bg-white hover:bg-red-50 p-4 rounded-lg border-2 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-101   cursor-pointer"
              >
                {inWishList ? (
                  <IoMdHeart className="text-2xl text-red-500" />
                ) : (
                  <IoMdHeartEmpty className="text-2xl text-gray-700 " />
                )}
              </button>

            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Category</p>
                  <p className="font-medium text-gray-900">{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Availability</p>
                  <p className="font-medium text-green-600">In Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl justify-items-center mx-auto px-6 my-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Related Products
          </h2>

          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;