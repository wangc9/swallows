'use client'

import Image from "next/image"
import logo from '@/public/SwallowsLogoTransparent.png';
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="pt-4 pb-8 flex justify-between">
      <Image className="opacity-90 hover:opacity-100 transition-all duration-200" src={logo} width={100} height={100} alt="Group logo" onClick={() => {router.push('/')}} />
      <button className="bg-[url('../public/visitFinland.jpg')] bg-cover opacity-90 hover:opacity-100 transition-all duration-500 rounded-3xl w-28 px-4 py-6" onClick={() => {router.push('/visit-finland');}} />
    </header>
  )
}