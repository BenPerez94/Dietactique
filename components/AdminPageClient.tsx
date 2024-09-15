/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Modal from "react-modal";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

type Category = {
  id: string;
  name: string;
};

type Article = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  createdAt: string;
  view: boolean;
  category?: Category;
};

type AdminPageClientProps = {
  articles: Article[];
  categories: Category[];
};

type DeletableItem = Article | Category;

// Type guard pour vérifier que l'objet a une propriété id
function hasId(item: any): item is { id: string } {
  return item && typeof item.id === "string";
}

export default function AdminPageClient({
  articles,
  categories,
}: AdminPageClientProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<DeletableItem | null>(null);
  const [itemType, setItemType] = useState<"Article" | "Category" | "">("");

  const openModal = (item: DeletableItem, type: "Article" | "Category") => {
    setItemToDelete(item);
    setItemType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setItemToDelete(null);
    setItemType("");
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    if (!itemToDelete || !itemType) return;

    if (!hasId(itemToDelete)) {
      console.error("L'élément sélectionné n'a pas d'identifiant");
      return;
    }

    const response = await fetch(`/api/delete${itemType}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: itemToDelete.id }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Erreur lors de la suppression");
    }

    closeModal();
  };

  return (
    <div className="flex mt-36 container px-6 mb-12">
      <div className="px-6 w-full border py-6">
        <h2>NewsLetter</h2>
        <Link href="/admin/newsletter" className="button w-48">
          Ecrire une NewsLetter
        </Link>
        <br />
        <hr />
        <br />
        <h2>Gestion des articles</h2>
        <Link href="/admin/createArticle" className="button">
          Créer un Article
        </Link>

        <div>
          <table>
            <thead>
              <tr>
                <th className="w-1/2 text-left text-background">
                  Nom de l'article
                </th>
                <th className="text-background">Visible</th>
                <th className="w-1/4 text-background">Catégorie</th>
                <th className="w-1/4 text-background">Date de création</th>
                <th className="w-1/12 text-background">Modifier</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="odd:bg-stone-100 even:bg-stone-200"
                >
                  <th className="text-left">
                    <Link href={`/admin/preview/${article.id}`}>
                      {article.title}
                    </Link>
                  </th>
                  <td className="text-center">
                    {article.view && <Eye className="m-auto" />}
                  </td>
                  <td>{article.category?.name}</td>
                  <td className="text-sm">
                    {formatDate(new Date(article.createdAt))}
                  </td>
                  <td className="flex border-gray-200">
                    <Link href={`admin/editArticle/${article.id}`}>
                      <Edit className="m-auto" />
                    </Link>
                    <Trash2
                      className="m-auto cursor-pointer"
                      color="#7f190e"
                      onClick={() => openModal(article, "Article")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de suppression"
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Êtes-vous sûr de vouloir supprimer cet élément ?</h2>
        <div className="flex justify-center gap-10">
          <button
            onClick={handleDelete}
            className="button bg-red-900 text-white"
          >
            Oui
          </button>
          <button
            onClick={closeModal}
            className="button bg-zinc-800 text-white"
          >
            Non
          </button>
        </div>
      </Modal>
    </div>
  );
}
