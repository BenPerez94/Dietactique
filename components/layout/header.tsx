import { getCategories } from "@/lib/prisma";
import { Category } from "@/types/type";
import dynamic from "next/dynamic";

const HeaderClient = dynamic(() => import("@/components/layout/HeaderClient"), {
  ssr: false,
});

export default async function Header() {
  const categories: Category[] = await getCategories();

  return <HeaderClient categories={categories} />;
}
