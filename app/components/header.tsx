import Image from "next/image"
import placeholder from '../../public/placeholder.jpg';

export default function Header() {
  return (
    <header className="py-4">
      <Image src={placeholder} width={100} height={100} alt="Group logo" />
    </header>
  )
}