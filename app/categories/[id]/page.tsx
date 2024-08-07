/* eslint-disable react/no-unescaped-entities */
import { getArticlesByCategoryId, getCategoryById } from "@/lib/prisma";
import { notFound } from "next/navigation";
import test from "@/public/test.jpg";
import Image from "next/image";
import Link from "next/link";
import { Category, Article } from "@/types/type";

interface PageParams {
  params: {
    id: string;
  };
}

export default async function Categories({ params }: PageParams) {
  const { id } = params;
  const category: Category | null = await getCategoryById(id);
  const articles: Article[] = await getArticlesByCategoryId(id);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="mt-32 ">
      {/* HERO */}

      <div className="flex flex-col py-20  bg-cat-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-foreground opacity-90 z-10"></div>
        <div className="z-20 m-auto">
          <h1 className="text-background text-center text-4xl">
            {category?.name}
          </h1>
        </div>
      </div>

      {/** Content */}

      <div className="flex flex-wrap pt-24 max-w-7xl m-auto gap-5 px-3">
        {articles.map((article) => (
          <Link href={"/article/" + article.id} key={article.id}>
            <div className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100 mb-24 hover:border-accent hover:scale-105 transition-all duration-300">
              <Image
                src={test}
                alt=""
                className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
              />
              <h2 className="mt-6">{article.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
