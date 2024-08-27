import logo from "@/public/logo.svg";
import Image from "next/image";
import insta from "@/public/network/insta-black.png";
import facebook from "@/public/network/facebook-black.png";
import linkedin from "@/public/network/linkedin-black.png";
import youtube from "@/public/network/youtube-black.png";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className=" bg-foreground flex flex-col">
      <div className="max-w-7xl m-auto flex flex-col justify-center py-6">
        <div className="m-auto mb-6">
          <Image src={logo} alt="logo du site" className="sm:w-[550px] w-96" />
        </div>
        <div className="flex gap-10 m-auto">
          <a href="">
            <Image src={insta} alt="" width={40} height={40} />
          </a>

          <a href="">
            <Image src={linkedin} alt="" width={40} height={40} />
          </a>
          <a href="">
            <Image src={youtube} alt="" width={40} height={40} />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row m-auto lg:gap-20  gap-3 w-full  pt-12 justify-center">
          <Link href="/about" className="text-background text-center">
            Qui sommes-nous ?
          </Link>
          <Link href="" className="text-background  text-center">
            Mention Légales
          </Link>
          <Link href="/contact" className="text-background text-center">
            Contact
          </Link>
          <Link href="/coaching" className="text-background text-center">
            Coaching
          </Link>
        </div>
      </div>
      <div className="bg-muted text-center text-gray-300 font-light text-xs py-2">
        Copyright 2024 © Dietactique - Réalisation Neblink
      </div>
    </div>
  );
}
