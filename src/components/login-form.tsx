"use client"

import { useState } from "react"
import { Eye, EyeOff, Check } from "lucide-react"
import Image from "next/image"
import iconMail from "../../public/assets/images/icon-main.svg"
import iconPassword from "../../public/assets/images/icon-pass.svg"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="w-full p-10 space-y-6 bg-[#000000] rounded-xl shadow-2xl">
    <div className="space-y-4">
      <div className="space-y-3">
        <label htmlFor="email" className="block text-white text-base font-medium">
          Email Address
        </label>
        <div className="relative">
          <Image 
            src={iconMail} 
            alt="email icon" 
            width={20} 
            height={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            id="email"
            type="email"
            className="w-full pl-10 px-3 py-5 !bg-[#0d0d0d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="password" className="block text-white text-base font-medium">
          Password
        </label>
        <div className="relative">
          <Image 
            src={iconPassword} 
            alt="password icon" 
            width={20} 
            height={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full pl-10 px-3 py-5 !bg-[#0d0d0d] border border-gray-700 rounded-md text-white pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleCheck}>
          <div 
            className={`w-4 h-4 rounded-full border border-gray-600 transition-colors duration-200 ${isChecked ? 'bg-blue-600' : 'bg-black'}`}
          >
            {isChecked && <Check className="w-4 h-4 text-white" />}
          </div>
          <label htmlFor="remember" className="text-sm text-gray-300">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-gray-200 hover:text-white">
          Forgot your password
        </a>
      </div>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="w-full max-w-md bg-[#131212] text-white text-sm rounded-[60px] py-5 px-4 font-medium transition-colors border border-[rgba(255,255,255,0.40)] shadow-[-10px_-10px_20px_0px_#3C3C3C_inset,10px_10px_20px_0px_#1E1E1E,-4px_-4px_8px_0px_rgba(77,77,77,0.25)_inset,4px_4px_8px_0px_#1E1E1E_inset]"
      >
        Submit
      </button>
    </div>

    <div className="text-center text-sm text-gray-400 pb-3">
      Need an account?{" "}
      <a href="#" className="text-gray-300 hover:text-white">
        Create an account
      </a>
    </div>
  </div>
  )
}

