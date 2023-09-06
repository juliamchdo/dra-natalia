import Link from 'next/link'
import Image from "next/image";
import LogoImage from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" aria-label="Cruip" >
      <Image src={LogoImage} id="logo" alt="Logo"/>
    </Link>
  )
}
