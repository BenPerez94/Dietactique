import { getLatestArticles } from "@/lib/prisma";
import AsideClient from "./asideClient";
import { Article } from "@/types/type";

export default async function Aside() {
  const latestArticles: Article[] = await getLatestArticles();

  return (
    <div className="flex xl:flex-col lg:flex-wrap flex-col max-w-full xl:max-w-sm lg:w-full ">
      <AsideClient latestArticles={latestArticles} />
    </div>
  );
}
