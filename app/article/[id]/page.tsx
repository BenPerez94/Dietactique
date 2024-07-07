/* eslint-disable react/no-unescaped-entities */
import { getArticleById, getArticlesByCategoryId } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import test from "@/public/test.jpg";
import insta from "@/public/network/insta.png";
import facebook from "@/public/network/facebook.png";
import linkedin from "@/public/network/linkedin.png";
import youtube from "@/public/network/youtube.png";
import Link from "next/link";
import Aside from "@/components/aside";
import { Category, Article } from "@/types/type";
interface PageParams {
  params: {
    id: string;
  };
}

export default async function ArticlePage({ params }: PageParams) {
  const { id } = params;
  const article: Article | null = await getArticleById(String(id));

  if (!article) {
    notFound();
  }

  const category = article?.category?.id || "";
  const articleCategory: Article[] = await getArticlesByCategoryId(category);

  return (
    <>
      <Image
        src={test}
        alt="image de l'article"
        className="h-96 w-full mt-32 object-cover"
      />
      <div className="flex lg:flex-row flex-col container ">
        <div className="lg:flex-1 p-6 lg:pt-12">
          <h2 className="text-4xl mt-[-140px] bg-background text-center p-6 pt-12 px-12 mb-6 shadow-lg border rounded-lg ">
            {article.title}
            <span className="block text-accent pt-2 text-lg">
              {article.category.name}
            </span>
          </h2>
          <div className="px-6">
            <p>
              Perdre du poids est un objectif que de nombreuses femmes
              recherchent. Que ce soit pour améliorer sa santé, être plus
              athlétique ou obtenir un ventre plat, il n'est pas toujours facile
              de savoir par où commencer. Je vais vous présenter des méthodes et
              astuces pour atteindre vos objectifs et maintenir ces résultats
              sur le long terme. Alimentation, exercice physique, hygiène de
              vie... différentes stratégies doivent être combinées pour vous
              aider à atteindre une transformation rapide et efficace !
            </p>
            <h2>Comprendre la balance énergétique : le déficit calorique</h2>
            <h3>Qu'est-ce que la balance énergétique ?</h3>
            <p>
              La balance énergétique est le rapport entre les calories
              consommées par l'alimentation et les calories dépensées par
              l'organisme. Pour perdre du poids, il est essentiel d'être en
              déficit calorique, c'est-à-dire consommer moins de calories que ce
              que le corps dépense.
            </p>
            <h3>Comment créer un déficit calorique ?</h3>
            <p>
              Créer un déficit calorique peut être réalisé en combinant une
              alimentation saine et une activité physique régulière. Voici
              quelques conseils :
            </p>
            <ul>
              <li>
                Choisir des aliments faibles en calories mais riches en
                nutriments : Privilégiez les légumes, les fruits, et les
                protéines maigres.
              </li>
              <li>
                Augmenter l'activité physique : Faites plus d'exercice pour
                brûler davantage de calories.
              </li>
              <li>
                Réduire les portions : Mangez en quantité modérée pour éviter un
                apport calorique excessif.{" "}
              </li>
            </ul>
            <p>L'importance de suivre ses apports et dépenses caloriques :</p>
            <p>
              Utiliser des applications de suivi nutritionnel peut vous aider à
              garder un œil sur vos apports et vos dépenses caloriques. Cela
              permet d'ajuster votre alimentation et votre niveau d'activité
              pour rester en déficit calorique. (affiliation MYfitnesspal)
            </p>
            <h2>L'importance d'une alimentation équilibrée</h2>
            <p>
              Eh oui, pas de remède miracle ! Le plus important se trouve dans
              votre assiette ! Pour perdre du poids efficacement, il est
              essentiel d'adopter une alimentation équilibrée. Cela implique de
              consommer des aliments riches en nutriments tout en limitant ceux
              qui sont caloriques mais pauvres en nutriments. En complément de
              ce que nous avons vu précédemment, voici quelques principes à
              suivre :
            </p>
            <ul>
              <li>
                Consommez des protéines maigres : Les protéines aident à la
                construction musculaire et à la satiété. Privilégiez les sources
                comme le poulet, le poisson, les œufs, et les légumineuses.
              </li>
              <li>
                Mangez des légumes et des fruits en abondance : Riches en
                fibres, vitamines, et minéraux, ils contribuent à la sensation
                de satiété et améliorent la digestion.
              </li>
              <li>
                Optez pour des glucides complexes : Les céréales complètes, les
                légumes racines et les légumineuses fournissent de l'énergie
                durable et évitent les pics d'insuline.
              </li>
              <li>
                Limitez les sucres ajoutés et les graisses saturées : Ces
                éléments sont souvent responsables de la prise de poids et de la
                mauvaise santé générale.
              </li>
            </ul>
            <p>
              Hydratation : un allié sous-estimé
              <br />
              <br />
              Au-delà de son importance pour notre santé, l'eau joue un rôle
              crucial dans le processus de perte de poids. Elle aide à éliminer
              les toxines et améliore le métabolisme. Essayez de boire au moins
              1,5 à 2 litres d'eau par jour. En complément, les tisanes et les
              infusions peuvent également être bénéfiques.
            </p>
            <h2>L'importance de l'activité physique</h2>
            <p>
              L'exercice cardiovasculaire pour brûler les graisses <br />
              <br />
              Pour perdre ses kilos en trop et rester mince, l'activité physique
              régulière est indispensable. Elle permet de brûler des calories et
              d'améliorer la santé cardiovasculaire. Voici quelques activités
              recommandées :
            </p>
            <ul>
              <li>
                La marche rapide : Facile à intégrer dans votre quotidien, elle
                aide à brûler les graisses sans être trop intense.
              </li>
              <li>
                Le jogging ou la course : Ces activités sont excellentes pour
                brûler beaucoup de calories en peu de temps.
              </li>
              <li>
                Le vélo : Il sollicite les muscles des jambes et améliore
                l'endurance.
              </li>
            </ul>
            <p>
              Si vous n’aimez pas le sport ou si vous manquez de temps, cherchez
              à augmenter vos dépenses quotidiennes en intégrant plus
              d'activités simples à votre routine. Marchez davantage, allez au
              travail à pied ou en vélo, choisissez les escaliers plutôt que
              l'ascenseur…
            </p>
            <p>
              La musculation pour tonifier le corps <br />
              <br />
              En complément du “cardio”, la musculation est essentielle pour
              tonifier le corps et augmenter le métabolisme de base. En
              développant vos muscles, vous brûlez plus de calories même au
              repos. Quelques exercices recommandés :
            </p>
            <ul>
              <li>
                Les squats : Ils renforcent les cuisses, les fessiers et
                engagent vos abdominaux.
              </li>
              <li>
                Les fentes : Elles sollicitent les jambes et les fessiers.
              </li>
              <li>
                Les pompes : Elles renforcent le haut du corps, les pectoraux,
                les épaules et les triceps.
              </li>
            </ul>
            <p>
              Ces exercices sont faciles à mettre en place et ne nécessitent
              aucun matériel. Vous pouvez les réaliser chez vous, à tout moment
              de la journée.
            </p>

            <h2>Le rôle du sommeil</h2>
            <p>
              Un bon sommeil est crucial pour la perte de poids. Le manque de
              sommeil peut entraîner une augmentation de l'appétit et une prise
              de poids. Essayez de dormir au moins 7 à 8 heures par nuit.
            </p>
            <h2>Questions fréquentes</h2>
            <p>
              Quelle est la meilleure façon de commencer une perte de poids ?{" "}
              <br />
              <br />
              Pour commencer une perte de poids, il est crucial d'établir un
              plan réaliste et de se fixer des objectifs clairs. Commencez par :
            </p>

            <ol>
              <li>
                Évaluer votre alimentation actuelle : Notez ce que vous mangez
                pendant une semaine pour identifier les habitudes à changer.
              </li>
              <li>
                Fixer des objectifs réalisables : Par exemple, perdre 0,5 à 1 kg
                par semaine.
              </li>
              <li>
                Intégrer progressivement l'exercice : Commencez par des
                activités modérées et augmentez progressivement l'intensité.
              </li>
            </ol>
            <h3>Puis-je perdre du poids sans faire de sport ?</h3>
            <p>
              Oui ! Il est possible de perdre du poids sans faire de sport,
              principalement en ajustant votre alimentation. Cependant,
              l'exercice physique offre de nombreux bénéfices supplémentaires,
              comme la tonification musculaire, l'amélioration de la santé
              cardiovasculaire, et une meilleure humeur grâce à la libération
              d'endorphines.
            </p>
            <h3>Quels sont les pièges à éviter lors d'un régime ?</h3>
            <ul>
              <li>
                Les régimes restrictifs : Ils peuvent entraîner des carences et
                un effet yo-yo.
              </li>
              <li>
                Sauter des repas : Cela peut ralentir votre métabolisme et
                augmenter les fringales (et donc les crises où l’on se jette sur
                la nourriture).
              </li>
              <li>
                Les boissons sucrées : Elles apportent des calories vides sans
                nutriments.
              </li>
            </ul>
            <h3>Combien de temps faut-il pour voir des résultats ?</h3>
            <p>
              Les résultats peuvent varier d'une personne à l'autre, mais en
              général, vous pouvez commencer à voir des changements visibles en
              4 à 6 semaines avec une alimentation équilibrée et un programme
              d'exercice régulier.
            </p>
            <h3>Les compléments alimentaires sont-ils efficaces ?</h3>
            <p>
              Certains compléments peuvent aider, mais ils ne doivent pas
              remplacer une alimentation équilibrée et de l'exercice. Consultez
              toujours un professionnel avant de prendre des compléments
              alimentaires.
            </p>
            <h2>Conclusion</h2>
            <p>
              Perdre du gras et affiner son ventre est un objectif réalisable en
              combinant une alimentation équilibrée, une activité physique
              régulière, et des habitudes de vie saines. Il est important de
              rester patient et de se fixer des objectifs réalistes. En suivant
              les conseils et les astuces présentés dans cet article, vous serez
              sur la bonne voie pour atteindre vos objectifs. N'oubliez pas que
              chaque petit pas compte et que la persévérance est la clé du
              succès.
            </p>
            <p>
              Pour aller plus loin dans cette perte de poids, un suivi avec un
              professionnel peut vous aider à atteindre vos objectifs plus
              efficacement. N'hésitez pas à prendre contact directement sur
              notre site pour bénéficier d'un accompagnement personnalisé.
            </p>
            <p>
              Bonne chance dans votre parcours vers une meilleure santé et une
              silhouette plus affinée !
            </p>
          </div>
          {/* RESEAUX */}

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
          <div className="mt-12">
            <h3 className="text-xl">Autres articles de la catégorie</h3>
            <div className="flex flex-col lg:flex-row gap-6">
              {articleCategory.slice(0, 3).map((articleSame) => (
                <div
                  key={articleSame.id}
                  className="flex flex-col border p-4 mt-16 rounded-md lg:w-[250px]  shadow-lg shadow-gray-200/100"
                >
                  <Image
                    src={test}
                    alt=""
                    className="h-40 w-full object-cover rounded-md mt-[-55px] bordered  shadow-md shadow-gray-300/100"
                  />
                  <h2>{articleSame.title}</h2>
                  <p className="min-h-24">
                    {articleSame.contents[0].text.substring(0, 150)} ...
                  </p>
                  <Link
                    href={`${articleSame.id}`}
                    className="button mt-3 ml-auto"
                  >
                    Lire l'article
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDE SECTION */}

        <Aside />
      </div>
    </>
  );
}
