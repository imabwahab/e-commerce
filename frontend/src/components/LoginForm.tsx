
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { CiMail, CiLock } from "react-icons/ci";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";
import { loginSchema, type LoginFormData } from '../schema/loginSchema'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {


  const { navigate } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("✅ Valid form data:", data);
  };


  return (
    <>
      <div className="bg-white rounded-md shadow-md mt-8 p-8 md:p-12 w-full max-w-md mx-auto hover:shadow-3xl transition-shadow duration-300">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">Log in to Exclusive</h2>
          <p className="text-gray-500 text-sm">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="block w-full pl-10 pr-3 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className="block w-full pl-10 pr-12 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition-all duration-300 placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform"
            >
              {showPassword ? (
                <FaRegEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <FaRegEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-row gap-1 justify-end">
            <button
              type="submit"
              className="w-full bg-red-500 max-w-40 hover:bg-red-600 text-white p-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full text-red-500 underline py-3 px-4 rounded-lg text-sm  md:font-semibold hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Forget Password?
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Create new account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="font-semibold hover:underline text-red-600 hover:text-red-700 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </>
  )
}

export default LoginForm