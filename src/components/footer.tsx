import { CircleDot, Share2, Bell, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] fixed bottom-0 left-0 right-0 border-t py-3 mx-3 rounded-2xl border border-[#333]">
      <div className="mx-auto px-2 md:px-4">
        <div className="flex flex-col items-center justify-center relative gap-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] px-3 py-1 rounded-md flex items-center space-x-2 border border-[#333]">
              <span className="text-xs font-bold bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] border border-[#333] rounded-md px-2 py-1">
                BF
              </span>
              <span className="text-xs text-gray-300">Supplier</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] p-1 md:p-2 rounded-xl border border-[#333]">
            <div className="flex space-x-1 md:space-x-2">
              <button className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] px-2 md:px-3 py-1 rounded-md text-xs md:font-bold whitespace-nowrap border border-gray-600 ">
                Regular (KYB)
              </button>
              <button className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] px-2 md:px-3 py-1 rounded-md text-xs whitespace-nowrap border border-gray-600 md:font-bold">
                Cryptographic Record
              </button>
              <button className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] px-2 md:px-3 py-1 rounded-md text-xs whitespace-nowrap border border-gray-600 md:font-bold">
                Information Block
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[linear-gradient(141deg,#38404B_2.8%,#000_88.62%)] p-2 rounded-full flex items-center space-x-2">
              <CircleDot className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-[linear-gradient(141deg,#38404B_2.8%,#000_88.62%)] p-2 rounded-full flex items-center space-x-2">
              <Share2 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-[linear-gradient(141deg,#38404B_2.8%,#000_88.62%)] p-2 rounded-full flex items-center space-x-2">
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-[linear-gradient(141deg,#38404B_2.8%,#000_88.62%)] p-2 rounded-full flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
