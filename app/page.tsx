'use client'

import Header from "./components/header";
import { useRouter } from "next/navigation";
import provider from '@/public/provider.svg';
import tourist from '@/public/tourist.svg';
import Image from "next/image";

export default function Home(){ 
  const router = useRouter();

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="flex h-full">
        <p className='w-1/2 px-3 self-center'>Description</p>
        <nav className="flex justify-evenly w-1/2 self-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 hover:opacity-100 transition-all duration-500 rounded-3xl w-fit px-4 py-6 flex flex-col items-center" onClick={() => {router.push('/tourists');}}>
            <Image src={tourist} width={200} height={200} alt="Tourists" />
            <p className="text-white text-2xl font-bold pt-2">Tourists</p>
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 hover:opacity-100 transition-all duration-500 rounded-3xl w-fit px-4 py-6 flex flex-col items-center" onClick={() => {router.push('/providers')}}>
            <Image src={provider} width={200} height={200} alt="Providers" />
            <p className="text-white text-2xl font-bold pt-2">Providers</p>
          </button>
        </nav>
      </main>
    </div>
    
  )
}