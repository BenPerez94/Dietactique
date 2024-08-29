"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo-min.svg";
import { Cross, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types/type";
import SearchBar from "@/components/SearchBar";
import insta from "@/public/network/insta.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";

function HeaderClient({ categories }: { categories: Category[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

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
    <>
      <header
        className={`h-20 fixed w-full bg-background border-b shadow-sm z-50 transition-all duration-300 ${
          isScrolled ? "lg:h-24" : "lg:h-[132px]"
        }`}
      >
        <div className="border-b p-1 text-sm shadow-inset">
          <div className="px-12 text-right flex justify-end">
            <div className="flex-none button cursor-pointer p-0 mt-0">
              CAOCHING{" "}
            </div>
            <div className="flex  justify-end gap-4 flex-none w-32">
              <a href="" className="my-auto">
                <Image src={insta} alt="" width={16} height={16} />
              </a>

              <a href="" className="my-auto">
                <Image src={linkedin} alt="" width={16} height={16} />
              </a>
              <a href="" className="my-auto">
                <Image src={youtube} alt="" width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex max-w-full lg:px-12 h-24 px-2 m-auto justify-between transition-all duration-300 ${
            isScrolled ? "lg:h-16" : "lg:h-24"
          }`}
        >
          <div
            className="p-0 py-4 lg:hidden cursor-pointer"
            onClick={handleMenu}
          >
            {isOpenMenu ? <X size={50} /> : <Menu size={50} />}
          </div>
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "pt-0" : "pt-0"
            } sm:flex-none`}
          >
            <Link href="/">
              <Image
                src={logo}
                alt=""
                priority={true}
                className={`h-auto  w-40 ${
                  isScrolled ? "lg:w-42" : "lg:w-60"
                } pt-0 lg:pt-0 mr-12 transition-all duration-300`}
              />
            </Link>
          </div>
          <div className="lg:block flex-1 hidden">
            <nav
              className={`transition-all duration-300 ${
                isScrolled ? "py-4" : "py-9"
              }`}
            >
              <ul className="flex font-bold transition-all duration-300 list-none py-0  header-li">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="p-1 mr-12 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href={`/categories/${category.id}`}
                      className="p-3 rounded text-md     transition-all duration-300  "
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div
            className={` flex-none   xl:block hidden transition-all duration-300 ${
              isScrolled ? "py-4" : "py-9"
            }`}
          >
            <SearchBar />
          </div>
          <div
            className={`relative xl:hidden lg:pt-12 pt-6 transition-all duration-300 cursor-pointer ${
              isScrolled ? "lg:pt-4" : ""
            }`}
            onClick={handleSearch}
          >
            <Search size={30} className="absolute right-3" />
          </div>
        </div>
      </header>

      <div
        className={`${
          isOpenMenu ? "top-20" : "mt-[-200px]"
        } transition-all duration-300 z-40 fixed w-full lg:hidden`}
      >
        <nav className="transition-all duration-300 py-0 w-full">
          <ul className="flex flex-col font-bold transition-all duration-300 list-none py-0  header-li">
            {categories.map((category) => (
              <li
                key={category.id}
                className="p-6 border-b bg-foreground text-white transition-all duration-300"
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="p-3 rounded  text-lg     transition-all duration-300  "
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`${
          isOpenSearch ? "top-20" : "top-[-200px]"
        } flex-none  fixed z-40  right-6 transition-all duration-300 py-4 lg:hidden`}
      >
        <SearchBar />
      </div>
    </>
  );
}

export default HeaderClient;
