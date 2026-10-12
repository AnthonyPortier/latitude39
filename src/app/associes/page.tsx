import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Les associés",
  description:
    "Les quatre associés de la SCI Latitude 39 — Pauline Renaux, Manon Pénicaud, Michaël Lezzi, Anthony Portier.",
};

type Associate = {
  name: string;
  role: string;
  apport: string;
  photo?: { src: string; alt: string };
  paragraphs: string[];
};

const associates: Associate[] = [
  {
    name: "Pauline Renaux",
    role: "Relation clients et messages",
    apport: "25 % · apport 15 000 €",
    photo: {
      src: "/associes/pauline-renaux.jpg",
      alt: "Portrait de Pauline Renaux",
    },
    paragraphs: [
      "Assistante dentaire en formation (Académie d’Art Dentaire Isabelle Dutelle, Aix-en-Provence), Pauline vit à Gréoux-les-Bains. Son parcours mêle enseignement (professeure des écoles), un an en Nouvelle-Zélande, puis plusieurs années d’accueil et de service en salle.",
      "Elle met au service du projet son sens de l’organisation, de l’écoute et de la relation client : suivi des messages voyageurs, qualité d’accueil à distance et coordination des échanges du quotidien.",
    ],
  },
  {
    name: "Manon Pénicaud",
    role: "Suivi administratif",
    apport: "25 % · apport 15 000 €",
    photo: {
      src: "/associes/manon-penicaud.jpg",
      alt: "Portrait de Manon Pénicaud",
    },
    paragraphs: [
      "Titulaire d’un master Droit et métiers de l’urbanisme et d’une licence professionnelle Métiers de l’immobilier, Manon a exercé comme juriste en urbanisme, puis chargée d’opérations Habitat privé — pilotage de programmes de travaux, plans de financement et coordination d’intervenants.",
      "Depuis 2023, elle assure un appui métier chez Enedis (outils de pilotage, reporting), après une formation Data Analyst. Elle exploite déjà avec Anthony Portier un T2 en location meublée à Vinon-sur-Verdon (référence PriceLabs du scénario A).",
      "Pour la SCI, elle contribue à l’examen urbanistique, au suivi budgétaire des travaux et à la structuration des outils de pilotage de l’activité locative.",
    ],
  },
  {
    name: "Michaël Lezzi",
    role: "Jardin, piscine et cycles",
    apport: "25 % · apport 15 000 €",
    paragraphs: [
      "Professionnel du cycle depuis 2018, Michaël a géré une activité saisonnière de location de vélos à Gréoux-les-Bains (accueil, vente, suivi technique). Il a obtenu le diplôme d’Entrepreneur de petite entreprise du CNAM et pris des responsabilités croissantes au sein de Bachelas Bike Shop.",
      "Dans le projet, il assure en régie l’entretien du jardin, de la piscine et du parc cycles — sans prestataire externe pour le gros entretien — et contribue à la qualité d’accueil liée à l’offre vélo.",
    ],
  },
  {
    name: "Anthony Portier",
    role: "Travaux, ménage et numérique",
    apport: "25 % · apport 15 000 €",
    photo: {
      src: "/associes/anthony-portier.jpg",
      alt: "Portrait d’Anthony Portier",
    },
    paragraphs: [
      "Développeur web full stack, Anthony vit à Vinon-sur-Verdon. Il réalise une part importante des travaux lui-même (maîtrise des coûts chantier, division de la maison principale en deux T3) et porte le site de réservation direct ainsi que l’automatisation et la tarification.",
      "Il exploite déjà avec Manon Pénicaud le T2 de Vinon-sur-Verdon qui sert de référence au business plan (prévision PriceLabs ≈ 18 257 €, occupation 87 %). Un studio supplémentaire sur le même terrain arrive en location meublée non professionnelle, ce qui étend progressivement l’expérience de gestion saisonnière.",
    ],
  },
];

export default function AssociesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Reveal>
        <h1 className="font-display text-4xl text-verdon-900 md:text-5xl">
          Les associés
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-pierre-700">
          SCI Latitude 39 — quatre associés à parts égales (25&nbsp;% chacun),
          apport de 15&nbsp;000&nbsp;€ par personne pour les{" "}
          <strong className="font-semibold text-pierre-800">
            frais de notaire
          </strong>
          . Aucune rémunération en année&nbsp;1.
        </p>
        <p className="mt-3 text-sm text-pierre-600">
          Documents liés :{" "}
          <Link
            href="/business-plan"
            className="text-verdon-800 underline-offset-2 hover:underline"
            translate="no"
          >
            Business plan
          </Link>
          {" · "}
          <Link
            href="/etude-marche"
            className="text-verdon-800 underline-offset-2 hover:underline"
          >
            Étude de marché
          </Link>
          {" · "}
          <Link
            href="/telechargements"
            className="text-verdon-800 underline-offset-2 hover:underline"
          >
            PDF
          </Link>
        </p>
      </Reveal>

      <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {associates.map((person, index) => (
          <Reveal key={person.name} delay={index * 0.04}>
            <article className="grid gap-6 py-10 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
              <div className="sm:pt-1">
                {person.photo ? (
                  <Image
                    src={person.photo.src}
                    alt={person.photo.alt}
                    width={152}
                    height={190}
                    className="h-44 w-36 object-cover object-top"
                    sizes="144px"
                    priority={index === 0}
                  />
                ) : (
                  <div
                    className="flex h-44 w-36 items-end border border-[var(--line)] bg-verdon-100/50 px-3 py-3"
                    aria-hidden
                  >
                    <span className="font-display text-3xl text-verdon-800">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h2 className="font-display text-2xl text-verdon-900 md:text-3xl">
                  {person.name}
                </h2>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-olivier-700">
                  {person.role}
                </p>
                <p className="mt-1 text-sm text-pierre-500">{person.apport}</p>
                {person.paragraphs.map((text) => (
                  <p
                    key={text.slice(0, 48)}
                    className="mt-4 text-[1.02rem] leading-relaxed text-pierre-800"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
