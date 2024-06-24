/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import test from "@/public/test.jpg";
import insta from "@/public/instagram.png";
import logo from "@/public/logo.svg";

export default function Home() {
   return (
      <div className="mt-32 ">
         {/* HERO */}

         <div className="flex flex-col pb-32  bg-hero-pattern bg-cover bg-center relative">
            <div className="absolute inset-0 bg-foreground opacity-80 z-10"></div>
            <div className="z-20">
               <Image
                  src={logo}
                  alt="logo du site"
                  className="m-auto w-[750px] pt-24 pb-6"
               />
               <p className="m-auto text-background text-xl max-w-3xl text-center">
                  Mon objectif : Vous accompagner vers la réussite de votre
                  perte de poids grâce à une alimentation saine, équilibrée et
                  gourmande !
               </p>
            </div>
         </div>

         {/* CATEGORIES PREVIEW */}

         <div className="flex flex-col lg:flex-row max-w-7xl m-auto py-6 mb-6 px-3">
            <div className="flex-2">
               <div>
                  <h1>Nutrition</h1>
                  <div className="flex pt-10 my-3 gap-12">
                     <div className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="article/1" className="button mt-3 ml-auto">
                           Lire l'article
                        </Link>
                     </div>

                     <div className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button ml-auto">
                           Lire l'article
                        </Link>
                     </div>
                  </div>
                  <Link
                     href=""
                     className="button my-10 w-64 m-auto bg-muted text-background"
                  >
                     Voir la catégorie
                  </Link>
               </div>
               <div>
                  <h1>Nutrition</h1>
                  <div className="flex pt-10 my-3 gap-12">
                     <div className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button mt-6 ml-auto">
                           Lire l'article
                        </Link>
                     </div>

                     <div className="flex flex-col border p-4  rounded-md w-[400px]  shadow-lg shadow-gray-200/100">
                        <Image
                           src={test}
                           alt=""
                           className="h-64 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                        />
                        <h2>Titre Article</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco
                        </p>
                        <Link href="" className="button mt-6 ml-auto">
                           Lire l'article
                        </Link>
                     </div>
                  </div>
                  <Link
                     href=""
                     className="button my-10 w-64 m-auto bg-muted text-background"
                  >
                     Voir la catégorie
                  </Link>
               </div>
            </div>

            {/* SIDE SECTION */}

            <div className="flex-1 p-12 ml-12">
               <div className="mb-12">
                  <h2>Qui suis-je ?</h2>
                  <p>
                     Je m'appelle Christophe, j'ai 28 ans et je suis coach
                     sportif diplômé. Depuis plus de deux décennies, le sport
                     fait partie intégrante de ma vie.
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
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed consectetur adipiscing
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
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed consectetur adipiscing
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
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed consectetur adipiscing
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
      </div>
   );
}
