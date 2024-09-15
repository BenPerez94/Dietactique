"use client";
import CoachingLink from "@/components/CoachingLink";
import { useState } from "react";
import {
  BicepsFlexed,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  Clock4,
  FileSliders,
  Frown,
  Globe,
  HandHeart,
  Handshake,
  HeartPulse,
  Lightbulb,
  NotebookPen,
  PersonStanding,
  Smile,
  Sparkle,
} from "lucide-react";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Coaching() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="lg:mt-32 mt-20">
      <div className="py-12 bg-secondary">
        <div className="container text-center px-18 ">
          <h1 className="sm:text-5xl text-3xl">
            Perdre 5 kg de graisse en un mois tout en continuant à profiter de
            tes repas et sans t’entraîner 7j7 ?
          </h1>
          <p className="xl:px-48 lg:px-24 sm:text-xl text-lg">
            Ça te parait inaccessible ? <br />
            <br />
            Tu as probablement tenté de nombreux régimes, t'interdisant certains
            aliments. Tu t’es inscrit dans une salle de sport, tu as repris une
            activité physique et tu as passé des heures à faire du cardio.{" "}
            <br />
            <br /> Tu n’as jamais obtenu les résultats que tu espérais n’est-ce
            pas ? Tu pensais qu’avec toutes ces nouvelles contraintes tu
            obtiendrais rapidement la silhouette dont tu avais toujours rêvé ?{" "}
            <br />
            <br />
            Permets-moi de t'expliquer pourquoi ces méthodes n'ont pas
            fonctionné et comment nous obtenons de tels résultats avec nos
            élèves. <br /> Sans frustration, sans régime inefficace, sans séance
            de sport insurmontable.
          </p>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12">
        <div className="container text-center sm:px-24">
          <p className="xl:px-48 lg:px-24 text-xl mb-12">
            Depuis que nous sommes dans le monde du coaching et de la nutrition,
            nous avons remarqué que nous rencontrons tous les mêmes difficultés
            et les mêmes contraintes.
          </p>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center py-12 px-6 bg-secondary rounded shadow-lg">
              <Clock4 className="m-auto mb-3" size={42} />
              <h2>Le manque de temps</h2>
              <p>
                Avec une vie de famille et des responsabilités à gérer, il te
                reste peu de temps pour toi. Ton métier, exigeant et épuisant,
                ne te laisse pas toujours l'occasion de préparer tes repas ni de
                manger chez toi. <br />
                <br /> Tu t’es tourné vers des plats tout prêts, pensant qu’ils
                étaient “sains”, mais sans résultat : tu avais faim, étais
                fatigué et n’éprouvais aucun plaisir à manger. <br />
                <br /> En essayant de cuisiner rapidement, tu ne savais pas
                quels aliments choisir. Tu as acheté du matériel de sport pour
                t’entraîner à la maison, mais sans succès. Tu as cherché une
                salle de sport, mais sans savoir par où commencer. <br />
                <br /> Tu fais face à un nouveau problème…
              </p>
            </div>
            <div className="flex-1 text-center py-12 px-6 bg-secondary  rounded shadow-lg">
              <Lightbulb className="m-auto mb-3" size={42} />
              <h2>Le manque d’expérience</h2>
              <p>
                Tu es incertain sur la façon de composer tes repas : faut-il
                privilégier les glucides ou les protéines le soir ? Devrais-tu
                éliminer le sucre et les graisses ? <br />
                Les compléments alimentaires sont-ils nécessaires ? <br />
                <br />
                De même, tu ne sais pas combien de séances de sport faire, ni si
                la musculation ou le cardio est plus efficace pour perdre du
                poids. Ces questions sont normales. <br />
                <br />
                Nous avons acquis ces connaissances grâce à des années d’études
                et de pratique. <br />
                Ce qu'il te faut, c'est une aide experte, adaptée à tes
                objectifs, tes besoins et ton rythme de vie. <br />
                <br />
                Nous sommes là pour t'apporter tout cela et bien plus encore…
              </p>
            </div>
            <div className="flex-1 text-center py-12 px-6 bg-secondary  rounded shadow-lg">
              <BicepsFlexed className="m-auto mb-3" size={42} />
              <h2>Le manque motivation</h2>
              <p>
                Avec tant de questions sans réponse, tu hésites à te lancer,
                craignant de perdre du temps avec une nouvelle solution
                inefficace. <br />
                <br />
                Peut-être t’es-tu déjà dit "j'ai tout essayé, rien ne marche sur
                moi", après avoir fait des sacrifices pendant des semaines sans
                voir de résultats. <br />
                <br />
                Il est normal de perdre ta motivation dans ces conditions. Mais
                tu n'es pas seul dans ce parcours. <br />
                <br />
                Nous serons à tes côtés à chaque étape pour t'aider à trouver
                enfin la méthode qui fonctionne pour toi. <br />
                <br />
                Fini les sacrifices inutiles et la frustration : nous
                t’accompagnerons pour que tu atteignes les résultats que tu
                mérites.
              </p>
            </div>
          </div>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12 bg-secondary">
        <div className="container sm:px-24  text-center">
          <h2 className="text-4xl">
            Imagines un instant à quoi ressemblerait ta vie si…
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 py-10">
            <div className="flex-1 bg-background p-3 pt-6 rounded  shadow-lg">
              <PersonStanding className="m-auto mb-6" size={42} />
              <div className="flex flex-col gap-2">
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu avais le corps dont tu as toujours rêvé
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu avais un ventre plat
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu avais des abdominaux plus dessinés
                </div>
              </div>
            </div>
            <div className="flex-1 bg-background p-3 pt-6 rounded  shadow-lg">
              <Sparkle className="m-auto mb-6" size={42} />
              <div className="flex flex-col gap-2">
                <div className="flex-1 bg-neutral-300 rounded p-3 py-5">
                  Tu pouvais enfin acheter les vêtements que tu souhaites porter
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3 py-5">
                  Tu pouvais manger sans avoir à culpabiliser
                </div>
              </div>
            </div>
            <div className="flex-1 bg-background p-3 pt-6 rounded  shadow-lg">
              <HeartPulse className="m-auto mb-6" size={42} />
              <div className="flex flex-col gap-2">
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu n’étais pas essoufflé après avoir monté quelques escaliers
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu étais plus tonique, plus dynamique
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3">
                  Tu prenais plus soin de ta santé
                </div>
              </div>
            </div>
            <div className="flex-1 bg-background p-3 pt-6 rounded  shadow-lg">
              <HandHeart className="m-auto mb-6" size={42} />
              <div className="flex flex-col gap-2">
                <div className="flex-1 bg-neutral-300 rounded p-3 py-5">
                  Tu étais fier de toi, tu retrouvais confiance en toi
                </div>
                <div className="flex-1 bg-neutral-300 rounded p-3 py-5">
                  Tes proches te faisaient des compliments sur ta transformation
                </div>
              </div>
            </div>
          </div>
          <p className="font-semibold text-black text-xl">
            Si je te disais que grâce à nous, tu pourrais obtenir tout celà ?
          </p>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12">
        <div className="container sm:px-36 text-center">
          <h2 className="text-4xl">
            En quoi notre accompagnement est-il différent ?
          </h2>
          <p className="text-black font-normal text-lg">
            2 experts / 2 domaines complémentaires = 2 plans d’actions = 2 fois
            plus de résultats
          </p>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <CheckCheck
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">1. Une expertise avérée :</h3>
            <p>
              Nous avons des années d'expérience dans le domaine du coaching
              sportif et de la nutrition. Nous sommes des professionnels
              diplômés et expérimentés qui ont déjà suivi et transformé la vie
              de centaines de personnes. Élodie et moi avons consacré des années
              à étudier, pratiquer et affiner nos compétences pour t’offrir un
              service de la plus haute qualité et des résultats garantis.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <NotebookPen
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">2. Un suivi personnalisé :</h3>
            <p>
              Chaque individu est unique, et nous en sommes parfaitement
              conscients. C'est pourquoi notre approche est entièrement
              personnalisée. Nous débuterons par une évaluation complète de ta
              situation actuelle, de tes objectifs, de tes préférences
              alimentaires, de ton niveau d'activité physique et de tes
              contraintes quotidiennes. Sur cette base, nous élaborons un plan
              d'action sur mesure, qui s'adapte à ton rythme de vie et à tes
              besoins spécifiques.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <Handshake
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">3. Sois accompagné et soutenu 7j7</h3>
            <p>
              Nous comprenons que le chemin vers ta transformation peut être
              parsemé de questions et de doutes. C'est pourquoi nous sommes
              disponibles 7 jours sur 7 pour répondre à toutes tes
              interrogations et t’offrir le soutien dont tu as besoin. Que ce
              soit par message, par téléphone ou par email, tu peux compter sur
              nous à tout moment.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <FileSliders
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">
              4. Un suivi régulier et ajustements :
            </h3>
            <p>
              Ton corps et tes besoins évoluent au fil du temps, et notre
              accompagnement aussi. Nous réalisons des bilans réguliers pour
              évaluer tes progrès et ajuster ton programme en conséquence.
              Ainsi, nous nous assurons que tu restes sur la bonne voie et que
              tu continues à progresser efficacement vers tes objectifs.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <Globe className="absolute sm:right-10 right-3 top-5" size={30} />
            <h3 className="border-none">5. Une approche globale :</h3>
            <p>
              Nous ne nous contentons pas de te fournir des plans d'entraînement
              et des conseils diététiques. Nous adoptons une approche holistique
              qui prend en compte ton bien-être global. Cela inclut la gestion
              du stress, l'amélioration de ton sommeil et le développement de ta
              motivation. Nous croyons fermement que la clé d'une transformation
              durable réside dans l'équilibre entre le corps et l'esprit.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <Smile className="absolute sm:right-10 right-3 top-5" size={30} />
            <h3 className="border-none">6. Une approche sans frustration :</h3>
            <p>
              Nous savons que les régimes restrictifs et les séances de sport
              interminables ne mènent qu'à la frustration et à l'abandon. C'est
              pourquoi notre approche est axée sur le plaisir et la durabilité.
              Tu apprendras à apprécier tes repas, à intégrer des activités
              physiques plaisantes et à adopter un mode de vie sain sans
              sacrifices insurmontables.
            </p>
          </div>
          <p className="sm:text-3xl text-2xl pt-12 font-semibold text-black lg:px-12">
            En choisissant notre accompagnement, tu fais le choix de la qualité,
            de la bienveillance et de l'écoute. Tu ne seras jamais seul dans ta
            démarche, et nous serons là pour te guider, te motiver et célébrer
            chaque étape de ta transformation.
          </p>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12 bg-secondary">
        <div className="container lg:px-24 text-center">
          <h2 className="text-4xl">Foire aux questions (FAQ)</h2>
          <div className="lg:px-24 transition-all duration-500">
            <div
              className="flex justify-between bg-neutral-200 shadow-sm border border-gray-300 p-2 rounded cursor-pointer mt-3"
              onClick={() => toggleQuestion("question1")}
            >
              <h3 className="mb-0 border-none">
                Combien de temps faut-il pour voir des résultats ?
              </h3>
              {openQuestion === "question1" ? (
                <ChevronUp size={28} />
              ) : (
                <ChevronDown size={28} />
              )}
            </div>
            {openQuestion === "question1" && (
              <div className="mb-4">
                <p className="text-left bg-background p-4 px-6 m-2 shadow-lg border italic mt-0">
                  Les résultats varient d'une personne à l'autre en fonction de
                  nombreux facteurs, notamment ton engagement, ton alimentation,
                  ton niveau d'activité physique et ton métabolisme. Cependant,
                  nos clients commencent généralement à voir des changements
                  positifs dès les premières semaines de suivi.
                </p>
              </div>
            )}

            <div
              className="flex justify-between bg-neutral-200 shadow-sm border border-gray-300 p-2 rounded cursor-pointer mt-3"
              onClick={() => toggleQuestion("question2")}
            >
              <h3 className="mb-0 border-none">
                Comment se déroule le suivi personnalisé ?
              </h3>
              {openQuestion === "question2" ? (
                <ChevronUp size={28} />
              ) : (
                <ChevronDown size={28} />
              )}
            </div>
            {openQuestion === "question2" && (
              <div className="mb-4">
                <p className="text-left bg-background p-4 px-6 m-2 shadow-lg border italic mt-0">
                  Le suivi personnalisé commence par un bilan complet de ta
                  situation actuelle. Ensuite, nous établirons un plan d'action
                  sur mesure. Nous échangerons régulièrement pour évaluer tes
                  progrès, ajuster ton programme et répondre à toutes tes
                  questions. Je serais disponible disponible 7j/7 pour te
                  soutenir.
                </p>
              </div>
            )}

            <div
              className="flex justify-between bg-neutral-200 shadow-sm border border-gray-300 p-2 rounded cursor-pointer mt-3"
              onClick={() => toggleQuestion("question3")}
            >
              <h3 className="mb-0 border-none">
                Est-ce que le programme est adapté à tous ?
              </h3>
              {openQuestion === "question3" ? (
                <ChevronUp size={28} />
              ) : (
                <ChevronDown size={28} />
              )}
            </div>
            {openQuestion === "question3" && (
              <div className="mb-4">
                <p className="text-left bg-background p-4 px-6 m-2 shadow-lg border italic mt-0">
                  Oui ! Je prends en compte de nombreux critères pour
                  personnaliser ton suivi : <br /> <br />
                  <span className="font-semibold">- Tes objectifs :</span>{" "}
                  <br /> ils seront le fondement de notre coaching, notre ligne
                  directrice. <br />
                  <span className="font-semibold">
                    - Ton quotidien et ton temps: <br />
                  </span>
                  ton rythme de vie, tes horaires de sommeil, de travail, tes
                  activités. Que tu sois parent, étudiant, salarié ou chef
                  d’entreprise… <br />
                  <span className="font-semibold">- Tes contraintes :</span>
                  <br /> pathologies, antécédents médicaux, responsabilités
                  personnelles et/ou professionnelles. <br />
                  <span className="font-semibold">- Ton physique actuel :</span>
                  <br /> nous déterminerons les points à travailler pour un
                  physique esthétique et en bonne santé <br />
                  <span className="font-semibold">- Ton expérience :</span>
                  <br /> Que tu sois débutant dans le monde du sport ou un
                  athlète chevronné, je m'adapterai à ton niveau et ton
                  expérience.
                </p>
              </div>
            )}

            <div
              className="flex justify-between bg-neutral-200 shadow-sm border border-gray-300 p-2 rounded cursor-pointer mt-3"
              onClick={() => toggleQuestion("question4")}
            >
              <h3 className="mb-0 border-none">
                Ai-je besoin d'équipement spécifique pour les séances de sport ?
              </h3>
              {openQuestion === "question4" ? (
                <ChevronUp size={28} />
              ) : (
                <ChevronDown size={28} />
              )}
            </div>
            {openQuestion === "question4" && (
              <div className="mb-4">
                <p className="text-left bg-background p-4 px-6 m-2 shadow-lg border italic mt-0">
                  Que tu disposes de matériel ou non, que tu souhaites
                  t’entraîner en salle de sport ou non, j’adapterai ton plan
                  d'entraînement pour obtenir les meilleurs résultats.
                </p>
              </div>
            )}

            <div
              className="flex justify-between bg-neutral-200 shadow-sm border border-gray-300 p-2 rounded cursor-pointer mt-3"
              onClick={() => toggleQuestion("question5")}
            >
              <h3 className="mb-0 border-none">Comment puis-je commencer ?</h3>
              {openQuestion === "question5" ? (
                <ChevronUp size={28} />
              ) : (
                <ChevronDown size={28} />
              )}
            </div>
            {openQuestion === "question5" && (
              <div className="mb-4">
                <p className="text-left bg-background p-4 px-6 m-2 shadow-lg border italic mt-0">
                  Pour te lancer, il te suffit de remplir{" "}
                  <Link
                    href="https://docs.google.com/forms/d/1Nc_GuoEwp0WTiwRc8Vnvu26VUhTQM1SwBZ58TE-d9PE/viewform?edit_requested=true"
                    className="font-bold"
                  >
                    ce questionnaire
                  </Link>{" "}
                  pour bénéficier d’un bilan offert avec moi. Cela me permettra
                  de mieux comprendre tes besoins et de définir ensemble le plan
                  d'action le plus adapté pour toi.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container text-center lg:px-64">
          <h2 className="text-4xl mb-12">Tu as maintenant 2 options :</h2>
          <div className="p-3 px-12 bg-secondary mb-6  shadow-lg rounded">
            <h3 className="border-none font-bold">Option 1</h3>
            <p className="text-black font-normal">
              Persévérer dans les mêmes habitudes en espérant des résultats
              différents. <br /> Te priver encore et encore de manger pour
              finalement craquer et tout abandonner. Osciller constamment entre
              perte et reprise de poids.
            </p>
            <Frown className="m-auto" size={42} />
          </div>
          <div className="p-3 px-12 bg-secondary  shadow-lg rounded">
            <h3 className="border-none font-bold">Option 2</h3>
            <p className="text-black font-normal">
              Commencer une vraie transformation. 
              <br />
              Atteindre tes objectifs. <br />
              Obtenir un ventre plus plat et une silhouette plus dessinée.{" "}
              <br />
              Retrouver confiance en toi. <br />
              Ne plus jamais avoir honte de ton corps. <br />
              Te sentir en pleine forme et améliorer ta santé.{" "}
            </p>
            <Smile className="m-auto" size={42} />
          </div>
        </div>
        <Link href="" className="button w-80 m-auto mt-12 shadow-lg">
          Je souhaite commencer ma transformation
        </Link>
      </div>
    </div>
  );
}
