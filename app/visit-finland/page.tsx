'use client'

import { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import euroMap from '@/public/EuroMap.png';
import location from'@/public/location.svg';

export default function VisitFinland() {
  const [place, setPlace] = useState<string>('');

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="grid grid-cols-2 gap-x-2 gap-y-10 h-full">
        <div className="bg-[url('../public/Map.png')] bg-contain bg-no-repeat h-480 px-5 relative">
          {/* <Image className="top-5 left-5 absolute" src={location} width={50} height={50} alt="location 1" onClick={() => {setPlace('1');}} />
          <Image className="top-20 left-20 absolute" src={location} width={50} height={50} alt="location 2" onClick={() => {setPlace('2');}} />
          <Image className="top-32 left-32 absolute" src={location} width={50} height={50} alt="location 3" onClick={() => {setPlace('3');}} /> */}
        </div>
        <div className="flex flex-col self-center">
          <div className="flex w-full justify-evenly">
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Sites</p>
              <p className="text-2xl font-bold self-center py-6">XXX</p>
            </div>
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Vacancies</p>
              <p className="text-2xl font-bold self-center py-6">XXX</p>
            </div>
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Applicants</p>
              <p className="text-2xl font-bold self-center py-6">XXX</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p>Site Name</p>
              <p>Location</p>
              <p>Vacancies</p>
              <p>Filled</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p>Site Name</p>
              <p>Location</p>
              <p>Vacancies</p>
              <p>Filled</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p>Site Name</p>
              <p>Location</p>
              <p>Vacancies</p>
              <p>Filled</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p>Site Name</p>
              <p>Location</p>
              <p>Vacancies</p>
              <p>Filled</p>
            </div>
          </div>
        </div>
        <p className="text-xl self-center">Moving forward, the platform also holds the potential to help Visit Finland expand the eco travel initiative <b>beyond Finland</b>. By expanding to other European countries, Swallow can help Visit Finland by attracking broader European travellers into Finland, provide more income to local communities and attract more service providers to embark on the journey to transit towords sustainable operation.</p>
        <Image className="justify-self-center" src={euroMap} height={480} alt="euro map" />
        <div className="h-1" />
        <div className="h-1" />
      </main>
    </div>
  )
}