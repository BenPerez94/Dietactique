"use client";

import Image from "next/image";
import logo from "@/public/logo-min.png";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
   return (
      <header className="border border-b fixed w-full bg-background shadow-sm z-50">
         <div className="flex sm:h-32 h-24 max-w-full px-12 m-auto justify-between">
            <div className="p-2 py-5 sm:hidden ">
               <Menu size={60} />
            </div>
            <div className=" p-3 sm:flex-none">
               <Link href="/">
                  <Image
                     src={logo}
                     alt=""
                     priority={true}
                     className="h-full w-auto sm:min-w-36 pt-2"
                  />
               </Link>
            </div>
            <div className="sm:block sm:flex-1 hidden">
               <nav className="py-11">
                  <ul className="flex lg:mr-60 font-bold">
                     <li className="  p-3 mr-12">
                        <Link
                           href="/categories"
                           className="p-3 rounded border border-background hover:border-black"
                        >
                           Nutrition
                        </Link>
                     </li>
                     <li className="p-3 mr-12">
                        <Link
                           href="/"
                           className="p-3  rounded border border-background hover:border-black"
                        >
                           Sport
                        </Link>
                     </li>
                     <li className="p-3 mr-12">
                        <Link
                           href="/"
                           className=" p-3  rounded border border-background hover:border-black"
                        >
                           Santé
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="flex-none py-12 pr-3 md:block hidden">
               <div className=" relative flex">
                  <Search
                     size={18}
                     className="absolute left-2 top-2"
                     color="#8c8c8c"
                  />
                  <input
                     type="search"
                     placeholder="Rechercher..."
                     className="pl-8 w-96"
                  />
               </div>
            </div>
            <div className="p-7 relative md:hidden block sm:p-10">
               <Search size={40} className="absolute right-3" />
            </div>
         </div>
      </header>
   );
}
