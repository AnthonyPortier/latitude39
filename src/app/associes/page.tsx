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
    bio: "Assistante dentaire en exercice (cabinet à Pierrevert), Pauline a développé un savoir-faire solide en accueil, écoute et organisation (enseignement, restauration, cabinet médical). Elle met ces compétences relationnelles au service de la relation clients de la SCI.",
    bullets: [
      "Échanges avec les voyageurs lorsque les messages automatisés ne suffisent pas",
      "Accueil de qualité — ton chaleureux, résolution des demandes hors script",
      "Organisation légère (planning, dossiers, relances) autour de la boîte à clé",
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
    bio: "Formation en droit de l’urbanisme et métiers de l’immobilier, Manon a exercé en urbanisme, opérations habitat et pilotage de données. Elle co-exploite déjà avec Anthony Portier un T2 en location meublée à Vinon-sur-Verdon, référence chiffrée du business plan.",
    bullets: [
      "Suivi administratif, échéances et échanges avec les intervenants",
      "Urbanisme et suivi du programme de travaux (menuiseries, clim, division T3)",
      "Budgets prévisionnels et tableaux de bord simples",
      "Expérience locative déjà en place (T2 Vinon ≈ 18 257 € / occupation 87 %)",
    ],
  },
  {
    name: "Michaël Lezzi",
    role: "Jardin, piscine, gros entretien, location et maintenance des vélos",
    meta: "25 % · apport 15 000 € · Gréoux-les-Bains",
    photo: {
      src: "/associes/michael-lezzi.jpg",
      alt: "Portrait de Michaël Lezzi",
    },
    bio: "Professionnel du cycle, Michaël a géré une activité saisonnière de location de vélos à Gréoux (accueil, vente, suivi technique). Il apporte à la SCI l’entretien du domaine et la maintenance de la flotte de vélos à assistance électrique, sans prestataire externe.",
    bullets: [
      "Entretien courant du jardin, de la piscine et des abords",
      "Gros entretien technique en binôme avec Anthony Portier",
      "Location et maintenance des vélos à assistance électrique en régie",
      "Expérience locale de l’accueil touristique à Gréoux",
    ],
  },
  {
    name: "Anthony Portier",
    role: "Travaux, ménage, présence numérique, expérience locative déjà prouvée",
    meta: "25 % · apport 15 000 € · Vinon-sur-Verdon",
    photo: {
      src: "/associes/anthony-portier.jpg",
      alt: "Portrait d’Anthony Portier",
    },
    bio: "Développeur web full stack, Anthony exploite déjà avec succès un T2 à Vinon. Sur le domaine, il assure le suivi de chantier et une part des travaux en régie — hors menuiseries et climatisation, confiées à des entreprises. Il prépare un CAP électricien (diplôme prévu juin 2027).",
    bullets: [
      "Suivi de chantier et travaux en régie (menuiseries et clim = entreprises externes)",
      "CAP électricien en cours — diplôme prévu juin 2027",
      "Exploitation déjà démontrée — socle du scénario A*",
      "Studio complémentaire bientôt en location meublée non professionnelle",
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
          SCI Latitude 39 —{" "}
          <strong className="font-semibold text-pierre-800">
            création en cours
          </strong>{" "}
          chez{" "}
          <strong className="font-semibold text-pierre-800">
            Maître Lelouard
          </strong>
          , notaire de l’équipe. Quatre associés à parts égales (25&nbsp;%
          chacun), apport de 15&nbsp;000&nbsp;€ par personne pour les{" "}
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
        <div className="jalons-resume mt-8 max-w-2xl">
          <p>
            <strong>Jalons du projet (état au dossier) :</strong> offre d’achat
            et compromis de vente — <strong>faits</strong> · création SCI
            (Maître Lelouard) — <strong>en cours</strong> · financement —{" "}
            <strong>en recherche</strong> · acte authentique, travaux et mise en
            exploitation — <strong>à venir</strong>.
          </p>
          <p>
            Détail et frise visuelle : voir le{" "}
            <Link
              href="/business-plan"
              className="text-verdon-800 underline-offset-2 hover:underline"
              translate="no"
            >
              business plan
            </Link>
            , section « Jalons du projet et conditions suspensives ».
          </p>
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-pierre-700">
          Les quatre associés sont amis depuis plusieurs années : ils se sont
          rencontrés en voyage et ont toujours voulu créer une entreprise
          ensemble. L’équipe combine accueil, administration et urbanisme,
          entretien technique / cycle, et exploitation locative / numérique —
          sans sous-traitance lourde sur les postes critiques du quotidien. Deux
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
                  <div className="relative aspect-[3/4] w-36 overflow-hidden bg-verdon-100/40">
                    <Image
                      src={person.photo.src}
                      alt={person.photo.alt}
                      fill
                      className="object-cover object-[center_18%]"
                      sizes="144px"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-[3/4] w-36 items-end border border-[var(--line)] bg-verdon-100/50 px-3 py-3"
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

      <Reveal delay={0.08}>
        <p className="mt-8 text-sm leading-relaxed text-pierre-500">
          <sup>*</sup> Scénario A : exploitation en meublé de courte durée des 7
          lots de Gréoux (ouverture 12 mois, séjour d’une nuit, tarification
          dynamique), avec un chiffre d’affaires cible d’environ 133&nbsp;000&nbsp;€ —
          voir business plan banque.
        </p>
      </Reveal>
    </div>
  );
}
