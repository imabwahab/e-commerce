import React, { useContext, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import type { Product } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const { toggleWishList, wishList } = useContext(AppContext);

  const inWishList = wishList[product._id] === true;


  const discount =
    product.price && product.price > product.offerPrice!
      ? Math.round(((product.price - product.offerPrice!) / product.price) * 100)
      : null;

  const HandleFavorite = (id: string) => {
    setIsFavorite(!isFavorite);
    toggleWishList(id)
  }

  return (
    <div

      className="bg-white transition-all duration-300  min-w-[240px] max-w-[300px] w-full  overflow-hidden">
      {/* Image Section */}
      <div className="group cursor-pointer relative flex items-center justify-center w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-md">
        <img
          onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}
          className="group-hover:scale-110 transition-transform duration-500 ease-out max-w-60  md:max-w-65 object-contain"
          src={product.image}
          alt={product.name}
        />

        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            onClick={() => HandleFavorite(product._id)}
            className="bg-white hover:bg-red-50 rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
          >
            {inWishList ? (
              <IoMdHeart className="text-xl text-red-500" />
            ) : (
              <IoMdHeartEmpty className="text-xl text-gray-700" />
            )}
          </button>
          <button className="bg-white hover:bg-blue-50 rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95">
            <IoEyeOutline className="text-xl text-gray-700" />
          </button>
        </div>

        {/* Discount Badge */}
        {discount !== null && (
          <span className="bg-red-500 absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
            -{discount}%
          </span>
        )}


        {/* Add to Cart Button - Enhanced */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          {count === 0 ? (
            <button
              className="flex items-center justify-center gap-2 w-full bg-black hover:bg-gray-900 active:bg-gray-800 h-12 text-white font-semibold transition-all duration-200 transform active:scale-[0.98]"
              onClick={() => setCount(1)}
            >
              <MdOutlineShoppingCart />
              Add To Cart
            </button>
          ) : (
            <div className="flex items-center justify-center w-full bg-black h-12">
              <div className="flex items-center justify-between bg-white rounded-lg mx-4 px-1 py-1 shadow-inner">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="flex items-center justify-center w-9 h-9 cursor-pointer text-xl font-bold text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-md transition-all duration-150"
                >
                  −
                </button>
                <span className="font-bold text-lg px-4 text-gray-800 min-w-[40px] text-center">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="flex items-center justify-center w-9 h-9 cursor-pointer text-xl font-bold text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-md transition-all duration-150"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-5 space-y-2.5">
        <h3 className="text-gray-900 font-bold text-lg truncate hover:text-gray-700 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3 pt-1">
          <p className="text-3xl font-bold text-gray-900">
            ${product.offerPrice}
          </p>
          {
            product.price && <p className="text-gray-400 text-lg line-through">
              ${product.price}
            </p>
          }
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-base ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm font-medium">({product.rating})</span>
        </div>




      </div>
    </div>
  );
};

export default ProductCard;