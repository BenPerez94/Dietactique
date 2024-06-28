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

export async function getArticleById(id: string): Promise<Article | null> {
  return prisma.article.findUnique({
    where: { id },
    include: {
      contents: { orderBy: { order: "asc" } },
      images: { orderBy: { order: "asc" } },
      videos: { orderBy: { order: "asc" } },
      category: true,
    },
  }) as Promise<Article | null>;
}

export async function getCategoryById(id: string): Promise<Category | null> {
  return prisma.category.findUnique({
    where: { id },
  }) as Promise<Category | null>;
}

export async function getArticlesByCategoryId(
  categoryId: string
): Promise<Article[]> {
  return prisma.article.findMany({
    where: { categoryId },
    include: {
      contents: true,
      category: true,
    },
  }) as Promise<Article[]>;
}
export async function getCategories(): Promise<Category[]> {
  return prisma.category.findMany() as Promise<Category[]>;
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

export async function getLatestArticles(): Promise<Article[]> {
  return prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    include: {
      contents: true,
      category: true,
    },
  }) as Promise<Article[]>;
}
