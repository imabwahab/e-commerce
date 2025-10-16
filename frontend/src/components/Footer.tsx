import { useEffect, useState } from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowUp } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import image from '../assets/app-download-link.png';
import toast from 'react-hot-toast';
import { IoSend } from 'react-icons/io5';

type FooterData<T> = {
  name: string;
  links: T[];
};

type Link = {
  linkName: string;
  linkFunc?: () => void;
};

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [backTop, setBackTop] = useState(false);

  // Footer Data 
  const footerData: FooterData<Link>[] = [
    {
      name: 'Support',
      links: [
        {
          linkName: 'Commercial Area, Bahawalpur', linkFunc: () => {
            navigator.clipboard.writeText('Commercial Area, Bahawalpur');
            toast.success('address copied')
          }
        },
        {
          linkName: 'exclusive@gmail.com', linkFunc: () => {
            navigator.clipboard.writeText('exclusive@gmail.com');
            toast.success('copied to clipboard')
          }
        },
        {
          linkName: '+845-343456-12356', linkFunc: () => {
            navigator.clipboard.writeText('+845-343456-12356');
            toast.success('copied to clipboard')
          }
        },
      ],
    },
    {
      name: 'Account',
      links: [
        { linkName: 'My Account', linkFunc: () => navigate('/account') },
        { linkName: 'Signup', linkFunc: () => navigate('/signup') },
        { linkName: 'Login', linkFunc: () => navigate('/login') },
        { linkName: 'Cart', linkFunc: () => navigate('/cart') },
        { linkName: 'WishList', linkFunc: () => navigate('/wishlist') },
      ],
    },
    {
      name: 'Quick Links',
      links: [
        { linkName: 'Privacy Policy' },
        { linkName: 'Terms of Use' },
        { linkName: 'FAQs', linkFunc: () => navigate('/faqs') },
        { linkName: 'Contact', linkFunc: () => navigate('/contact') },
      ],
    },
  ];

  useEffect(() => {
    if (backTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setBackTop(false);
    }
  }, [backTop]);

  return (
    <div>
      {pathname === '/' && (
        <div className='p-10 md:px-20 flex items-end justify-end'>
          <button onClick={() => setBackTop(true)}>
            <FaArrowUp className='h-6 w-6' />
          </button>
        </div>
      )}

      <footer className='bg-black text-white mt-10'>
        <div className='container mx-auto px-6 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>

            {/* Exclusive Section */}
            <div className=''>
              <h4 className='text-xl font-bold mb-4'>Exclusive</h4>
              <p className='text-lg mb-2'>Subscribe</p>
              <p className='text-gray-400 text-sm'>Get 10% off your first order</p>

              {/* Email input + Send button */}
              <form onSubmit={(e) => e.preventDefault()} className='mt-4 flex'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 w-full px-4 py-2 bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:border-white transition-colors'
                  required
                />
                <button
                  type='submit'
                  className='px-4 py-2 bg-white text-black font-semibold rounded-r-md hover:bg-gray-200 transition-colors'
                >
                  <IoSend />
                </button>
              </form>
            </div>


            {/* Footer Sections Dynamically Rendered */}
            {footerData.map((section, i) => (
              <div key={i}>
                <h4 className='text-xl font-bold mb-4'>{section.name}</h4>
                <ul className='space-y-2 text-gray-400 text-sm'>
                  {section.links.map((item, index) => (
                    <li
                      key={index}
                      onClick={item.linkFunc}
                      className={`${item.linkFunc
                        ? 'hover:text-white cursor-pointer transition-colors'
                        : ''
                        }`}
                    >
                      {item.linkName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* App Download Section */}
            <div className='flex flex-col gap-2'>
              <h4 className='text-xl font-bold mb-4'>Download App</h4>
              <p className='text-gray-400'>Save $3 with new User Only</p>
              <img src={image} alt='download link' className='w-40' />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800'>
          <div className='container mx-auto px-6 py-4'>
            <p className='text-center text-gray-500 text-sm flex items-center justify-center gap-1'>
              <FaRegCopyright className='inline' />
              Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
