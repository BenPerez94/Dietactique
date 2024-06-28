import { PrismaClient } from "@prisma/client";
import { Category, Article } from "@/types/type";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

export async function getArticleById(id: string) {
  return prisma.article.findUnique({
    where: { id },
    include: {
      contents: { orderBy: { order: "asc" } },
      images: { orderBy: { order: "asc" } },
      videos: { orderBy: { order: "asc" } },
      category: true,
    },
  });
}

export async function getCategoryById(id: string) {
  return prisma.category.findUnique({
    where: { id },
  });
}

export async function getArticlesByCategoryId(categoryId: string) {
  return prisma.article.findMany({
    where: { categoryId },
    include: {
      contents: true,
      category: true,
    },
  });
}

export async function getCategories() {
  return prisma.category.findMany();
}

export async function getCategoriesWithLastTwoArticles(): Promise<Category[]> {
  const categories = await prisma.category.findMany({
    include: {
      articles: {
        orderBy: {
          createdAt: "desc",
        },
        take: 2,
        include: {
          contents: true,
        },
      },
    },
  });

  // Convert the Prisma output to match the TypeScript types
  return categories.map((category) => ({
    ...category,
    articles: category.articles.map((article) => ({
      ...article,
      category: {
        id: category.id,
        name: category.name,
      },
    })),
  })) as Category[];
}

export async function getLatestArticles() {
  return await prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    include: {
      contents: true,
      category: true,
    },
  });
}
