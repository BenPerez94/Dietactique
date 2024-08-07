// app/add-category/page.tsx
"use client";

import { useState, useTransition } from "react";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    startTransition(async () => {
      const response = await fetch("/api/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(`Erreur: ${data.error}`);
        return;
      }

      const data = await response.json();
      setMessage("Catégorie ajoutée avec succès");
      setName("");
    });
  };

  return (
    <div className="mt-40 w-96 text-center m-auto border p-6">
      <h1>Ajouter une catégorie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom de la catégorie:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="button m-auto mt-6"
          disabled={isPending}
        >
          Ajouter
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
