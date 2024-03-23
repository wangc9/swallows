'use client'

import { useState } from "react";
import Header from "../components/header";
import Selection from "./selection";
import Image from "next/image";
import location from '@/public/location.svg';

export default function Tourists() {
  const [place, setPlace] = useState<string>('');

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="flex flex-col custom:grid custom:grid-cols-2 custom:gap-x-2 custom:h-full">
        <div className="bg-[url('../public/Map.png')] bg-contain bg-no-repeat h-480 px-5 relative">
          <Image className="top-90 left-56 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 1" onClick={() => {setPlace('1');}} />
          <Image className="top-84 left-63 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 2" onClick={() => {setPlace('2');}} />
          <Image className="top-70 left-73 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 3" onClick={() => {setPlace('3');}} />
          <Image className="top-92 left-42 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 1" onClick={() => {setPlace('4');}} />
          <Image className="top-66 left-81 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 2" onClick={() => {setPlace('5');}} />
          <Image className="top-36 left-51 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 3" onClick={() => {setPlace('6');}} />
          <Image className="top-60 left-45 absolute opacity-50 hover:opacity-100 transition-all duration-200" src={location} width={50} height={50} alt="location 1" onClick={() => {setPlace('7');}} />
        </div>
        <Selection state={place} />
      </main>
    </div>
  )
}