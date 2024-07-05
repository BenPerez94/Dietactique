"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo-min.svg";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types/type";
import SearchBar from "@/components/SearchBar";

function HeaderClient({ categories }: { categories: Category[] }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-32 fixed w-full bg-background border shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? "lg:h-16" : "lg:h-32"
      }`}
    >
      <div
        className={`flex max-w-full lg:px-12 h-32 px-2 m-auto justify-between transition-all duration-300 ${
          isScrolled ? "lg:h-16" : "lg:h-32"
        }`}
      >
        <div className="p-0 py-8 lg:hidden">
          <Menu size={60} />
        </div>
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "pt-0" : "pt-1"
          } sm:flex-none`}
        >
          <Link href="/">
            <Image
              src={logo}
              alt=""
              priority={true}
              className={`h-auto  w-40 ${
                isScrolled ? "lg:w-42" : "lg:w-72"
              } pt-6 lg:pt-0 mr-12`}
            />
          </Link>
        </div>
        <div className="lg:block flex-1 hidden">
          <nav
            className={`transition-all duration-300 ${
              isScrolled ? "py-4" : "py-11"
            }`}
          >
            <ul className="flex font-bold">
              {categories.map((category) => (
                <li key={category.id} className="p-1 mr-12">
                  <Link
                    href={`/categories/${category.id}`}
                    className="p-3 rounded border border-background text-lg hover:text-accent"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className={` flex-none  pr-12 xl:block hidden transition-all duration-300 ${
            isScrolled ? "py-4" : "py-12"
          }`}
        >
          <SearchBar />
        </div>
        <div
          className={`relative xl:hidden pt-12 transition-all duration-300 ${
            isScrolled ? "lg:pt-4" : ""
          }`}
        >
          <Search size={30} className="absolute right-3" />
        </div>
      </div>
    </header>
  );
}

export default HeaderClient;
