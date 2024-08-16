import Image from "next/image";
import about from "@/public/about/about.jpg";
import about2 from "@/public/about/about2.jpg";
import about3 from "@/public/about/about3.jpg";
import about4 from "@/public/about/about4.jpg";
import about5 from "@/public/about/about5.jpg";
import about6 from "@/public/about/about6.jpg";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="mt-32 text-lg">
      <div className=" bg-orange-100 ">
        <div className="container flex">
          <div className="flex-1 py-36 px-10">
            <h1 className="text-5xl font-medium pb-6">
              Tes coachs préférés pour une perte de poids réussie !
            </h1>
            <p className="text-2xl">
              <span className="font-medium">Élodie</span>, diététicienne et{" "}
              <span className="font-medium">Christophe</span>, Coach sportif.
              Tous deux diplômés, nous unissons nos forces et notre expérience
              pour vous aider à atteindre vos objectifs.
            </p>
            <button className="button w-64 mt-12 text-xl">
              Je veux un coaching
            </button>
          </div>
          <div className="flex-1 py-12 ">
            <Image
              src={about}
              alt=""
              className="rounded-full h-72 w-72 object-cover object-top mt-12 ml-56  border-accent border-2 drop-shadow-xl"
            />
            <Image
              src={about6}
              alt=""
              className="rounded-full h-72 w-72 object-cover object-top ml-24 mt-[-70px] border-accent border-2  drop-shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container">
          <p className="text-xl text-left py-12 px-24">
            <span className="block py-6 font-semibold text-2xl">
              Bienvenue sur notre blog dédié à la perte de poids et au bien-être
              !
            </span>
            Ici, vous découvrirez une multitude de conseils pour atteindre vos
            objectifs de manière saine et durable. Nous partagerons des astuces
            pratiques sur la nutrition et l'alimentation, des idées pour
            intégrer une activité physique adaptée à votre quotidien, ainsi que
            des recommandations pour améliorer votre santé globale. Notre
            objectif est de vous fournir des informations fiables et motivantes
            pour vous accompagner tout au long de votre parcours vers une vie
            plus saine et épanouissante.
          </p>
        </div>
      </div>
      <div className="bg-orange-100 py-24">
        <div className="container flex">
          <div className="flex-1 py-20">
            <Image
              src={about5}
              alt=""
              className="w-96 m-auto shadow-lg border-4 border-background"
            />
          </div>

          <div className="flex-1 p-12 py-28">
            <p className="text-lg  text-black font-normal">
              Je m'appelle Christophe, j'ai 28 ans et je suis éducateur / coach
              sportif diplômé. <br />
              <br />
              Depuis plus de vingt ans, le sport est au cœur de ma vie. À l'âge
              de 7 ans, j'ai commencé l'athlétisme, une passion qui a duré 14
              ans avant que je ne me tourne vers la musculation. <br /> <br />
              Mon parcours professionnel dans le domaine du sport m'a permis de
              travailler avec des centaines de personnes, les aidant à atteindre
              leurs objectifs, qu'il s'agisse de perdre du poids, de sculpter
              leur corps ou d'améliorer leurs performances physiques.
              <br /> <br />
              Je suis spécialisé dans les suivis sportifs personnalisés. Mon
              approche individualisée permet à chacun de mes élèves de
              bénéficier d'un programme sur-mesure, adapté à leurs besoins et à
              leurs objectifs spécifiques.
              <br />
              <br /> Grâce à mon expertise, je vous guiderai pas à pas pour
              optimiser vos séances d'entraînement et maximiser vos résultats.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-12 ">
        <div className="container flex px-24 justify-between">
          <div className="flex-1 py-12 px-12">
            <h2 className="text-2xl ">Mon rapport à l'alimentation </h2>
            <p className="text-lg">
              Ah, l'alimentation ! Un sujet passionnant et complexe. <br />
              <br />
              Je ne vais pas vous mentir, mon rapport avec la nourriture n'a pas
              toujours été simple. J'ai traversé des périodes difficiles
              marquées par des Troubles du Comportement Alimentaire (TCA).{" "}
              <br />
              <br />
              Mais, comme on dit, ce qui ne nous tue pas nous rend plus forts !{" "}
              <br />
              <br />
              J'ai investi énormément de temps et d'énergie pour comprendre et
              gérer ces problèmes, afin de retrouver une alimentation plus
              saine, une santé optimale et des performances sportives au top.
            </p>
          </div>
          <div className="flex-1 py-10 px-0">
            <Image
              src={about3}
              alt=""
              className=" w-96 m-auto border-4 border-orange-100 shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className=" py-24 bg-orange-100">
        <div className="container flex text-center  px-24 ">
          <div className="">
            <Image
              src={about2}
              alt=""
              className=" w-[480px] m-auto border-4 border-background shadow-lg"
            />
          </div>
          <div className="flex-1 text-left pl-24">
            <h2 className="text-3xl text-black ">Pourquoi ce blog ? </h2>
            <p className="text-lg text-black font-normal">
              Vous vous demandez peut-être pourquoi j'ai décidé de créer ce
              blog. La réponse est simple : je veux partager mon expérience et
              mes connaissances pour aider un maximum de personnes à retrouver
              leur santé, mieux manger et se sentir bien dans leur corps. Et
              attention, mieux manger ne veut pas dire se priver ! Mon objectif
              est de vous montrer qu'il est tout à fait possible de manger
              sainement tout en se faisant plaisir.
            </p>
            <p className="text-lg text-black font-normal">
              Je tiens également à vous montrer que pratiquer une activité
              physique régulière est essentiel, mais qu’il n'est pas nécessaire
              d'y consacrer des heures et des heures chaque semaine pour voir
              des résultats. Avec un bon cadre et un plan d'entraînement précis,
              les résultats peuvent être rapides et durables. Je vous aiderai à
              intégrer des séances d'entraînement efficaces et adaptées à votre
              emploi du temps, de manière à ce que l'activité physique devienne
              un plaisir et non une contrainte.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-12 pt-24 container bg-background">
        <p className="px-36 text-center font-normal text-xl">
          Convaincu que la clé d'une transformation réussie réside dans
          l'alliance du sport et de la nutrition, j'ai décidé de faire appel à
          Élodie. Diététicienne diplômée, Élodie vous apportera également son
          expérience et ses conseils pour vous aider à atteindre vos objectifs.
        </p>
      </div>
      <div className="w-[700px] border m-auto border-accent"></div>
      <div className="bg-back py-12 pt-0">
        <div className="container flex">
          <div className="flex-1 py-20">
            <Image
              src={about4}
              alt=""
              className="w-[440px] m-auto border-4 border-orange-100 shadow-lg"
            />
          </div>

          <div className="flex-1 p-12 pl-0 py-24">
            <p className="text-lg  text-black">
              Je m’appelle Élodie, je suis diététicienne-nutritionniste et
              passionnée par mon métier. <br />
              <br />
              J'ai longtemps eu moi-même un rapport compliqué à la nourriture,
              lié à une très mauvaise image corporelle et à des croyances
              alimentaires strictes et erronées, ce qui se manifestait également
              par des troubles du comportement alimentaire. <br /> <br />
              Lorsque j’ai commencé la pratique assez intensive du sport,
              notamment du fitness et de la musculation, dans un but à la fois
              d’esthétique et de performance, j’ai compris à quel point la
              nourriture était à la fois mon allié et mon carburant. Qu’elle
              devait être perçue comme un ami et non un ennemi.
              <br /> <br />
              Je me suis naturellement orientée dans l’étude de la nutrition
              suite à cela. A la fois dans les bouquins et à l’école, où j’ai
              d’ailleurs eu la chance d’avoir un excellent professeur de
              biochimie / physiologie, qui m’a presque tout appris (Mehdi, si
              vous passez par là…)
              <br />
              <br /> Aujourd’hui, c’est à mon tour d’utiliser mes connaissances
              et mes savoirs-faire pour vous accompagner vers vos objectifs.
              Pour vous aider à trouver votre propre équilibre et surtout à
              atteindre l’état de bien-être physique et mental auquel vous
              aspirez !<br />
              <br />
              Un grand sage (mon père) m’a souvent répété “pas d’économie sur la
              santé”, et je crois qu’il a raison. Il n’est jamais trop tard pour
              se prendre en main. <br /> <br />
              Prenez soin de vous ♥️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
