import { PrismaClient, Category, Article, Prisma } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;

export async function getArticleById(id: string): Promise<
  | (Article & {
      contents: { text: string; order: number }[];
      images: { url: string; order: number }[];
      videos: { url: string; order: number }[];
      category: Category;
    })
  | null
> {
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

export async function getCategoryById(id: string): Promise<Category | null> {
  return prisma.category.findUnique({
    where: { id },
  });
}

export async function getArticlesByCategoryId(categoryId: string): Promise<
  (Article & {
    contents: { text: string }[];
    category: Category;
  })[]
> {
  return prisma.article.findMany({
    where: { categoryId },
    include: {
      contents: true,
      category: true,
    },
  });
}

export async function getCategories(): Promise<Category[]> {
  return prisma.category.findMany();
}

export async function getCategoriesWithLastTwoArticles(): Promise<
  (Category & {
    articles: (Article & {
      contents: { text: string }[];
    })[];
  })[]
> {
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

  return categories;
}

export async function getLatestArticles(): Promise<
  (Article & {
    contents: { text: string }[];
    category: Category;
  })[]
> {
  return prisma.article.findMany({
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
