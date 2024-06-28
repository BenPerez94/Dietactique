/* eslint-disable react/no-unescaped-entities */

import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import Image from "next/image";
import test from "@/public/test.jpg";
import Link from "next/link";
import { getLatestArticles } from "@/lib/prisma";
import { Article } from "@/types/type";

export default async function Aside() {
  const latestArticles: Article[] = await getLatestArticles();
  return (
    <div className="flex-1 p-12 ml-12 max-w-sm">
      <div className="mb-12">
        <h2>Qui suis-je ?</h2>
        <p>
          Je m'appelle Christophe, j'ai 28 ans et je suis coach sportif diplômé.
          Depuis plus de deux décennies, le sport fait partie intégrante de ma
          vie.
        </p>
        <Link href="" className="button mt-6">
          En savoir plus
        </Link>
      </div>
      <div className="mb-12">
        <h2>NewsLetter</h2>
        <form action="" className="mt-3">
          <input type="text" placeholder="Nom Prénom" />
          <input type="text" placeholder="Email" />
          <input
            type="submit"
            className="button cursor-pointer w-60"
            value="S'inscrire à la newsletter"
          />
        </form>
      </div>
      <div className="mb-12">
        <h2>Suivez moi sur les réseaux</h2>
        <div className="flex gap-4 m-auto">
          <a href="">
            <Image src={insta} alt="" width={40} height={40} />
          </a>
          <a href="">
            <Image src={facebook} alt="" width={40} height={40} />
          </a>
          <a href="">
            <Image src={linkedin} alt="" width={40} height={40} />
          </a>
          <a href="">
            <Image src={youtube} alt="" width={40} height={40} />
          </a>
        </div>
      </div>
      <div className="mb-12">
        <h2>Derniers articles</h2>
        <div className="flex flex-col w-full gap-2">
          {latestArticles.map((latestArticle) => (
            <div
              key={latestArticle.id}
              className="flex flex-col gap-3 w-full border p-2 rounded"
            >
              <div className="flex gap-3 w-full ">
                <Image
                  src={test}
                  alt=""
                  className="w-28 h-28 object-cover flex-none rounded"
                />
                <div className="flex-1 relative">
                  <h3 className="text-sm">{latestArticle.title}</h3>
                  <p className="text-[11px] leading-3 my-1">
                    {latestArticle.contents[0].text.substring(0, 100)}...
                  </p>
                  <Link
                    href={`/article/${latestArticle.id}`}
                    className="button text-xs w-24 absolute right-0 bottom-0 py-1 "
                  >
                    Lire l'article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
