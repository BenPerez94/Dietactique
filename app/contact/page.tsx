import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col mt-32 max-w-7xl m-auto py-16">
      <div className="flex-1 px-6 text-center">
        <h1 className="text-4xl pt-0">Contactez moi</h1>
        <p>une question ? contactez moi</p>
      </div>
      <div className="flex-1 px-6 mt-12 w-full m-auto">
        <form
          action=""
          className="text-center  p-12 shadow-lg border  rounded-lg"
        >
          <div className="flex gap-3">
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full mb-5 p-2 rounded border border-gray-300 shadow-lg "
              />

              <input
                type="text"
                placeholder="Email"
                required
                className="w-full mb-5 p-2 rounded border border-gray-300  shadow-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Prénom"
                required
                className="w-full mb-5 p-2 rounded border border-gray-300  shadow-lg"
              />

              <input
                type="number"
                placeholder="Numéro"
                required
                className="w-full mb-5 p-2 rounded border border-gray-300  shadow-lg"
              />
            </div>
          </div>
          <textarea
            placeholder="Votre message..."
            rows={5}
            required
            className="w-full mb-5 p-2 rounded border border-gray-300 h-64  shadow-lg"
          />

          <input
            type="submit"
            className=" max-w-24 m-auto mt-3 border-none hover:cursor-pointer bg-accent   hover:scale-105 transition duration-200 ease-in-out  shadow-lg"
          />
        </form>

        <div className="mt-20">
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
    </div>
  );
}
