import Link from "next/link";

export default function CoachingLink() {
  return (
    <div className="mt-12">
      <p className="text-orange-500 font-bold">
        Remplis ce questionnaire pour un bilan offert avec nous pour établir ton
        plan d’action personnalisé.
      </p>
      <Link href="" className="button m-auto w-52">
        Acceder au questionnaire
      </Link>
    </div>
  );
}
