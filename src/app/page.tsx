import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ChapterIntro } from "@/components/FullBleedPhoto";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    label: "Emprunt demandé",
    value: "650 000 €",
    hint: "Achat + travaux · 20 ans",
  },
  {
    label: "Apports associés",
    value: "60 000 €",
    hint: "Frais de notaire uniquement",
  },
  {
    label: "Cible CA scénario A",
    value: "133 000 €",
    hint: "7 logements · saisonnier",
  },
  {
    label: "Lots",
    value: "7",
    hint: "5 × T2 + 2 × T3",
  },
];

const sections = [
  {
    href: "/business-plan",
    title: "Business plan",
    noTranslate: true,
    text: "Bien, organisation, scénarios A / A.1 / A.2 / B, calendrier.",
  },
  {
    href: "/etude-marche",
    title: "Étude de marché",
    noTranslate: false,
    text: "Saisonnalité, AirDNA, Vinon, scénarios A–B (A.2 → B).",
  },
  {
    href: "/appartements",
    title: "Fiche appartements",
    noTranslate: false,
    text: "7 logements — 5 T2 et 2 T3, photos et équipements.",
  },
  {
    href: "/associes",
    title: "Les associés",
    noTranslate: false,
    text: "Pauline · Manon · Michaël · Anthony — rôles et parcours.",
  },
  {
    href: "/telechargements",
    title: "Téléchargements PDF",
    noTranslate: false,
    text: "Business plan, études, fiche appartements et associés.",
  },
];

const domaineGallery = [
  {
    src: "/photos/domaine-piscine.webp",
    alt: "Piscine et jardin du domaine",
    caption: "Piscine et parc arboré — cœur de l’offre saisonnière.",
  },
  {
    src: "/photos/domaine-jardin.webp",
    alt: "Jardin et terrasse avec roses",
    caption: "Jardin et terrasse — roses, ombre et vie extérieure.",
  },
  {
    src: "/photos/domaine-chalet.webp",
    alt: "Terrasse du chalet en bois",
    caption: "Chalet et terrasse bois — un des lots du domaine.",
  },
];

const ambianceGallery = [
  {
    src: "/photos/ambiance-fenetre.webp",
    alt: "Vue depuis une fenêtre du domaine vers le château de Gréoux",
    caption: "Vue depuis l’intérieur — jardin, pétanque et château de Gréoux.",
  },
  {
    src: "/photos/ambiance-cheminee.webp",
    alt: "Salon avec cheminée et mezzanine",
    caption: "Pièce de vie — cheminée en pierre, poutres et mezzanine.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ChapterIntro
        title="Le domaine"
        text="Piscine, jardin et chalet — le cadre du mas à Gréoux-les-Bains, entre pierre et lumière du Verdon."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 md:px-12 lg:px-16">
        <PhotoGallery images={domaineGallery} aspect="landscape" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-verdon-900">
            Synthèse du dossier
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pierre-700">
            Chiffres clés issus du{" "}
            <span translate="no">Business plan</span> — pour la lecture
            complète, ouvrir les pages documents.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 border-t border-[var(--line)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <p className="text-xs uppercase tracking-[0.16em] text-pierre-500">
                {item.label}
              </p>
              <p className="mt-3 font-display text-3xl tracking-tight text-verdon-800 md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-pierre-600">{item.hint}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ChapterIntro
        title="Ambiance"
        text="Vue sur Gréoux — volumes, cheminée et lumière naturelle."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 md:px-12 lg:px-16">
        <PhotoGallery images={ambianceGallery} aspect="portrait" />
      </section>

      <section className="border-t border-[var(--line)] bg-[#eef2ef]/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-verdon-900">
              Documents du dossier
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {sections.map((section, index) => (
              <Reveal key={section.href} delay={index * 0.05}>
                <Link
                  href={section.href}
                  className="group flex flex-col gap-2 py-7 transition md:flex-row md:items-baseline md:justify-between md:gap-10"
                  {...(section.noTranslate ? { translate: "no" as const } : {})}
                >
                  <span className="font-display text-2xl text-verdon-900 transition group-hover:text-olivier-700 md:text-3xl">
                    {section.title}
                  </span>
                  <span className="max-w-md text-sm leading-relaxed text-pierre-600 md:text-right">
                    {section.text}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
