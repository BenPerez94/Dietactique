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
            {
              contents: {
                some: { text: { contains: kw, mode: "insensitive" } },
              },
            },
          ],
        })),
      },
      include: {
        contents: {
          select: {
            text: true,
          },
        },
      },
    });

    const results = articles.map((article) => ({
      ...article,
      snippet: article.contents
        .map((content) => content.text)
        .join(" ")
        .slice(0, 200), // Adjust the slice to get the desired length
    }));

    console.log("Found articles:", results); // Vérifiez les résultats

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching articles:", error); // Capturez les erreurs
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
