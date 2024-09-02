"useClient";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/newsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        toast.success("Inscription réussie !");
        setName("");
        setEmail("");
      } else {
        const data = await response.json();
        toast.error(`Erreur: ${data.error}`);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      toast.error("Une erreur inattendue s'est produite.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        placeholder="Nom Prénom"
        className="mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="mb-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="submit"
        className="button cursor-pointer w-60  m-auto xl:mx-0"
        value="S'inscrire à la newsletter"
      />
      {message && <p>{message}</p>}
    </form>
  );
}
