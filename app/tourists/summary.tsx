import Image from "next/image";
import locationPin from '@/public/location-normal.svg';
import spring from '@/public/spring.svg';
import summer from '@/public/summer.svg';
import autumn from '@/public/autumn.svg';
import snow from '@/public/snow.svg';
import destination from '@/public/destination.svg';
import { StaticImageData } from "next/image";

export interface JourneySummaryProps {
  location: string;
  city: string;
  springActivity?: string;
  summerActivity?: string;
  autumnActivity?: string;
  winter?: string;
  picture: StaticImageData;
}

export default function JourneySummary(props: JourneySummaryProps) {
  const {location, city, springActivity, summerActivity, autumnActivity, winter, picture} = props;

  return (
    <div className="flex flex-col">
      <div className="flex py-2 items-center">
        <Image src={destination} width={40} height={40} alt="destination" />
        <p className="font-bold text-2xl pl-6">{location}</p>
      </div>
      <div className="flex py-2 items-center">
        <Image src={locationPin} width={40} height={40} alt="destination" />
        <p className="font-bold text-2xl pl-6">{city}</p>
      </div>
      <div className={`flex py-2 items-center ${springActivity === undefined && 'hidden'}`}>
        <Image src={spring} width={40} height={40} alt="spring activities" />
        <p className="font-bold text-2xl pl-6">{springActivity}</p>
      </div>
      <div className={`flex py-2 items-center ${summerActivity === undefined && 'hidden'}`}>
        <Image src={summer} width={40} height={40} alt="summer activities" />
        <p className="font-bold text-2xl pl-6">{summerActivity}</p>
      </div>
      <div className={`flex py-2 items-center ${autumnActivity === undefined && 'hidden'}`}>
        <Image src={autumn} width={40} height={40} alt="autumn activities" />
        <p className="font-bold text-2xl pl-6">{autumnActivity}</p>
      </div>
      <div className={`flex py-2 items-center ${winter === undefined && 'hidden'}`}>
        <Image src={snow} width={40} height={40} alt="winter activities" />
        <p className="font-bold text-2xl pl-6">{winter}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl pl-6">Tips from the host to enjoy your stay:</p>
        <p className="pl-12">...</p>
      </div>
      <p className="font-bold text-xl self-center">
        We wish you a great trip! If you have enjoyed your trip and want to further contribute to the initive, please consider joining us at Visit Finland!
      </p>
      <button type="button" onClick={() => {window.location.href = 'https://www.visitfinland.fi/ajankohtaista/uutiset/2022/jobs-in-finland--sivusto-kokoaa-avoimet-englanninkieliset-tyopaikat'}} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 hover:opacity-100 transition-all duration-500 rounded-3xl">Visit Finland</button>
    </div>
  )
}