import Image from "next/image";
import about from "@/public/about.jpg";
import about2 from "@/public/about2.jpg";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="mt-32 text-lg">
      <div className=" bg-orange-100 ">
        <div className="container flex">
          <div className="flex-1 py-24 px-24">
            <h1 className="text-5xl font-semibold pb-6">
              Ton coatch préférer pour perdre ton gros gras
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              doloribus laboriosam suscipit dolor iusto eaque dolorum ut
              delectus, ea dolore maiores vitae quam earum
            </p>
            <button className="button w-64 mt-12 text-xl">
              Je veux un coatching
            </button>
          </div>
          <div className="flex-1 ">
            <Image
              src={about}
              alt=""
              className="w-3/4 m-auto mb-[-100px] mt-20  shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container">
          <p className="text-xl text-left py-12 px-24">
            <span className="block py-6 font-semibold text-2xl">
              Bienvenue sur mon blog dédié à la perte de poids !{" "}
            </span>
            Ici, vous trouverez une multitude de conseils pour atteindre vos
            objectifs de manière saine et durable. Je partagerai des astuces
            pratiques sur la nutrition et l'alimentation, des idées pour
            intégrer une activité physique adaptée à votre quotidien, ainsi que
            des recommandations pour améliorer votre bien-être et votre santé.
            Mon objectif est de vous fournir des informations fiables et
            motivantes pour vous accompagner tout au long de votre parcours.
            Explorez les articles et découvrez comment transformer votre mode de
            vie pour une perte de poids réussie et épanouissante.
          </p>
        </div>
      </div>
      <div className="bg-foreground py-24">
        <div className="container flex">
          <div className="flex-1 py-20">
            <Image
              src={about2}
              alt=""
              className="h-96 w-auto m-auto shadow-sm shadow-black"
            />
          </div>
          <div className="flex-1 p-12 py-24">
            <h2 className="text-4xl text-white">
              Salut, je m'appel Christophe.
            </h2>
            <p className="text-lg  text-white">
              J'ai 28 ans et je suis coach sportif diplômé. <br />
              Depuis plus de deux décennies, le sport fait partie intégrante de
              ma vie. <br /> À l'âge de 7 ans, j'ai commencé l'athlétisme, une
              aventure qui a duré 14 ans avant que je ne me tourne vers la
              musculation. <br />
              <br />
              Mon parcours professionnel dans le milieu du sport m'a amené à
              travailler avec des centaines de personnes.
              <br /> J'ai eu le privilège de les accompagner vers leurs
              objectifs : que ce soit pour perdre du poids, sculpter leur corps
              ou améliorer leurs performances physiques.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-12 ">
        <div className="container flex px-40">
          <div className="flex-1 py-12 px-12">
            <h2 className="text-2xl">Mon rapport à l'alimentation </h2>
            <p className="text-lg">
              Ah, l'alimentation ! Un sujet passionnant et complexe. <br />
              Je ne vais pas vous mentir, mon rapport avec la nourriture n'a pas
              toujours été simple. J'ai traversé des périodes difficiles
              marquées par des Troubles du Comportement Alimentaire (TCA).{" "}
              <br />
              Mais, comme on dit, ce qui ne nous tue pas nous rend plus forts !{" "}
              <br />
              J'ai investi énormément de temps et d'énergie pour comprendre et
              gérer ces problèmes, afin de retrouver une alimentation plus
              saine, une santé optimale et des performances sportives au top.
            </p>
          </div>
          <div className="flex-1 py-10 px-12">
            <Image src={about2} alt="" />
          </div>
        </div>
      </div>
      <div className=" py-12 bg-orange-100">
        <div className="container text-center px-64 ">
          <h2 className="text-3xl">Pourquoi ce blog ? </h2>
          <p className="text-lg">
            Vous vous demandez peut-être pourquoi j'ai décidé de créer ce blog.
            La réponse est simple : je veux partager mon expérience et mes
            connaissances pour aider un maximum de personnes à retrouver leur
            santé et mieux manger. Et attention, mieux manger ne veut pas dire
            se priver ! Mon objectif est de vous montrer qu'il est tout à fait
            possible de manger sainement tout en se faisant plaisir.
          </p>
          <p className="text-lg">
            Je suis impatient de commencer cette aventure avec vous et de vous
            aider à atteindre vos objectifs de santé et de bien-être. N'hésitez
            pas à me contacter pour toute question ou simplement pour échanger.
            Ensemble, faisons de votre alimentation une source de plaisir et de
            vitalité !
          </p>

          <p className="text-lg">À bientôt sur le blog</p>
        </div>
      </div>
    </div>
  );
}
