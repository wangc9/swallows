'use client'

import Image from "next/image";
import { useState } from "react";
import placeholder from '@/public/placeholder.jpg';

export interface SelectionProps {
  state: string;
}

export default function Selection(props: SelectionProps) {
  const { state } = props;
  const [step, setStep] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  const [addOn, setAddOn] = useState<number[]>([]);

  return (
    <div className="w-480 h-640 flex flex-col justify-between">
      <p className={`${step !== 0 && 'hidden'}`}>Description</p>
      <div className={`${step !== 1 && 'hidden'} flex justify-between`}>
        <button className="flex flex-col items-center" onClick={() => {setType(1)}}>
          <Image src={placeholder} width={100} height={100} alt="budget traveller" />
          <p>Budget</p>
        </button>
        <button className="flex flex-col items-center" onClick={() => {setType(2)}}>
          <Image src={placeholder} width={100} height={100} alt="leisure traveller" />
          <p>Leisure</p>
        </button>
      </div>
      <div className={`${step !== 2 && 'hidden'} flex flex-col`}>
        <p>Headline</p>
        <div className="items-center flex py-6">
          <input type="checkbox" className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-sky-500 rounded-sm mt-1 bg-inherit focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-sky-300 checked:bg-sky-500 checked:border-0" onClick={
            () => {
              const index = addOn.findIndex((element) => element === 1);
              if (index === -1) {
                setAddOn(addOn.concat(1));
              } else {
                setAddOn(addOn.filter((element) => element !== 1));
              }
            }
          } />
          <p className="pl-4">Option 1</p>
        </div>
        <div className="items-center flex py-6">
          <input type="checkbox" className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-sky-500 rounded-sm mt-1 bg-inherit focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-sky-300 checked:bg-sky-500 checked:border-0" onClick={
            () => {
              const index = addOn.findIndex((element) => element === 2);
              if (index === -1) {
                setAddOn(addOn.concat(2));
              } else {
                setAddOn(addOn.filter((element) => element !== 2));
              }
            }
          } />
          <p className="pl-4">Option 2</p>
        </div>
        <div className="items-center flex py-6">
          <input type="checkbox" className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-sky-500 rounded-sm mt-1 bg-inherit focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-sky-300 checked:bg-sky-500 checked:border-0" onClick={
            () => {
              const index = addOn.findIndex((element) => element === 3);
              if (index === -1) {
                setAddOn(addOn.concat(3));
              } else {
                setAddOn(addOn.filter((element) => element !== 3));
              }
            }
          } />
          <p className="pl-4">Option 3</p>
        </div>
      </div>
      <nav className="flex justify-between px-6">
        <button className={`${step === 0 && 'text-transparent'}`} disabled={step === 0} onClick={() => {setStep(step - 1)}}>previous</button>
        <button className={`${step === 2 && 'text-transparent'}`} disabled={step === 2} onClick={() => {setStep(step + 1)}}>next</button>
      </nav>
    </div>
  )
}