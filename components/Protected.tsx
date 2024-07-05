"use client";
import { useState, ReactNode, FormEvent } from "react";

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="my-60 m-auto border p-6 px-12 shadow-lg rounded">
        <h1>Page Administrateur</h1>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Entrez le mot de passe"
            required
            className="mt-6"
          />
          <button className="button m-auto mt-6" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;
