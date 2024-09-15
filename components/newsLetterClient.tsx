/* eslint-disable react/no-unescaped-entities */
"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

type Subscriber = {
  id: string;
  name: string;
  email: string;
};

// Props du composant
interface AddNewsLetterClientProps {
  subscribers: Subscriber[];
}

export default function AddNewsLetterClient({
  subscribers,
}: AddNewsLetterClientProps) {
  return (
    <div className=" mt-40 container p-6 border">
      <div>
        <h1>Envoyer une NewsLetter</h1>
        <Dialog>
          <DialogTrigger className="button mb-6 w-72">
            Voir la liste des abonnés
          </DialogTrigger>
          <DialogContent className="max-h-[650px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle className="mb-0">Liste des abonnés</DialogTitle>
              <DialogDescription>
                Tout les abonnés a la newsletter
              </DialogDescription>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px] text-left">Nom</TableHead>
                    <TableHead className="text-right">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium  text-left">
                        {subscriber.name}
                      </TableCell>
                      <TableCell className="text-right">
                        {subscriber.email}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="title">Titre de la newsletter:</label>
            <input
              type="text"
              id="title"
              required
              placeholder="Titre de l'article"
            />
          </div>
          <div>
            <label htmlFor="content" className="block">
              Contenu de la newsletter:
            </label>
            <ReactQuill
              value=""
              modules={modules}
              formats={formats}
              className="custom-quill"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
