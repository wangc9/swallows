import Image from "next/image";
import Header from "../components/header";
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
        <p className="text-xl font-medium py-4">Finland's national Sustainable Travel Finland (STF) programme was created for the tourism industry as a tool for achieving the sustainable development goals and climate goals. An essential element of the programme is the commitment of the travel sector to national sustainable tourism indicators and related data collection. If you want to participate in one of the most ambitious programme </p>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={commitment} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Commitment</p>
            <p className="px-4">The first step in participating in the STF is to make a formal commitment. Within this step, you will establish formal contact with experts from Visit Finland and walk through all the upcoming processes.</p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={knowHow} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Increasing know-how</p>
            <p className="px-4">To help you have a better understanding of sustainable tourism, Visit Finland provides a variety of online courses and workshops for you to know the in and out about how you can develop your business in a sustainable way.</p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={development} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Development Plan</p>
            <p className="px-4">Now that you've familiared yourself with sustainable tourism, it is time for your to make your own plan. What can you do in the short and long term to contribute to sustainable tourism.</p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={communication} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Responsible communication</p>
            <p className="px-4">So now you've made your plan. Don't forget to share it with the public!</p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={certification} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Certification & Auditing</p>
            <p className="px-4"></p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={verification} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Verification and Measurability</p>
            <p className="px-4">Collect data about your performance and verify that you are performing up to the STF standard.</p>
          </div>
        </div>
        <div className="rounded border-sky-500 border-2 py-4 my-4 flex items-center">
          <Image className="self-center" src={agreement} width={150} alt="farmer" />
          <div className="flex flex-col">
            <p className="py-4 px-4 font-semibold text-2xl">Agreement & Continuous Development</p>
            <p className="px-4">All things are set. Now you can sign the offical agreement and get you certificate. The certificate comes with a time limit, so don't forget to brush up on your development plan and re-certify from time to time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}