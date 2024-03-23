'use client'

// import Image from "next/image";
import Header from "./components/header";
import { Hanken_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
// import placeholder from '../public/placeholder.jpg';


export default function Home(){ 
  const router = useRouter();

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="flex h-full">
        <p className='w-1/2 px-3 self-center'>Description</p>
        <nav className="flex justify-evenly w-1/2 self-center">
          <button className="bg-sky-500 text-white rounded-3xl w-fit px-8 py-2" onClick={() => {router.push('/tourists');}}>Tourists</button>
          <button className="bg-sky-500 text-white rounded-3xl w-fit px-8 py-2" onClick={() => {router.push('/visit-finland');}}>Visit Finland</button>
          <button className="bg-sky-500 text-white rounded-3xl w-fit px-8 py-2" onClick={() => {router.push('/providers')}}>Providers</button>
        </nav>
      </main>
    </div>
    
  )
}