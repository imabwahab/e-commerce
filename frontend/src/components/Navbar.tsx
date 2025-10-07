import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full font-sans fixed top-0 left-0 right-0">
      {/*  Top Bar */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between sm:justify-around items-center gap-2 sm:gap-4 flex-wrap">
          <p className="text-center text-xs flex flex-row">
            Summer Sale
            <span className="hidden md:block">
              {" "}
              for All Swim Suits and Free Express Delivery{" "}
            </span>
            <span> — </span>
            <span className="underline cursor-pointer hover:text-red-400 transition-colors duration-200">
              Shop Now
            </span>
          </p>
          <button className="text-gray-300 hover:text-white text-xs border border-gray-600 px-3 py-1 rounded transition-colors duration-300 hover:border-white">
            English
          </button>
        </div>
      </div>

      {/*  Main Navbar  */}
      <div className="shadow-sm sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">

            <div className="text-xl sm:text-2xl font-bold text-red-600 cursor-pointer hover:scale-105 transition-transform duration-200">
              Exclusive
            </div>


            <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
              {["Home", "About", "Contact", "SignUp"].map((item, index) => (
                <Link
                  to={(item !== "Home" ? `/${item.toLowerCase()}` : '/')}
                  key={index}>
                  <li
                    className="relative cursor-pointer group transition-all duration-200"
                  >
                    <span className="hover:text-red-600">{item}</span>

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              ))}
            </ul>


            <div className="flex items-center gap-3 sm:gap-4">

              <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-2 bg-gray-50 focus-within:border-red-600 transition-all duration-300">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent outline-none text-sm w-32 lg:w-48 text-gray-700 placeholder-gray-400"
                />
                <IoIosSearch className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600 transition-colors ml-2" />
              </div>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
              >
                <IoIosSearch className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <button className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 hover:scale-110">
                <CiHeart className="w-6 h-6" />
              </button>

              {/* Cart Icon */}
              <button className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 hover:scale-110">
                <MdAddShoppingCart className="w-6 h-6" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-700 hover:text-red-600 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <IoMdClose className="w-6 h-6" />
                ) : (
                  <GiHamburgerMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-gray-50 focus-within:border-red-600 transition-all duration-300">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
                <IoIosSearch className="w-5 h-5 text-gray-600 ml-2" />
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="flex flex-col gap-2 text-gray-700 font-medium">
                {["Home", "About", "Contact", "Sign Up"].map((item, index) => (
                  <Link
                    key={index}
                    to={(item !== "Home" ? `/${item.toLowerCase()}` : '/')}
                  > <li
                    className="relative cursor-pointer  hover:text-red-600 transition-all duration-300 py-1 px-4 rounded-lg hover:bg-gray-50"
                  >
                      {item}
                    </li></Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
