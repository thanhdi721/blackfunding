
import Image from "next/image"
import iconInfo from "../../public/assets/images/icon-info.svg"
import imageCard from "../../public/assets/images/bg-card-trading.svg"
import imageBtn from "../../public/assets/images/btn-card-trading.svg"
interface ServiceCardProps {
  title: string
  amount: string
  buttonText: string
}

export default function ServiceCard({ title, amount, buttonText }: ServiceCardProps) {
  return (
    <div className="relative rounded-lg px-4 md:px-5 pt-4 md:pt-6 pb-8 md:pb-10" style={{ backgroundImage: `url(${imageCard.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="flex justify-between items-start mb-4 md:mb-6 z-[2] text-white">
        <div className="flex items-center gap-2">
          <Image src={iconInfo} alt={title} width={20} height={20} />
          <span className="text-base md:text-lg font-bold text-white">{title}</span>
        </div>
        <span className="text-base md:text-lg font-bold text-white">{amount}</span>
      </div>
      <div className="relative overflow-hidden">
      <button className="w-full h-full flex items-center justify-center text-center md:py-6 py-4 text-base md:text-lg font-bold hover:opacity-80 transition-opacity text-white" style={{ backgroundImage: `url(${ imageBtn.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       {buttonText}
      </button>

      </div>
      
    </div>
  )
}
