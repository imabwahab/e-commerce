import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaRegEye, FaRegEyeSlash, FaRegUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '../schema/signupSchema';

const SignupForm = () => {

  const { navigate } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);


  // Intialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = (data: SignupFormData) => {
    console.log("✅ Valid form data:", data);
  }
  return (
    <>
      <div className='bg-white rounded-md shadow-md mt-8 p-8 md:p-12 w-full max-w-md mx-auto hover:shadow-3xl transition-shadow duration-300'>
        <div className='mb-8'>
          <h2 className='text-4xl font-bold text-gray-800 mb-2 tracking-tight'>Create Account</h2>
          <p className='text-gray-500 text-sm'>Join us today and get started</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div >
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200'>
                <FaRegUserCircle className='h-5 w-5 text-gray-400 ' />
              </div>
              <input
                type='text'
                {...register("name")}
                className='block w-full pl-10 pr-3 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400'
                placeholder='John Doe'
              />

            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div >
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200'>
                <CiMail className='h-5 w-5 text-gray-400 ' />
              </div>
              <input
                type='email'
                {...register("email")}
                className='block w-full pl-10 pr-3 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400'
                placeholder='john@example.com'
              />

            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div >
            <div className='relative'>
              <div className='absolute inset-y-0  left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200'>
                <CiLock className='h-5 w-5 text-gray-400 ' />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register("password")}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0'
          >
            Create Account
          </button>
        </form>

        {/* <div className='mt-8 relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t  border-gray-300'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-4 bg-white text-gray-500 font-medium'>Or continue with</span>
          </div>
        </div> */}

        <div className='mt-6'>
          <button className='w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:shadow-md group'>
            <svg className='w-5 h-5' viewBox='0 0 24 24'>
              <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
              <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
              <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
              <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
            </svg>
            <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors'>Sign up with Google</span>
          </button>
        </div>

        <p className='mt-8 text-center text-sm text-gray-600'>
          Already have an account? <span
            onClick={() => navigate('/login')}
            className='font-semibold hover:underline transition-all duration-300 text-red-600 hover:text-red-700 cursor-pointer'>Sign in</span>
        </p>
      </div>
    </>
  )
}

export default SignupForm