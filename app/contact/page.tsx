/* eslint-disable react/no-unescaped-entities */
import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex sm:flex-row flex-col mt-32 max-w-5xl m-auto py-16">
      <div className="flex-1 px-6 text-left">
        <h1 className="text-4xl pt-0">Contact</h1>
        <p>
          Merci beaucoup d’avoir pris le temps de visiter notre blog ! Si vous
          avez des questions, des commentaires ou besoin de plus d’informations,
          nous serions ravis de vous aider.
          <br /> <br /> Contactez nous via ce formulaire. Nous ferons de notre
          mieux pour vous répondre dans les plus brefs délais. Votre retour est
          précieux et nous aide à améliorer le contenu de ce site.
        </p>
        <p>
          Vous pouvez également nous retrouver sur les réseaux sociaux et nous
          envoyer un message directement, ou encore vous abonner pour rester
          informé des nouveautés. À très bientôt !
        </p>
        <p>
          Nous ferons de notre mieux pour répondre à votre demande dans les plus
          brefs délais. Merci encore pour votre intérêt !
        </p>
        <div className="mt-20 mb-20">
          <div className="flex justify-center gap-10 m-auto">
            <a href="">
              <Image src={insta} alt="" width={40} height={40} />
            </a>

            <a href="">
              <Image src={linkedin} alt="" width={40} height={40} />
            </a>
            <a href="">
              <Image src={youtube} alt="" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 px-6 w-full m-auto mt-0">
        <form
          action=""
          className="text-left  p-6 shadow-lg bg-orange-100 rounded"
        >
          <h2 className="text-2xl mb-6">Contactez nous</h2>

          <div>
            <input
              type="text"
              placeholder="Nom"
              className="w-full mb-5 p-2 rounded border border-gray-300  "
            />

            <input
              type="text"
              placeholder="Prénom"
              required
              className="w-full mb-5 p-2 rounded border border-gray-300  "
            />
          </div>

          <input
            type="mail"
            placeholder="Email"
            required
            className="w-full mb-5 p-2 rounded border border-gray-300  "
          />

          <textarea
            placeholder="Votre message..."
            rows={5}
            required
            className="w-full mb-5 p-2 rounded border border-gray-300 h-24 font-light "
          />

          <input
            type="submit"
            className=" max-w-24 m-auto mt-3 border-none hover:cursor-pointer bg-accent   hover:scale-105 transition duration-200 ease-in-out  shadow-lg"
          />
        </form>
      </div>
    </div>
  );
}
