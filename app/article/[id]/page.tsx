/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import test from "@/public/test.jpg";
import insta from "@/public/instagram.png";
import Link from "next/link";

export default function Article() {
   return (
      <div className="flex mt-32 justify-between max-w-7xl m-auto">
         <div className="flex-1 p-6 pt-12">
            <h2 className="text-4xl">Titre de l'article</h2>
            <p className="text-lg">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Pariatur quaerat voluptatum architecto ea velit blanditiis
               necessitatibus odio? Illo maxime impedit nisi repudiandae fuga,
               nobis voluptatibus aliquam. Minus sequi sapiente quis. Lorem
               ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
               quaerat voluptatum architecto ea velit blanditiis necessitatibus
               odio? Illo maxime impedit nisi repudiandae fuga, nobis
               voluptatibus aliquam. Minus sequi sapiente quis. Lorem ipsum
               dolor sit, amet consectetur adipisicing elit. Pariatur quaerat
               voluptatum architecto ea velit blanditiis necessitatibus odio?
               Illo maxime impedit nisi repudiandae fuga, nobis voluptatibus
               aliquam. Minus sequi sapiente quis.
            </p>
            <br />
            <Image src={test} alt="" />
            <br />
            <p className="text-lg">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Pariatur quaerat voluptatum architecto ea velit blanditiis
               necessitatibus odio? Illo maxime impedit nisi repudiandae fuga,
               nobis voluptatibus aliquam. Minus sequi sapiente quis. Lorem
               ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
               quaerat voluptatum architecto ea velit blanditiis necessitatibus
               odio? Illo maxime impedit nisi repudiandae fuga, nobis
               voluptatibus aliquam. Minus sequi sapiente quis. Lorem ipsum
               dolor sit, amet consectetur adipisicing elit. Pariatur quaerat
               voluptatum architecto ea velit blanditiis necessitatibus odio?
               Illo maxime impedit nisi repudiandae fuga, nobis voluptatibus
               aliquam. Minus sequi sapiente quis.
            </p>

            <div className="mt-20">
               <div className="flex justify-center gap-2 m-auto my-6">
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
               </div>

               <div className="mt-12">
                  <h3 className="text-xl">Autres articles de la catégorie</h3>
                  <div className="flex gap-6">
                     <div className="flex flex-col border p-4 mt-16 rounded-md w-[250px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button mt-3 ml-auto">
                           Lire l'article
                        </Link>
                     </div>
                     <div className="flex flex-col border p-4 mt-16 rounded-md w-[250px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button mt-3 ml-auto">
                           Lire l'article
                        </Link>
                     </div>
                     <div className="flex flex-col border p-4 mt-16 rounded-md w-[250px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button mt-3 ml-auto">
                           Lire l'article
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* SIDE SECTION */}

         <div className="flex-1 p-12 ml-12 max-w-sm">
            <div className="mb-12">
               <h2>Qui suis-je ?</h2>
               <p>
                  Je m'appelle Christophe, j'ai 28 ans et je suis coach sportif
                  diplômé. Depuis plus de deux décennies, le sport fait partie
                  intégrante de ma vie.
               </p>
               <Link href="" className="button mt-6">
                  En savoir plus
               </Link>
            </div>
            <div className="mb-12">
               <h2>NewsLetter</h2>
               <form action="" className="mt-3">
                  <input type="text" placeholder="Nom Prénom" />
                  <input type="text" placeholder="Email" />
                  <input
                     type="submit"
                     className="button cursor-pointer w-60"
                     value="S'inscrire à la newsletter"
                  />
               </form>
            </div>
            <div className="mb-12">
               <h2>Suivez moi sur les réseaux</h2>
               <div className="flex gap-2 m-auto my-6">
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
                  <a href="" className="mr-6">
                     <Image src={insta} alt="" width={32} height={32} />
                  </a>
               </div>
            </div>
            <div className="mb-12">
               <h2>Derniers articles</h2>
               <div className="flex flex-col w-full gap-2">
                  <div className="flex flex-col gap-3 w-full border p-2 rounded">
                     <div className="flex gap-3 w-full ">
                        <Image
                           src={test}
                           alt=""
                           className="w-28 h-28 object-cover flex-none rounded"
                        />
                        <div className="flex-1 relative">
                           <h3 className="text-sm">Titre article</h3>
                           <p className="text-[11px] leading-3 my-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed consectetur adipiscing
                           </p>
                           <Link
                              href=""
                              className="button text-xs w-24 absolute right-0 bottom-0 py-1 "
                           >
                              Lire l'article
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full border p-2 rounded">
                     <div className="flex gap-3 w-full ">
                        <Image
                           src={test}
                           alt=""
                           className="w-28 h-28 object-cover flex-none rounded"
                        />
                        <div className="flex-1 relative">
                           <h3 className="text-sm">Titre article</h3>
                           <p className="text-[11px] leading-3 my-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed consectetur adipiscing
                           </p>
                           <Link
                              href=""
                              className="button text-xs w-24 absolute right-0 bottom-0 py-1 "
                           >
                              Lire l'article
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full border p-2 rounded">
                     <div className="flex gap-3 w-full ">
                        <Image
                           src={test}
                           alt=""
                           className="w-28 h-28 object-cover flex-none rounded"
                        />
                        <div className="flex-1 relative">
                           <h3 className="text-sm">Titre article</h3>
                           <p className="text-[11px] leading-3 my-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed consectetur adipiscing
                           </p>
                           <Link
                              href=""
                              className="button text-xs w-24 absolute right-0 bottom-0 py-1 "
                           >
                              Lire l'article
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
