import { CircleIcon as CircleInfo } from "lucide-react"
import Image from "next/image"
import iconInfo from "../../public/assets/images/icon-info.svg"
interface ServiceCardProps {
  title: string
  amount: string
  buttonText: string
  icon: string
}

export default function ServiceCard({ title, amount, buttonText, icon }: ServiceCardProps) {
  return (
    <div className="bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] backdrop-blur-[10px] rounded-lg px-4 pt-4 pb-8 border border-gray-600">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Image src={iconInfo} alt={title} width={20} height={20} />
          <span className="text-sm font-bold">{title}</span>
        </div>
        <span className="text-sm font-bold">{amount}</span>
      </div>
      <button className="w-full text-center py-2 text-sm font-bold rounded-[10px] border border-[#333] bg-[linear-gradient(131deg,#000_0%,#272525_30.66%,#272525_62.3%,#000_98.34%)] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.40)] hover:opacity-80 transition-opacity text-white">
        {buttonText}
      </button>
    </div>
  )
}
