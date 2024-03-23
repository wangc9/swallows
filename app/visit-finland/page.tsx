'use client'

import { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import euroMap from '@/public/EuroMap.png';
import map from'@/public/Map.png';

export default function VisitFinland() {
  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="grid grid-cols-2 gap-x-2 gap-y-10 h-full">
      <Image className="justify-self-center" src={map} height={480} alt="euro map" />
        <div className="flex flex-col self-center">
          <p className="pb-2 text-xl">With Swallow, Visit Finland could benefit as a coordinator, monitoring the travel industry from different hubs and recruiting tourists who are interested and motived to join Visit Finland and continue the eco transition.</p>
          <div className="flex w-full justify-evenly">
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Sites</p>
              <p className="text-2xl font-bold self-center py-6">7</p>
            </div>
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Vacancies</p>
              <p className="text-2xl font-bold self-center py-6">50</p>
            </div>
            <div className="rounded border-sky-400 border-2 flex flex-col w-24 grow">
              <p>Applicants</p>
              <p className="text-2xl font-bold self-center py-6">32</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p className="pl-2">Kallavesi Farm</p>
              <p>Kuopio</p>
              <p>Vacancies: 3</p>
              <p>Filled: 10</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p className="pl-2">Lehmäleiri Farm</p>
              <p>Lehmäleiri</p>
              <p>Vacancies: 5</p>
              <p>Filled: 8</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p className="pl-2">Mentsalan Farm</p>
              <p>Lahti</p>
              <p>Vacancies: 3</p>
              <p>Filled: 8</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="grid grid-cols-4 border-2 border-sky-500 rounded py-2 my-2">
              <p className="pl-2">Ecopak Greenhouse</p>
              <p>Kokkola</p>
              <p>Vacancies: 1</p>
              <p>Filled: 7</p>
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