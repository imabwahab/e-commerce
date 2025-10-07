import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import apple_logo from '../assets/Apple_gray_logo.png'
import hero_frame from '../assets/hero_endframe_large.png'
const HeroSection = () => {
  return (
    <div className='mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8'>
        
        {/* Categories Sidebar */}
        <ul className='w-full lg:w-64 space-y-3 py-4'>
          <li className='flex items-center justify-between text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>
            <span>Woman's Fashion</span>
            <FaArrowRight size={18} className='hidden sm:block' />
          </li>
          <li className='flex items-center justify-between text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>
            <span>Men's Fashion</span>
            <FaArrowRight size={18} className='hidden sm:block' />
          </li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Electronics</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Home & Lifestyle</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Medicine</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Sports & Outdoor</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Baby's & Toys</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Groceries & Pets</li>
          <li className='text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors'>Health & Beauty</li>
        </ul>
      
        {/* Hero Banner */}
        <div className='flex-1 bg-black text-white overflow-hidden'>
          <div className='flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16'>
            
            {/* Left Content */}
            <div className='w-full md:w-1/2 space-y-4 md:space-y-6'>
              <div className='flex items-center gap-2 sm:gap-4'>
                <img 
                  src={apple_logo}
                  alt="Apple logo" 
                  className='w-8 h-8 sm:w-10 sm:h-10'
                />
                <span className='text-xs sm:text-sm md:text-base'>iPhone 15 Series</span>
              </div>
              
              <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
                Up to 10%
                <br />
                off Voucher
              </h2>
              
              <button className='flex items-center gap-2 group'>
                <span className='underline text-sm sm:text-base hover:no-underline transition-all'>
                  Shop Now
                </span>
                <FaArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
            
            {/* Right Image */}
            <div className='w-full md:w-1/2 mt-6 md:mt-0 flex items-center justify-center'>
              <img 
                src={hero_frame}
                alt="iPhone 15" 
                className='w-full max-w-md h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;