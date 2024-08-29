/* eslint-disable react/no-unescaped-entities */

import insta from "@/public/network/insta.png";
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
    <div className="flex xl:flex-col lg:flex-wrap flex-col lg:p-12 p-4  max-w-full xl:max-w-sm lg:w-full">
      <div className="mb-12 text-center xl:text-left m-auto xl:mx-0 xl:my-0">
        <h2>Qui sommes-nous ?</h2>
        <p className="text-md">
          <span className="font-medium">Élodie</span>, diététicienne et{" "}
          <span className="font-medium">Christophe</span>, Coach sportif. Tous
          deux diplômés, nous unissons nos forces et notre expérience pour vous
          aider à atteindre vos objectifs.
        </p>
        <Link href="/about" className="button mt-6 m-auto xl:mx-0">
          En savoir plus
        </Link>
      </div>
      <div className="mb-12 max-w-sm  text-center xl:text-left m-auto xl:mx-0 xl:my-12">
        <h2>NewsLetter</h2>
        <p>
          Soyez les premiers informés : inscrivez-vous à notre newsletter pour
          recevoir des contenus exclusifs, nos meilleures actualités et conseils
          directement dans votre boîte email.
        </p>
        <form action="" className="mt-3">
          <input type="text" placeholder="Nom Prénom" className="mb-3" />
          <input type="text" placeholder="Email" className="mb-6" />
          <input
            type="submit"
            className="button cursor-pointer w-60  m-auto xl:mx-0"
            value="S'inscrire à la newsletter"
          />
        </form>
      </div>
      <div className="mb-12   text-center xl:text-left ">
        <h2 className="mb-6">Suivez-moi sur les réseaux</h2>
        <div className="flex xl:justify-left justify-center gap-4 m-auto ">
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
      </div>
      <div className="mb-12">
        <h2>Derniers articles</h2>
        <div className="flex xl:flex-col sm:flex-row flex-col justify-between w-full gap-2">
          {latestArticles.map((latestArticle) => (
            <Link key={latestArticle.id} href={`/article/${latestArticle.id}`}>
              <div className="flex flex-col gap-3 w-full border p-2 rounded hover:scale-105 hover:shadow-accent hover:border-accent transition-all duration-300">
                <div className="flex gap-3 w-full ">
                  <Image
                    src={test}
                    alt=""
                    className="w-28 h-28 object-cover flex-none rounded"
                  />
                  <div className="flex-1 relative">
                    <h3 className="text-sm py-1 mb-1 border-none pl-0">
                      {latestArticle.title}
                    </h3>
                    <p className="text-[11px] leading-4 my-1"></p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
