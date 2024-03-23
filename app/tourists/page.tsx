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
      <main className="grid grid-cols-2 gap-x-2 h-full">
        <div className="bg-[url('../public/Map.png')] bg-contain bg-no-repeat h-600 px-5 relative">
          <Image className="top-70 left-70 absolute" src={location} width={50} height={50} alt="location 1" onClick={() => {setPlace('1');}} />
          {/* <Image className="top-20 left-20 absolute" src={location} width={50} height={50} alt="location 2" onClick={() => {setPlace('2');}} />
          <Image className="top-32 left-32 absolute" src={location} width={50} height={50} alt="location 3" onClick={() => {setPlace('3');}} /> */}
        </div>
        <Selection state={place} />
      </main>
    </div>
  )
}