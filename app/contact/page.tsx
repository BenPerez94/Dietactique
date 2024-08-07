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
          Merci d'avoir visité notre page de contact. Nous apprécions votre
          intérêt pour *Nom* et aimerions avoir de vos nouvelles.
        </p>
        <p>
          Si vous avez des questions ou des commentaires sur nos produits ou
          services, n'hésitez pas à nous contacter. Vous pouvez nous contacter
          via le formulaire fourni sur cette page ou sur les réseaux.
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
              <Image src={facebook} alt="" width={40} height={40} />
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
      <div className="flex-1 px-6 w-full m-auto">
        <form
          action=""
          className="text-left  p-6 shadow-lg bg-orange-100 rounded"
        >
          <h2 className="text-2xl mb-1">Contactez moi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            molestiae dicta rerum porro recusandae assumenda animi.
          </p>
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
