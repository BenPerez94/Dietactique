/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { toast, Toaster } from "sonner";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Category = {
  id: string;
  name: string;
};

export default function EditArticle() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState(""); // Ajout de l'état pour la description
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [view, setView] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/getCategories");
      const data = await response.json();
      setCategories(data);
    };

    const fetchArticle = async () => {
      if (!id) return;
      const response = await fetch(`/api/getArticle?id=${id}`);
      const data = await response.json();
      setTitle(data.title);
      setMainImage(data.mainImage);
      setContent(data.content);
      setDescription(data.description || "");
      setCategoryId(data.categoryId);
      setView(data.view);
    };

    fetchCategories();
    fetchArticle();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    startTransition(async () => {
      const response = await fetch(`/api/updateArticle`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          mainImage,
          content,
          description,
          categoryId,
          view,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(`Erreur: ${data.error}`);
        return;
      }

      toast.success("Article modifié avec succès");
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    });
  };

  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
  ];

  return (
    <div className="mt-40 container p-6 border">
      <h1>Modifier un article</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="categoryId" className="block">
            Catégorie:
          </label>
          <select
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="border p-2 pr-6 rounded"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mainImage" className="block">
            Image principale
          </label>
          <ReactQuill
            value={mainImage}
            onChange={setMainImage}
            modules={{ toolbar: ["image"] }}
            formats={["image"]}
            className="custom-quill-image"
          />
        </div>
        <div>
          <label htmlFor="title">Titre de l'article:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Titre de l'article"
          />
        </div>

        <div>
          <label htmlFor="description">Description de l'article:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
            placeholder="Brève description de l'article"
          />
        </div>

        <div>
          <label htmlFor="content" className="block">
            Contenu de l'article:
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="custom-quill"
          />
        </div>
        <div className="flex">
          <input
            type="checkbox"
            id="view"
            checked={view}
            onChange={(e) => setView(e.target.checked)}
            className="w-5 mr-3"
          />
          <label htmlFor="view" className="block">
            Afficher l'article
          </label>
        </div>

        <button type="submit" className="button" disabled={isPending}>
          Modifier
        </button>
      </form>
    </div>
  );
}
