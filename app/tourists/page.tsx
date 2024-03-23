'use client'

import { useState } from "react";
import Header from "../components/header";
import Selection from "./selection";

export default function Tourists() {
  const [place, setPlace] = useState<string>('');

  return (
    <div className="flex flex-col h-dvh content-center">
      <Header />
      <main className="flex h-full">
        <div className="bg-[url('../public/placeholder.jpg')] bg-cover w-5/12 h-full px-5 relative">
          <button className="top-5 left-5 rounded bg-sky-500 absolute" onClick={() => {setPlace('1');}}>place 1</button>
        </div>
        <Selection state={place} />
      </main>
    </div>
  )
}