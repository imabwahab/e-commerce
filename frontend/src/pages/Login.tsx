import { useContext, useState } from 'react';

import { FaRegEye, FaRegEyeSlash, FaRegUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import login_hero from '../assets/login_hero.png'
import { AppContext } from '../context/AppContext';

const Login = () => {
  const { navigate } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='min-h-screen pt-30  px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center'>
        <div className='flex items-center justify-center'>
          <div className='w-full max-w-2xl animate-fade-in'>
            <img
              src={login_hero}
              alt="login hero"
              className='w-full h-auto object-cover drop-shadow-2xl'
            />
          </div>
        </div>

        <div className='bg-white rounded-md shadow-md mt-8 p-8 md:p-12 w-full max-w-md mx-auto hover:shadow-3xl transition-shadow duration-300'>
          <div className='mb-8'>
            <h2 className='text-4xl font-bold text-gray-800 mb-2 tracking-tight'>Log in to Exclusive</h2>
            <p className='text-gray-500 text-sm'>Enter your details below</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>


            <div >
              <label htmlFor='email' className='hidden text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200'>
                  <CiMail className='h-5 w-5 text-gray-400 ' />
                </div>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='block w-full pl-10 pr-3 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400'
                  placeholder='john@example.com'
                />
              </div>
            </div>

            <div >
              <label htmlFor='password' className='hidden text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200'>
                  <CiLock className='h-5 w-5 text-gray-400 ' />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='block w-full pl-10 pr-12 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400'
                  placeholder='••••••••'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center transition-transform duration-200 hover:scale-110'
                >
                  {showPassword ? (
                    <FaRegEyeSlash className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors' />
                  ) : (
                    <FaRegEye className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors' />
                  )}
                </button>
              </div>
            </div>

            <div className='flex flex-row gap-4'>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0'
              >
                Login
              </button>

              <button
                type='submit'
                className='w-full  text-red-500 underline py-3 px-4 rounded-lg font-semibold hover:text-red-600  transition-all duration-300  transform hover:-translate-y-1 active:translate-y-0'
              >
                Forget Password?
              </button>
            </div>
          </form>





          <p className='mt-8 text-center text-sm text-gray-600'>
            Create new account? <span
              onClick={() => navigate('/signup')}
              className='font-semibold hover:underline transition-all duration-300 text-blue-600 hover:text-blue-700 cursor-pointer'>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login