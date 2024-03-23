/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import locationPin from '@/public/location-normal.svg';
import destination from '@/public/destination.svg';
import work from '@/public/work.svg';

export interface LocationDetailProps {
  location: string;
  city: string;
  activities: string;
  choice: string;
}

export default function JourneySummary(props: LocationDetailProps) {
  const {location, city, activities, choice} = props;

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
      <div className={`flex py-2 items-center ${activities === undefined && 'hidden'}`}>
        <Image src={work} width={40} height={40} alt="spring activities" />
        <p className="font-bold text-2xl pl-6">{activities}</p>
      </div>
      <div className={`flex flex-col ${choice === 'normal' && 'hidden'}`}>
        <p className="font-semibold text-xl py-4">Tips from the host to enjoy your stay:</p>
        <p className="pl-12">You might have never worked at a farm before, but don't you worry! Relax and enjoy, you can always ask for help.</p>
      </div>
      <p className="font-bold text-xl self-center pt-6 pb-4">
        We wish you a great trip! If you have enjoyed your trip and want to further contribute to the initive, please consider joining us at Visit Finland!
      </p>
      <button type="button" onClick={() => {window.location.href = 'https://www.visitfinland.fi/ajankohtaista/uutiset/2022/jobs-in-finland--sivusto-kokoaa-avoimet-englanninkieliset-tyopaikat'}} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 hover:opacity-100 transition-all duration-500 rounded-3xl">Visit Finland</button>
    </div>
  )
}