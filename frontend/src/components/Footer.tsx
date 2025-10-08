import { useContext } from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const { navigate } = useContext(AppContext)
  return (
    <footer className='bg-black text-white mt-10'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Exclusive Section */}
          <div>
            <h4 className='text-xl font-bold mb-4'>Exclusive</h4>
            <p className='text-lg mb-2'>Subscribe</p>
            <p className='text-gray-400 text-sm'>Get 10% off your first order</p>
            <div className='mt-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white transition-colors'
              />
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h4 className='text-xl font-bold mb-4'>Support</h4>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li>Commercial Area, Bahawalpur</li>
              <li>exclusive@gmail.com</li>
              <li>+845-343456-12356</li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h4 className='text-xl font-bold mb-4'>Account</h4>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition-colors'>My Account</li>
              <li onClick={() => navigate('/signup')} className='hover:text-white cursor-pointer transition-colors'>Login / Register</li>
              <li onClick={() => navigate('/cart')} className='hover:text-white cursor-pointer transition-colors'>Cart</li>
              <li onClick={() => navigate('/wishlist')} className='hover:text-white cursor-pointer transition-colors'>WishList</li>
              <li onClick={() => navigate('/products')} className='hover:text-white cursor-pointer transition-colors'>Shop</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Terms of Use</li>
              <li className='hover:text-white cursor-pointer transition-colors'>FAQ</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-6 py-4'>
          <p className='text-center text-gray-500 text-sm flex items-center justify-center gap-1'>
            <FaRegCopyright className='inline' />
            Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer