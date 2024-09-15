"use client";
import CoachingLink from "@/components/CoachingLink";
import { useState } from "react";
import {
  BicepsFlexed,
  CheckCheck,
  ChevronDown,
  ChevronsRight,
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
  SquareArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import coaching1 from "@/public/coaching1.jpg";
import coaching2 from "@/public/coaching2.jpg";

/* eslint-disable react/no-unescaped-entities */
export default function CoachingTransfo() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="lg:mt-32 mt-20">
      <div className="py-12 bg-secondary">
        <div className="container text-center px-18 ">
          <h1 className="sm:text-5xl text-3xl">
            Transformes toi en 12 semaines avec un suivi sportif personnalisé.
          </h1>
          <p className="xl:px-48 lg:px-24 sm:text-xl text-lg">
            Imagine-toi avec un corps plus mince, plus athlétique, plus
            performant.
            <br /> Que tu souhaites perdre du poids, gagner en masse musculaire
            ou améliorer tes performances physiques, je vais t’accompagner et
            t’apporter les solutions adaptées afin que tu atteignes tes
            objectifs.
          </p>
          <h2 className="text-4xl">
            Rejoins un programme de coaching qui place l'humain au cœur de ta
            transformation physique
          </h2>
          <p className="xl:px-48 lg:px-24 sm:text-xl text-lg">
            As-tu du mal à atteindre tes objectifs malgré tes efforts ?
            Souhaites-tu un accompagnement sur mesure pour une transformation
            physique réussie ? Je suis là pour t'aider.
            <br />
            <br />  Mon programme de coaching sportif est conçu pour
            t'accompagner main dans la main tout au long de ta transformation.
            Ensemble, nous allons élaborer des séances d'entraînement adaptées à
            tes besoins, tes capacités, tes contraintes, tout en te motivant à
            chaque étape de ce parcours.
          </p>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12">
        <div className="container sm:px-36 text-center">
          <h2 className="text-4xl">
            En quoi notre accompagnement est-il différent ?
          </h2>

          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <CheckCheck
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">Bienveillance :</h3>
            <p>
              Chaque personne est unique et la communication sera la pierre
              angulaire de notre collaboration.  Je prendrai le temps
              d’apprendre à te connaître, de comprendre tes besoins, tes
              motivations et tes défis. Ton bien-être sera ma priorité.  Le
              programme d’entraînement sera unique : adapté à toi, tes
              objectifs, tes besoins, ton mode de vie.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <NotebookPen
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">Expérience et professionnalisme :</h3>
            <p>
              J’ai consacré des années à étudier, pratiquer et affiner mes
              compétences pour t’offrir un service de la plus haute qualité et
              des résultats garantis. Fort de plusieurs années dans le milieu du
              sport et du coaching, j’ai accompagné et transformé la vie de
              centaines de personnes. Aujourd’hui elles se sentent mieux dans
              leur peau, ont plus confiance en elles et sont en meilleure santé.
            </p>
          </div>
          <div className="relative bg-zinc-200 pt-5 pb-2 px-6 rounded shadow-lg mb-6">
            <Handshake
              className="absolute sm:right-10 right-3 top-5"
              size={30}
            />
            <h3 className="border-none">Disponibilité :</h3>
            <p>
              Sois accompagné et soutenu 7j7. Le chemin vers ta transformation
              peut être parsemé de questions et de doutes. C'est pourquoi je
              serais disponible 7 jours sur 7 pour répondre à toutes tes
              interrogations et t’offrir le soutien dont tu as besoin. Que ce
              soit par message, par téléphone ou par email, tu peux compter sur
              moi à tout moment. Je serais à tes côtés pour célébrer chaque
              victoire.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-secondary">
        <div className="container text-center lg:px-64">
          <h2 className="text-4xl mb-12">Témoignage</h2>
          <div className="flex justify-center gap-12 pb-6">
            <div>
              <Image
                src={coaching1}
                alt=""
                className="object-cover w-64 h-[500px] shadow-lg border"
              />
              <p className="pb-0 text-black text-xl font-semibold pt-2 m-0">
                Avant
              </p>
            </div>
            <div className="my-auto">
              <ChevronsRight size={62} />
            </div>
            <div>
              <Image
                src={coaching2}
                alt=""
                className="object-cover w-64 h-[500px] shadow-lg border"
              />
              <p className="pb-0 text-black text-xl font-semibold pt-2 m-0">
                Après
              </p>
            </div>
          </div>
          <p className="italic">
            "Avant de rencontrer Christophe, j'étais complètement perdue. Mon
            alimentation était un véritable chaos, et je n'avais aucune idée de
            comment structurer mes entraînements. J'avais des troubles du
            comportement alimentaire qui me faisaient passer d'un extrême à
            l'autre, et je n'arrivais jamais à trouver la motivation pour
            m'entraîner régulièrement. Mais tout a changé quand j'ai commencé à
            travailler avec Christophe. Grâce à son soutien et à ses conseils,
            j'ai appris à écouter mon corps, à manger de manière équilibrée, et
            à organiser des séances d'entraînement adaptées à mes besoins.
            Aujourd'hui, je me sens plus forte, plus en forme et surtout, en
            paix avec moi-même. Je ne pourrais jamais assez remercier Christophe
            pour m'avoir aidée à reprendre le contrôle de ma vie."
          </p>
          <CoachingLink />
        </div>
      </div>
      <div className="py-12 ">
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
                  tu pourras voir des changements positifs dès les premières
                  semaines de suivi.
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
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container text-center lg:px-64">
          <h2 className="text-4xl mb-12">Comment puis-je commencer ?</h2>
          <p className="text-black font-normal">
            Pour te lancer, il te suffit de remplir{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2uJceDDOkOhNdBYIkYFQb87Hf2zDsk0chLE81jPzTSOeQJg/viewform?usp=sf_link"
              className="font-bold"
            >
              ce questionnaire
            </Link>{" "}
            pour bénéficier d’un bilan offert avec moi. Cela me permettra de
            mieux comprendre tes besoins et de définir ensemble le plan d'action
            le plus adapté pour toi.
          </p>
        </div>
        <Link href="" className="button w-80 m-auto mt-12 shadow-lg">
          Je souhaite commencer ma transformation
        </Link>
      </div>
    </div>
  );
}
