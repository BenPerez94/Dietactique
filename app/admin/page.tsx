/* eslint-disable react/no-unescaped-entities */
import ProtectedPage from "@/components/Protected";
import { getArticles, getCategories, getCategoryById } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types/type";
import { Edit, Trash2 } from "lucide-react";

export default async function AdminPage() {
  const articles = await getArticles();
  const categories = await getCategories();

  return (
    <ProtectedPage>
      <div className="flex mt-36 container px-6 mb-12">
        <div className="px-6 w-full border">
          <h2>Gestions des articles</h2>
          <button className="button">Créer un Article</button>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="w-1/2 text-left text-background">
                    Nom de l'article
                  </th>
                  <th className="w-1/4 text-background">Catégorie</th>
                  <th className="w-1/4 text-background">Date de création</th>
                  <th className="w-1/12 text-background">Modifier</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="odd:bg-gray-200 even:bg-gray-300"
                  >
                    <th className="text-left">{article.title}</th>
                    <td>{article.category?.name}</td>
                    <td className="text-sm">
                      {formatDate(new Date(article.createdAt))}
                    </td>
                    <td className="flex border-gray-200">
                      <Edit className="m-auto" />
                      <Trash2 className="m-auto" color="#7f190e" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Gestions des Catégories</h2>
          <button className="button w-48">Créer une Catégorie</button>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="w-1/2 text-left text-background">
                    Nom de la catégorie
                  </th>

                  <th className="w-1/12 text-background">Modifier</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((categorie) => (
                  <tr
                    key={categorie.id}
                    className="odd:bg-gray-200 even:bg-gray-300"
                  >
                    <th className="text-left">{categorie.name}</th>

                    <td className="flex border-gray-200">
                      <Edit className="m-auto" />
                      <Trash2 className="m-auto" color="#7f190e" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
}
