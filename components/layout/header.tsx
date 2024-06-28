import Image from "next/image";
import logo from "@/public/logo-min.svg";
import { getCategories } from "@/lib/prisma";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="border border-b fixed w-full bg-background shadow-sm z-50">
      <div className="flex sm:h-32 h-24 max-w-full px-12 m-auto justify-between">
        <div className="p-2 py-5 sm:hidden ">
          <Menu size={60} />
        </div>
        <div className="pt-1 sm:flex-none">
          <Link href="/">
            <Image
              src={logo}
              alt=""
              priority={true}
              className="h-auto w-72 mr-12"
            />
          </Link>
        </div>
        <div className="sm:block sm:flex-1 hidden">
          <nav className="py-11">
            <ul className="flex lg:mr-60 font-bold">
              {categories.map((category) => (
                <li key={category.id} className="  p-2 mr-12">
                  <Link
                    href={`/categories/${category.id}`}
                    className="p-3 rounded border border-background text-lg hover:border-black"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
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
