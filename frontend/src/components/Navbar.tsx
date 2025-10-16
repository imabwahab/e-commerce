import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../assets/assets";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { setSearch } from "../redux/appSlice";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { wishList, cartItems, search } = useAppSelector((state) => state.app);
  const navigate = useNavigate();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // function to handle search bar
  const HandleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    navigate('/products');
    dispatch(setSearch(e.target.value));
    if (e.target.value === '') {
      navigate('/');
    }
  }

  const [profilePopup, setProfilePopup] = useState<boolean>();

  return (
    <div className="w-full font-sans fixed top-0 left-0 right-0 z-[500]">
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
            <span
              onClick={() => navigate('/products')}
              className="underline cursor-pointer hover:text-red-400 transition-colors duration-200">
              Shop Now
            </span>
          </p>
          <select className="text-gray-300 hover:text-white text-xs border border-gray-600 px-3 py-1 rounded transition-colors duration-300 hover:border-white cursor-pointer">
            <option className="text-black  hover:bg-gray-200/10" value="englist">English</option>
            <option className="text-black  hover:bg-gray-200/10" value="arabic">Arabic</option>
            <option className="text-black  hover:bg-gray-200/10" value="urdu">Urdu</option>
            <option className="text-black hover:bg-gray-200/10" value="french">French</option>
          </select>
        </div>
      </div>

      {/*  Main Navbar  */}
      <div className="shadow-sm sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu */}
          <div className="flex items-center justify-between py-4">

            <div
              onClick={() => navigate('/')}
              className="text-xl sm:text-2xl font-bold text-red-600 cursor-pointer hover:scale-105 transition-transform duration-200">
              Exclusive
            </div>


            <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
              {navLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative cursor-pointer transition-all duration-200 ${isActive ? 'text-red-600 font-semibold border-b-2 border-b-red-600' : 'text-gray-700'
                    }`
                  }
                >
                  <span className="hover:text-red-600">{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

              ))}
            </ul>


            <div className="flex items-center gap-3 sm:gap-4">

              <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-2 bg-gray-50 focus-within:border-red-600 transition-all duration-300">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => HandleSearchBar(e)}
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
              <button
                onClick={() => navigate('/wishlist')}
                className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer hover:scale-110">
                <CiHeart className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {Object.values(wishList).filter((val) => val === true).length}
                </span>
              </button>

              {/* Cart Icon */}
              <button
                onClick={() => navigate('/cart')}
                className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer hover:scale-110">
                <MdOutlineShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {Object.values(cartItems).reduce((acc, cur) => acc + cur, 0)}
                </span>
              </button>

              {/* Profile Avatar Icon */}
              <button
                onClick={() => setProfilePopup(!profilePopup)}
                className={`${(pathname === "/account") ? "bg-red-400 text-white" : 'bg-white'} text-black/70 rounded-full relative hover:text-white/70 transition-colors duration-300 cursor-pointer `}
              >
                <RxAvatar className="w-7 h-7" />
                <ul className={`${profilePopup ? "block" : 'hidden'} absolute top-10 right-0 bg-black/90 text-white shadow border border-gray-200 py-2.5 w-50 rounded-md text-sm z-40`}>
                  {['Manage My Account', 'My Order', 'My Cancellations', 'Logout'].map((item, index) => (
                    <li
                      key={index}
                      className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>
                      {item}
                    </li>
                  ))}
                </ul>
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
                  value={search}
                  onChange={(e) => HandleSearchBar(e)}
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
                {navLinks.map((item, index) => (
                  <NavLink
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    key={index}
                    to={item.path}
                    className={({ isActive }) => `relative cursor-pointer transition-all duration-200 ${isActive ? 'text-red-600 font-semibold border-b-2 w-max border-b-red-600' : 'text-gray-700'
                      }`}
                  >
                    <li

                    >
                      {item.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Navbar;
