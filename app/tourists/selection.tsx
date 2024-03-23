/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from "next/image";
import { useState } from "react";
import holiday from '@/public/traveller.png';
import volunteer from '@/public/community.png';
import leftArrow from '@/public/left-arrow.svg';
import rightArrow from '@/public/right-arrow.svg';
import LocationDetail, { LocationDetailProps } from "./locationDetail";
import logo from '@/public/SwallowsLogoTransparent.png';
import JourneySummary from "./summary";


export interface SelectionProps {
  state: string;
}

const data: Array<LocationDetailProps> = [{
  location: 'Takala Farm',
  city: 'Sammalisto',
  activities: 'Work with some lovely cows and horses in the farm. If you love children, you can also have some nice time playing with them there!'
}, {
  location: 'Mentsalan Farm',
  city: 'Lahti',
  activities: "If you are a gourmet, you're in for a treat. At Mentsalan, you can pick a wide range of products, blueberries, strawberries, potatoes, vegetables, you name it."
}, {
  location: 'Kallavesi Farm | Rantara Farm',
  city: 'Kuopio',
  activities: "Want to get your hand dirty and try shouting Timberrrr yourself? Or maybe you want to enjoy the nature while picking some berries? Kuopio is definitely your choice."
}, {
  location: 'Södergord Farm',
  city: 'Salo',
  activities: 'Have you ever wondered what does raw wool looks like? Come to Salo and find out yourself!'
}, {
  location: 'Lehmäleiri Farm',
  city: 'Lehmäleiri',
  activities: 'Psst, do you want to know how traditional cheese are made? At Lehmäleiri, you get to help feed some cute little lamb and make cheese the traditional way.'
}, {
  location: 'Tornio Farm',
  city: 'Tornio',
  activities: 'Come and help us feed the sheep! We need you!'
}, {
  location: 'Ecopak Greenhouse',
  city: 'Kokkola',
  activities: 'We have a wide selection of plants for plant-lover like you to take care of!'
}]

export default function Selection(props: SelectionProps) {
  const { state } = props;
  const [step, setStep] = useState<number>(0);
  const [type, setType] = useState<number>(0);

  return (
    <div>
      <div className="min-h-570 flex flex-col justify-between px-6">
        <div className={`${step !== 0 && 'hidden'}`}>
          {state === '1' && (
            <LocationDetail location={data[0].location} city={data[0].city} activities={data[0].activities} />
          )}
          {state === '2' && 
            <LocationDetail location={data[1].location} city={data[1].city} activities={data[1].activities} />
          }
          {state === '3' && 
            <LocationDetail location={data[2].location} city={data[2].city} activities={data[2].activities} />
          }
          {state === '4' && (
            <LocationDetail location={data[3].location} city={data[3].city} activities={data[3].activities} />
          )}
          {state === '5' && 
            <LocationDetail location={data[4].location} city={data[4].city} activities={data[4].activities} />
          }
          {state === '6' && 
            <LocationDetail location={data[5].location} city={data[5].city} activities={data[5].activities} />
          }
          {state === '7' && 
            <LocationDetail location={data[6].location} city={data[6].city} activities={data[6].activities} />
          }
          {state === '' && <p className="font-semibold text-4xl">Click on the map to explore what each location has to offer</p>}
        </div>
        <div className={`${step !== 1 && 'hidden'} flex flex-col`}>
          <div className="flex justify-evenly">
            <button className={`flex flex-col items-center p-2 rounded-xl ${type === 1 && 'border-sky-500 border-2'} hover:border-sky-500 hover:border-2 transition-all duration-100`} onClick={() => {setType(1)}}>
              <Image className="py-4" src={holiday} width={100} height={100} alt="normal tourist" />
              <p className="font-semibold text-2xl">Tourist</p>
            </button>
            <button className={`flex flex-col items-center p-2 rounded-xl ${type === 2 && 'border-sky-500 border-2'} hover:border-sky-500 hover:border-2 transition-all duration-100`} onClick={() => {setType(2)}}>
              <Image className="py-4" src={volunteer} width={100} height={100} alt="leisure traveller" />
              <p className="font-semibold text-2xl">Traveller</p>
            </button>
            <button className={`flex flex-col items-center p-2 rounded-xl ${type === 3 && 'border-sky-500 border-2'} hover:border-sky-500 hover:border-2 transition-all duration-100`} onClick={() => {setType(3)}}>
              <Image className="py-4" src={logo} width={100} height={100} alt="swallower" />
              <p className="font-semibold text-2xl">Swallower</p>
            </button>
          </div>
          <ul className={`mt-4 ml-4 py-4 px-4 ${type === 1 ? ' ' : 'hidden'} w-full h-full border-2 border-sky-500 rounded-xl`}>
            <li key={1} className="font-normal text-xl">Pay for a unique travel experience in a warm and unique farmland</li>
          </ul>
          <ul className={`mt-4 ml-4 py-4 px-4 ${type === 2 ? ' ' : 'hidden'} w-full h-full border-2 border-sky-500 rounded-xl`}>
            <li key={1} className="font-normal text-xl">Enjoy a unique combination of leisure travel and work experience in a Finnish farmland while only paying for a small fee</li>
          </ul>
          <ul className={`mt-4 ml-4 py-4 px-4 ${type === 3 ? ' ' : 'hidden'} w-full h-full border-2 border-sky-500 rounded-xl`}>
            <li key={1} className="font-normal text-xl">Come and have an immersive experience in a Finnish countryside. We will take care of your accommodation, all you need is passion to get your hand dirty. But don't forget to have fun!</li>
          </ul>
        </div>
        <div className={`${step !== 2 && 'hidden'} flex flex-col`}>
          <p className="self-center text-2xl font-bold py-6">Thank you for supporting the eco transition of the travel industry. Here is a summary of your journey</p>
          <JourneySummary location={data[Number(state)].location} city={data[Number(state)].city} activities= {data[Number(state)].activities} choice={type === 1 ? 'normal' : ''}/>
        </div>
      </div>
      <nav className="flex justify-between px-6">
        <button className={`${step === 0 && 'text-transparent'} flex px-4 py-2 rounded items-center hover:border-sky-500 ${step !== 0 && 'hover:border-2'} transition-all duration-100`} disabled={step === 0} onClick={() => {setStep(step - 1)}}>
          <Image className={`${step === 0 && 'hidden'} pr-2`} src={leftArrow} width={25} height={25} alt="left" />
          <p>previous</p>
        </button>
        <button className={`${(step === 2 || (step === 0 && state === '') || (step === 1 && type === 0)) && 'text-transparent'} flex px-4 py-2 rounded items-center hover:border-sky-500 ${(step === 2 || (step === 0 && state === '') || (step === 1 && type === 0)) ? '' : 'hover:border-2'} transition-all duration-100`} disabled={step === 3} onClick={() => {setStep(step + 1)}}>
          <p>next</p>
          <Image className={`${(step === 2 || (step === 0 && state === '') || (step === 1 && type === 0)) && 'hidden'} pl-2`} src={rightArrow} width={25} height={25} alt="right" />
        </button>
      </nav>
    </div>
    
  )
}