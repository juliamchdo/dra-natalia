import Link from 'next/link'
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" aria-label="Cruip" className="relative w-1/4">
      <Image className="relative pt-2 w-3/6" src={LogoImage} id="logo"
             alt="Logo"/>
    </Link>
  )
}
