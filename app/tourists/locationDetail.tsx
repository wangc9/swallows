import Image from "next/image";
import locationPin from '@/public/location-normal.svg';
import work from '@/public/work.svg';
import destination from '@/public/destination.svg';
import { StaticImageData } from "next/image";

export interface LocationDetailProps {
  location: string;
  city: string;
  activities: string;
}

export default function LocationDetail(props: LocationDetailProps) {
  const {location, city, activities} = props;

  return (
    <div className="flex flex-col">
      <div className="flex py-6 items-center">
        <Image src={destination} width={40} height={40} alt="destination" />
        <p className="font-bold text-4xl pl-6">{location}</p>
      </div>
      <div className="flex py-6 items-center">
        <Image src={locationPin} width={40} height={40} alt="destination" />
        <p className="font-bold text-4xl pl-6">{city}</p>
      </div>
      <div className={`flex py-6 items-center ${activities === undefined && 'hidden'}`}>
        <Image src={work} width={40} height={40} alt="spring activities" />
        <p className="font-bold text-4xl pl-6">{activities}</p>
      </div>
    </div>
  )
}