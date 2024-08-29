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
    <>
      <Image
        src={test}
        alt="image de l'article"
        className="h-96 w-full lg:mt-32 mt-20 object-cover"
      />
      <div className="flex xl:flex-row flex-col container">
        <div className="lg:flex-1 xl:p-6 lg:pt-12 mb-16">
          <h2 className="text-4xl mt-[-140px] bg-background text-center  xl:p-6 pt-12 px-12 mb-8 shadow-lg border rounded-lg ">
            {article.title}
            <span className="block text-foreground pt-2 text-lg font-light drop-shadow-sm">
              {article.category.name}
            </span>
          </h2>
          <div className="xl:px-6 ">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: article.content,
              }}
            ></div>
          </div>
          {/* RESEAUX */}

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
          </div>
          <div className="mt-12">
            <h3 className="text-xl border-none pl-0">
              Autres articles de la catégorie
            </h3>
            <div className="flex flex-col lg:flex-row gap-6">
              {articleCategory.slice(0, 3).map((articleSame) => (
                <Link href={`${articleSame.id}`} key={articleSame.id}>
                  <div className="flex flex-col border p-4 mt-16 rounded-md lg:w-[250px]  shadow-lg shadow-gray-200/100 hover:border-accent hover:scale-105 transition-all duration-300">
                    <Image
                      src={test}
                      alt=""
                      className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                    />
                    <h2>{articleSame.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SIDE SECTION */}

        <Aside />
      </div>
    </>
  );
}
