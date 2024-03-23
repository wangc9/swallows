import Image from "next/image";
import Header from "../components/header";
import farmer from '@/public/farmer.svg';
import fisherman from '@/public/fisherman.svg';
import forest from '@/public/forest.svg';
import agreement from '@/public/Agreement.svg';
import certification from '@/public/Certification.svg';
import development from '@/public/DevelopmentPlan.svg';
import commitment from '@/public/Commitment.svg';
import communication from '@/public/Communication.svg';
import verification from '@/public/Verification.svg';
import knowHow from '@/public/KnowHow.svg';

export default function Providers() {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={commitment} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={knowHow} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={development} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={communication} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={certification} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={verification} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex">
          <Image className="self-center" src={agreement} width={150} alt="farmer" />
          <p className="py-4 px-4">Requirements</p>
        </div>
      </div>
    </div>
  )
}