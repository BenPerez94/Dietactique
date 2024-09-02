"use client";

import NewsletterForm from "./formNewsLetter";
import Link from "next/link";
import { Article } from "@/types/type";

interface AsideClientProps {
  latestArticles: Article[];
}

export default function AsideClient({ latestArticles }: AsideClientProps) {
  return (
    <div className=" lg:p-12 lg:pt-16 p-4">
      <div className="mb-12 text-center xl:text-left m-auto xl:mx-0 xl:my-0 ">
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
      <div className="mb-12 max-w-sm text-center xl:text-left m-auto xl:mx-0 xl:my-12">
        <h2>NewsLetter</h2>
        <p>
          Soyez les premiers informés : inscrivez-vous à notre newsletter pour
          recevoir des contenus exclusifs, nos meilleures actualités et conseils
          directement dans votre boîte email.
        </p>
        <NewsletterForm />
      </div>
      <div className="mb-12 text-center xl:text-left">
        <h2 className="mb-6">Derniers articles</h2>
        <div className="flex xl:flex-col sm:flex-row flex-col justify-between w-full gap-2">
          {latestArticles.map((latestArticle) => (
            <Link key={latestArticle.id} href={`/article/${latestArticle.id}`}>
              <div className="flex flex-col gap-3 w-full bg-background border p-2 rounded hover:scale-105 hover:shadow-accent hover:border-accent transition-all duration-300">
                <div className="flex gap-3 w-full ">
                  <div
                    className="w-28 h-28 object-cover flex-none rounded overflow-hidden miniatureAside"
                    dangerouslySetInnerHTML={{
                      __html: latestArticle.mainImage,
                    }}
                  ></div>
                  <div className="flex-1 relative">
                    <h3 className="lg:text-sm text-md py-1 font-bold border-none pl-0">
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
