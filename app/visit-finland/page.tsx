'use client'

import { useState } from "react";
import Header from "../components/header";
// import Selection from "./selection";

export default function VisitFinland() {
  const [place, setPlace] = useState<string>('');

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="flex h-full">
        <div className="bg-[url('../public/placeholder.jpg')] bg-cover w-5/12 h-full px-5 relative">
          <button className="top-5 left-5 rounded bg-sky-500 absolute" onClick={() => {setPlace('1');}}>place 1</button>
        </div>
        <div className="flex flex-col w-5/12">
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
        {/* <Selection state={place} /> */}
      </main>
    </div>
  )
}