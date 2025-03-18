"use client"
import { Globe, Bell, User, FileText } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [activeTab, setActiveTab] = useState("block-funding")

  return (
    <header className="rounded-2xl border border-[#353535] opacity-60 bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] backdrop-blur-[10px] md:container">
      <div className=" mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-2">
              <span className="text-xs font-bold">BF</span>
              <span className="text-xs text-gray-300">Developer</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bg-[linear-gradient(131deg,#000_0%,#3f3f3f_30.66%,#3f3f3f_62.3%,#000_98.34%)] border border-[#333] p-1 rounded-lg">
            <div className="flex space-x-2 relative">
              <div 
                className={`absolute transition-all duration-200 h-full rounded-md bg-[linear-gradient(131deg,#000_0%,#3f3f3f_30.66%,#3f3f3f_62.3%,#000_98.34%)]  ${
                  activeTab === "block-funding" ? "left-0 w-[100px]" : "left-[108px] w-[130px]"
                }`}
              />
              <button 
                onClick={() => setActiveTab("block-funding")}
                className={`px-3 py-1 rounded-md text-xs relative z-10 transition-colors duration-200 ${
                  activeTab === "block-funding" ? "text-white" : "text-gray-400"
                }`}
              >
                Block Funding
              </button>
              <button 
                onClick={() => setActiveTab("b2b")}
                className={`px-3 py-1 rounded-md text-xs relative z-10 transition-colors duration-200 ${
                  activeTab === "b2b" ? "text-white" : "text-gray-400"
                }`}
              >
                Business to business
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-gray-400" />
            <FileText className="w-5 h-5 text-gray-400" />
            <Bell className="w-5 h-5 text-gray-400" />
            <User className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}
