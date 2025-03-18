"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import iconMail from "../../public/assets/images/icon-main.svg"
import iconPassword from "../../public/assets/images/icon-pass.svg"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-[#000000] rounded-lg shadow-2xl">
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-white text-sm font-medium">
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
            className="w-full pl-10 px-3 py-2 !bg-[#0d0d0d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-white text-sm font-medium">
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
            className="w-full pl-10 px-3 py-2 !bg-[#0d0d0d] border border-gray-700 rounded-md text-white pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
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

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 rounded border-gray-600 !bg-[#0d0d0d] text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
          />
          <label htmlFor="remember" className="text-sm text-gray-300">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-gray-200 hover:text-white">
          Forgot your password
        </a>
      </div>
    </div>

    <button
      type="submit"
      className="border-[0.2px] border-gray-500 w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-sm rounded-3xl py-2 px-4 font-medium transition-colors"
    >
      Submit
    </button>

    <div className="text-center text-sm text-gray-400">
      Need an account?{" "}
      <a href="#" className="text-gray-300 hover:text-white">
        Create an account
      </a>
    </div>
  </div>
  )
}

