'use client'

import Image from "next/image"
import placeholder from '../../public/placeholder.jpg';
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-4">
      <Image src={placeholder} width={100} height={100} alt="Group logo" onClick={() => {router.push('/')}} />
    </header>
  )
}