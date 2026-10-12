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
  meta: string;
  photo?: { src: string; alt: string };
  bio: string;
  bullets: string[];
};

const associates: Associate[] = [
  {
    name: "Pauline Renaux",
    role: "Relation clients et messages",
    meta: "25 % · apport 15 000 € · Gréoux-les-Bains",
    photo: {
      src: "/associes/pauline-renaux.jpg",
      alt: "Portrait de Pauline Renaux",
    },
    bio: "Assistante dentaire en formation et en exercice (cabinet à Pierrevert), Pauline a un parcours tourné vers l’accueil, l’écoute et l’organisation : professeure des écoles, séjour d’un an en Nouvelle-Zélande, puis plusieurs années en bar et service en salle.",
    bullets: [
      "Conversations avec les voyageurs lorsque les messages automatisés ne suffisent pas",
      "Accueil de qualité — ton chaleureux et résolution des demandes hors script",
      "Organisation administrative légère (planning, dossiers, relances)",
      "Présence locale à Gréoux-les-Bains, à proximité du domaine",
    ],
  },
  {
    name: "Manon Pénicaud",
    role: "Suivi administratif, urbanisme, pilotage",
    meta: "25 % · apport 15 000 € · Vinon-sur-Verdon",
    photo: {
      src: "/associes/manon-penicaud.jpg",
      alt: "Portrait de Manon Pénicaud",
    },
    bio: "Titulaire d’un master Droit et Métiers de l’urbanisme et d’une licence professionnelle Métiers de l’immobilier, Manon a enchaîné juriste en urbanisme, chargée d’opérations habitat, puis data analyst. Elle co-exploite déjà avec Anthony Portier le T2 de Vinon-sur-Verdon (référence PriceLabs du scénario A).",
    bullets: [
      "Suivi administratif, échéances et échanges avec les intervenants",
      "Examen urbanistique et suivi du programme de travaux",
      "Budgets prévisionnels et tableaux de bord simples",
      "Expérience locative déjà en place (T2 Vinon ≈ 18 257 € / occupation 87 %)",
    ],
  },
  {
    name: "Michaël Lezzi",
    role: "Jardin, piscine, gros entretien · vélos",
    meta: "25 % · apport 15 000 € · Gréoux-les-Bains",
    bio: "Professionnel du cycle depuis 2018, Michaël a géré une activité saisonnière de location de vélos à Gréoux (accueil, vente, suivi technique). Titulaire du diplôme d’Entrepreneur de petite entreprise du Conservatoire national des arts et métiers.",
    bullets: [
      "Entretien courant du jardin, de la piscine et des abords",
      "Gros entretien technique en binôme avec Anthony Portier",
      "Location et maintenance des vélos à assistance électrique en régie",
      "Expérience locale de l’accueil touristique à Gréoux",
    ],
  },
  {
    name: "Anthony Portier",
    role: "Travaux, ménage, présence numérique",
    meta: "25 % · apport 15 000 € · Vinon-sur-Verdon",
    photo: {
      src: "/associes/anthony-portier.jpg",
      alt: "Portrait d’Anthony Portier",
    },
    bio: "Développeur web full stack, Anthony exploite déjà avec succès le T2 de Vinon-sur-Verdon et réalise lui-même une partie importante des travaux. Il apporte à la SCI le savoir-faire chantier, l’expérience locative saisonnière et les compétences numériques.",
    bullets: [
      "Réalisation en propre d’une part significative des travaux (enveloppe 50 000 €)",
      "Exploitation déjà démontrée — référence chiffrée du scénario A",
      "Ménage et interventions courantes (gros entretien avec Michaël Lezzi)",
      "Site vitrine, automatisation et canal de réservation direct",
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
          </strong>{" "}
          (60&nbsp;000&nbsp;€ au total). Aucune rémunération en année&nbsp;1.
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

      <Reveal delay={0.04}>
        <p className="mt-8 max-w-2xl leading-relaxed text-pierre-700">
          L’équipe combine accueil, administration et urbanisme, entretien
          technique / cycle, et exploitation locative / numérique — sans
          sous-traitance lourde sur les postes critiques du quotidien. Deux
          couples d’associés vivent déjà dans le bassin Verdon (Gréoux et
          Vinon).
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
                <p className="mt-1 text-sm text-pierre-500">{person.meta}</p>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-pierre-800">
                  {person.bio}
                </p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.98rem] leading-relaxed text-pierre-700">
                  {person.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
