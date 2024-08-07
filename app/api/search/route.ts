// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  console.log("Keyword:", keyword); // Vérifiez le mot-clé reçu

  if (!keyword) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 });
  }

  const keywords = keyword.split(" ").filter(Boolean);

  try {
    const articles = await prisma.article.findMany({
      where: {
        AND: keywords.map((kw) => ({
          OR: [
            { title: { contains: kw, mode: "insensitive" } },
            { content: { contains: kw, mode: "insensitive" } },
          ],
        })),
      },
      include: {
        category: true, // Inclure la catégorie si nécessaire
      },
    });

    if (articles.length === 0) {
      return NextResponse.json({ message: "Aucun résultat" });
    }

    const results = articles.map((article) => ({
      ...article,
      snippet: article.content.slice(0, 200), // Adjust the slice to get the desired length
    }));

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching articles:", error); // Capturez les erreurs
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
