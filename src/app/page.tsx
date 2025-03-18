import LoginForm from "@/components/login-form"
import Image from "next/image"
import imageBottom from "../../public/assets/images/bg-login.svg"
export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 bg-black/90 rounded-lg shadow-2xl">
        <LoginForm />
      </div>
      <Image 
        src={imageBottom} 
        alt="logo" 
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        priority
        quality={100}
        fill
      />
    </main>
  )
}
