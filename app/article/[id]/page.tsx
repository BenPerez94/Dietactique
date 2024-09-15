/* eslint-disable react/no-unescaped-entities */
import { getArticleById, getArticlesByCategoryIdArticle } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import insta from "@/public/network/insta.png";
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
  const articleCategory: Article[] = await getArticlesByCategoryIdArticle(
    category,
    id
  );

  return (
    <>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{
          __html: article.mainImage,
        }}
      ></div>
      <div className="flex xl:flex-row flex-col container">
        <div className="lg:flex-1 xl:p-6 lg:pt-12 mb-16">
          <h2 className="text-4xl mt-[-140px] bg-background text-center  xl:p-6 pt-6 pb-3 px-12 mb-8 shadow-lg border rounded-lg ">
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
              <a href="https://www.instagram.com/christophem910?igsh=N2dleG44dmp6MzNq&utm_source=qr">
                <Image src={insta} alt="" width={40} height={40} />
              </a>
              <a href="https://www.linkedin.com/in/christophe-martin-coach-sportif">
                <Image src={linkedin} alt="" width={40} height={40} />
              </a>
              <a href="https://youtube.com/@christophemartin5552?si=i0lF6zI6SjlMTBjf">
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
                    <div
                      className="miniature h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100 overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: article.mainImage,
                      }}
                    ></div>
                    <h2 className="mb-0">{articleSame.title}</h2>
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
