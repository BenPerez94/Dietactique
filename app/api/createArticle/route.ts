import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { title, content, description, categoryId, view } = await req.json();

    if (!title || !content || !categoryId) {
      return NextResponse.json(
        { error: "Le titre, le contenu et la catégorie sont requis" },
        { status: 400 }
      );
    }

    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        description,
        categoryId,
        view: view || false,
      },
    });

    return NextResponse.json(newArticle, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la création de l'article:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
