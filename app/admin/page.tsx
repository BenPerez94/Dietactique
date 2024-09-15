import { getArticles, getCategories } from "@/lib/prisma";
import AdminPageClient from "@/components/AdminPageClient";

export const revalidate = 0;

export default async function AdminPage() {
  const articlesFromDB = await getArticles();
  const categories = await getCategories();

  const articles = articlesFromDB.map((article) => ({
    ...article,
    createdAt: article.createdAt.toISOString(),
    updatedAt: article.updatedAt.toISOString(),
  }));

  return <AdminPageClient articles={articles} categories={categories} />;
}
