/* eslint-disable react/no-unescaped-entities */
import { getArticleById, getArticlesByCategoryId } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import test from "@/public/test.jpg";
import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import Link from "next/link";
import Aside from "@/components/aside";
import { Category, Article } from "@/types/type";
interface PageParams {
  params: {
    id: string;
  };
}

export default async function ArticlePage({ params }: PageParams) {
  const { id } = params;
  const article: Article | null = await getArticleById(String(id));

  if (!article) {
    notFound();
  }

  const category = article?.category?.id || "";
  const articleCategory: Article[] = await getArticlesByCategoryId(category);

  return (
    <div className="flex lg:flex-row flex-col mt-32 justify-between max-w-7xl m-auto">
      <div className="lg:flex-1 p-6 lg:pt-12">
        <h2 className="text-4xl">{article.title}</h2>
        <p className="text-lg">{article.contents[0].text}</p>

        <div className="mt-20">
          <div className="flex justify-center gap-10 m-auto">
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

          <div className="mt-12">
            <h3 className="text-xl">Autres articles de la catégorie</h3>
            <div className="flex flex-col lg:flex-row gap-6">
              {articleCategory.map((articleSame) => (
                <div
                  key={articleSame.id}
                  className="flex flex-col border p-4 mt-16 rounded-md lg:w-[250px]  shadow-lg shadow-gray-200/100"
                >
                  <Image
                    src={test}
                    alt=""
                    className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                  />
                  <h2>{articleSame.title}</h2>
                  <p className="min-h-24">
                    {articleSame.contents[0].text.substring(0, 150)} ...
                  </p>
                  <Link
                    href={`${articleSame.id}`}
                    className="button mt-3 ml-auto"
                  >
                    Lire l'article
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SIDE SECTION */}

      <Aside />
    </div>
  );
}
