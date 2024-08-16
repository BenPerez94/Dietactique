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
import { Category, Article } from "@/types/type";
import { Slice } from "lucide-react";
import { useEffect, useState } from "react";

export default async function Home() {
  const categories: Category[] = await getCategoriesWithLastTwoArticles();

  return (
    <div className="mt-32 ">
      {/* HERO */}

      <div className="flex flex-col pb-32  bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-foreground opacity-80 z-10"></div>
        <div className="z-20">
          <Image
            src={logo}
            alt="logo du site"
            className="m-auto w-[700px] pt-24 px-6 pb-6"
          />
          <p className="m-auto text-background text-xl p-3 px-8 max-w-3xl text-center">
            Mon objectif : Vous guider vers le succès de votre perte de poids en
            vous fournissant des conseils pour une alimentation plus saine et
            une meilleure hygiène de vie.
          </p>
        </div>
      </div>

      {/* CATEGORIES PREVIEW */}

      <div className="flex flex-col xl:flex-row max-w-7xl m-auto py-6 mb-6 px-3">
        <div className="flex-2 lg:min-w-[849px] w-full">
          {categories.map((category) => (
            <div key={category.id}>
              <h1 className="text-center xl:text-left">{category.name}</h1>
              <div className="flex flex-col sm:flex-row maw-w-full justify-center pt-10 my-3 gap-12">
                {category.articles?.map((article) => (
                  <Link href={`/article/${article.id}`} key={article.id}>
                    <div className="flex flex-col border p-4  rounded-md lg:w-[400px] shadow-lg shadow-gray-200/100 hover:border-accent hover:scale-105 transition-all duration-300">
                      <Image
                        src={test}
                        alt=""
                        className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                      />
                      <h2 className="mt-6 mb-3 min-h-14">{article.title}</h2>
                      <p className="min-h-20">
                        {article.description
                          ? article.description.length > 100
                            ? `${article.description.slice(0, 100)}...`
                            : article.description
                          : "Aucune description disponible"}
                      </p>
                    </div>
                  </Link>
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
