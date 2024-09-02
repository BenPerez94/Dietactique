// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  console.log("Keyword:", keyword);

  if (!keyword) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 });
  }

  const keywords = keyword.split(" ").filter(Boolean);

  try {
    const articles = await prisma.article.findMany({
      where: {
        view: true,
        AND: keywords.map((kw) => ({
          OR: [
            { title: { contains: kw, mode: "insensitive" } },
            { content: { contains: kw, mode: "insensitive" } },
          ],
        })),
      },
      include: {
        category: true,
      },
    });

    if (articles.length === 0) {
      return NextResponse.json({ message: "Aucun résultat" });
    }

    const results = articles.map((article) => ({
      ...article,
      snippet: article.content.slice(0, 200),
    }));

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
