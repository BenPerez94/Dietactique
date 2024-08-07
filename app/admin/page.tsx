import { getArticles, getCategories } from "@/lib/prisma";
import AdminPageClient from "@/components/AdminPageClient";

export default async function AdminPage() {
  const articles = await getArticles();
  const categories = await getCategories();

  return <AdminPageClient articles={articles} categories={categories} />;
}
