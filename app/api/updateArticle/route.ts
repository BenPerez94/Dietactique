import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  try {
    const { id, title, content, categoryId, view } = await req.json();

    if (!id || !title || !content || !categoryId) {
      return NextResponse.json(
        {
          error:
            "L'ID, le titre, le contenu et l'ID de la catégorie sont requis",
        },
        { status: 400 }
      );
    }

    const updatedArticle = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        categoryId,
        view,
      },
    });

    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
