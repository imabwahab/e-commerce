import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const { products, cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(AppContext);
  const cart = Object.entries(cartItems);

  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
  const totalPrice = cart.reduce((total, [itemId, quantity]) => {
    const product = products.find((p) => p._id === itemId);
    return total + (product?.offerPrice || 0) * quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className='w-full max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center py-20'>
          <MdOutlineShoppingCart className='w-24 h-24 text-gray-300 mb-4' />
          <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Your cart is empty</h2>
          <p className='text-gray-500'>Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='w-full max-w-7xl mx-auto mt-32 mb-20 px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='w-1 h-8 bg-red-500 rounded-full'></span>
            <p className='text-red-500 font-semibold text-sm uppercase tracking-wide'>Shopping Cart</p>
          </div>
        </div>

        {/* Title and Item Count */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Your Cart
          </h2>
          <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'>
            <MdOutlineShoppingCart className='w-5 h-5 text-gray-600' />
            <span className='text-sm font-semibold text-gray-700'>{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
          </div>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg py-4 px-6 items-center text-gray-700 text-sm font-semibold mb-4">
          <p className="col-span-5">Product</p>
          <p className="col-span-2 text-center">Price</p>
          <p className="col-span-2 text-center">Quantity</p>
          <p className="col-span-2 text-center">Subtotal</p>
          <p className="col-span-1 text-center">Action</p>
        </div>

        {/* Cart Items */}
        <div className='flex flex-col gap-4 mb-8'>
          {cart.map(([itemId, quantity]) => {
            const product = products.find((p) => p._id === itemId);

            if (!product) return null;

            return (
              <div key={itemId} className="bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 py-6 px-6 items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <div className='bg-gray-50 rounded-lg p-3 border border-gray-200'>
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className='w-20 h-20 object-contain'
                      />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 text-base mb-1'>{product.name}</h3>
                      <p className='text-sm text-gray-500'>{product.category}</p>
                    </div>
                  </div>

                  <p className="col-span-2 text-center font-semibold text-gray-900">
                    ${product.offerPrice.toFixed(2)}
                  </p>

                  <div className="col-span-2 flex justify-center">
                    <div className='flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2'>
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className='text-gray-600 hover:text-red-500 transition-colors'>
                        <FiMinus className='w-4 h-4' />
                      </button>
                      <span className='font-semibold text-gray-900 min-w-[20px] text-center'>{quantity}</span>
                      <button
                        onClick={() => addToCart(product._id)}
                        className='text-gray-600 hover:text-red-500 transition-colors'>
                        <FaPlus className='w-4 h-4' />
                      </button>
                    </div>
                  </div>

                  <p className="col-span-2 text-center font-bold text-red-500 text-lg">
                    ${(product.offerPrice * quantity).toFixed(2)}
                  </p>

                  <div className="col-span-1 flex justify-center">
                    <button
                      onClick={() => deleteFromCart(product._id)}
                      className='text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all'>
                      <FaTrash className='w-5 h-5' />
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <div className='flex gap-4 mb-4'>
                    <div className='bg-gray-50 rounded-lg p-2 border border-gray-200 flex-shrink-0'>
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className='w-20 h-20 object-contain'
                      />
                    </div>
                    <div className='flex-grow'>
                      <h3 className='font-semibold text-gray-900 mb-1'>{product.name}</h3>
                      <p className='text-sm text-gray-500 mb-2'>{product.category}</p>
                      <p className='font-semibold text-gray-900'>${product.offerPrice.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='flex justify-between items-center pt-4 border-t border-gray-200'>
                    <div className='flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2'>
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className='text-gray-600 hover:text-red-500 transition-colors'>
                        <FiMinus className='w-4 h-4' />
                      </button>
                      <span className='font-semibold text-gray-900 min-w-[20px] text-center'>{quantity}</span>
                      <button
                        onClick={() => addToCart(product._id)}
                        className='text-gray-600  hover:text-red-500 transition-colors'>
                        <FaPlus className='w-4 h-4' />
                      </button>
                    </div>

                    <p className='font-bold text-red-500 text-lg'>
                      ${(product.offerPrice * quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => deleteFromCart(product._id)}
                      className='text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all'>
                      <FaTrash className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Summary */}
        <div className='flex flex-col lg:flex-row gap-6 justify-end'>
          <div className='lg:w-96 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-md'>
            <h3 className='text-xl font-bold text-gray-900 mb-6'>Order Summary</h3>

            <div className='space-y-3 mb-6'>
              <div className='flex justify-between text-gray-600'>
                <span>Subtotal ({totalItems} items)</span>
                <span className='font-semibold'>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Shipping</span>
                <span className='font-semibold text-green-600'>Free</span>
              </div>
              <div className='border-t border-gray-300 pt-3 flex justify-between items-center'>
                <span className='text-lg font-bold text-gray-900'>Total</span>
                <span className='text-2xl font-bold text-red-500'>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl'>
              Proceed to Checkout
            </button>

            <button className='w-full mt-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg border border-gray-300 transition-colors'>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Cart;