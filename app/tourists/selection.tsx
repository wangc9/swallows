'use client'

import Image from "next/image";
import { useState } from "react";
import holiday from '@/public/holiday.svg';
import volunteer from '@/public/volunteer.svg';
import leftArrow from '@/public/left-arrow.svg';
import rightArrow from '@/public/right-arrow.svg';

export interface SelectionProps {
  state: string;
}

export default function Selection(props: SelectionProps) {
  const { state } = props;
  const [step, setStep] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  const [addOn, setAddOn] = useState<number[]>([]);

  return (
    <div>
      <div className="h-640 flex flex-col justify-between px-6">
        <p className={`${step !== 0 && 'hidden'}`}>{state === '1' && 'Location 1'}{state === '2' && 'Location 2'}{state === '3' && 'Location 3'}{state === '' && 'Click on the map to read more about the location'}</p>
        <div className={`${step !== 1 && 'hidden'} flex justify-evenly`}>
          <button className={`flex flex-col items-center p-2 rounded-xl ${type === 1 && 'border-sky-500 border-2'} hover:border-sky-500 hover:border-2 transition-all duration-100`} onClick={() => {setType(1)}}>
            <Image className="py-4" src={volunteer} width={100} height={100} alt="budget traveller" />
            <p>Budget</p>
          </button>
          <button className={`flex flex-col items-center p-2 rounded-xl ${type === 2 && 'border-sky-500 border-2'} hover:border-sky-500 hover:border-2 transition-all duration-100`} onClick={() => {setType(2)}}>
            <Image className="py-4" src={holiday} width={100} height={100} alt="leisure traveller" />
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
      </div>
      <nav className="flex justify-between px-6">
          <button className={`${step === 0 && 'text-transparent'} flex px-4 py-2 rounded items-center hover:border-sky-500 ${step !== 0 && 'hover:border-2'} transition-all duration-100`} disabled={step === 0} onClick={() => {setStep(step - 1)}}>
            <Image className={`${step === 0 && 'hidden'} pr-2`} src={leftArrow} width={25} height={25} alt="left" />
            <p>previous</p>
          </button>
          <button className={`${step === 2 && 'text-transparent'} flex px-4 py-2 rounded items-center hover:border-sky-500 ${step !== 2 && 'hover:border-2'} transition-all duration-100`} disabled={step === 2} onClick={() => {setStep(step + 1)}}>
            <p>next</p>
            <Image className={`${step === 2 && 'hidden'} pl-2`} src={rightArrow} width={25} height={25} alt="right" />
          </button>
        </nav>
    </div>
    
  )
}