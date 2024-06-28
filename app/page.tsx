/* eslint-disable react/no-unescaped-entities */
import { getCategoriesWithLastTwoArticles } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import test from "@/public/test.jpg";
import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import logo from "@/public/logo.svg";
import Aside from "@/components/aside";

export default async function Home() {
  const categories = await getCategoriesWithLastTwoArticles();
  return (
    <div className="mt-32 ">
      {/* HERO */}

      <div className="flex flex-col pb-32  bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-foreground opacity-80 z-10"></div>
        <div className="z-20">
          <Image
            src={logo}
            alt="logo du site"
            className="m-auto w-[750px] pt-24 pb-6"
          />
          <p className="m-auto text-background text-xl max-w-3xl text-center">
            Mon objectif : Vous accompagner vers la réussite de votre perte de
            poids grâce à une alimentation saine, équilibrée et gourmande !
          </p>
        </div>
      </div>

      {/* CATEGORIES PREVIEW */}

      <div className="flex flex-col lg:flex-row max-w-7xl m-auto py-6 mb-6 px-3">
        <div className="flex-2 min-w-[849px]">
          {categories.map((category) => (
            <div key={category.id}>
              <h1>{category.name}</h1>
              <div className="flex pt-10 my-3 gap-12">
                {category.articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100"
                  >
                    <Image
                      src={test}
                      alt=""
                      className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                    />
                    <h2>{article.title}</h2>
                    <p className="min-h-24">
                      {article.contents?.[0]?.text?.substring(0, 250) ?? ""}...
                    </p>
                    <Link
                      href={`/article/${article.id}`}
                      className="button mt-3 ml-auto"
                    >
                      Lire l'article
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href={`/categories/${category.id}`}
                className="button my-10 w-64 m-auto bg-muted text-background"
              >
                Voir la catégorie
              </Link>
            </div>
          ))}
        </div>

        {/* SIDE SECTION */}
        <Aside />
      </div>
    </div>
  );
}
