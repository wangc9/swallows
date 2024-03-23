import Image from "next/image";
import Header from "../components/header";
import farmer from '@/public/farmer.svg';
import fisherman from '@/public/fisherman.svg';
import forest from '@/public/forest.svg';

export default function Providers() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4">
        <div className="rounded border-sky-500 border-2 px-4 py-6 flex flex-col">
          <Image src={farmer} width={300} height={300} alt="farmer" />
          <p className="py-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 px-4 py-6 flex flex-col">
          <Image src={fisherman} width={300} height={300} alt="farmer" />
          <p className="py-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 px-4 py-6 flex flex-col">
          <Image src={forest} width={300} height={300} alt="farmer" />
          <p className="py-4">Requirements</p>
        </div>
      </div>
    </div>
  )
}