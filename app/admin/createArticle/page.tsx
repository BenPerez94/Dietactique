/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState, useTransition } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Category = {
  id: string;
  name: string;
};

export default function AddArticle() {
  const [title, setTitle] = useState("");
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

    fetchCategories();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    startTransition(async () => {
      const response = await fetch("/api/createArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, description, categoryId, view }), // Inclure la description ici
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(`Erreur: ${data.error}`);
        return;
      }

      const data = await response.json();
      toast.success("Article ajouté avec succès");
      setTitle("");
      setContent("");
      setDescription(""); // Réinitialiser la description après l'ajout
      setCategoryId("");
      setView(false);

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
      <h1>Ajouter un article</h1>
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
            <option>Sélectionner une catégorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mainImage">Image principale :</label>
          <input
            type="file"
            id="mainImage"
            accept="image/*"
            onChange={(e) => setMainImage(e.target.files[0])} // Mise à jour de l'état avec le fichier sélectionné
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
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
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
          Ajouter
        </button>
      </form>
      <Toaster expand={true} position="top-center" closeButton richColors />
    </div>
  );
}
