import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { PhotoBand } from "@/components/PhotoBand";
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
    text: "Contenu intégral du dossier banque : bien, organisation, scénarios A/B, calendrier.",
  },
  {
    href: "/etude-marche",
    title: "Étude de marché",
    text: "Texte complet avec graphiques ancrés (saisonnalité, AirDNA, Vinon, 133 k€).",
  },
  {
    href: "/telechargements",
    title: "Téléchargements PDF",
    text: "Versions PDF du business plan et de l’étude de marché.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <PhotoBand
        title="Le domaine"
        subtitle="Piscine, jardin, terrasses et pétanque — cadre du mas à Gréoux-les-Bains."
        photos={[
          {
            src: "/photos/domaine-piscine.webp",
            alt: "Piscine et jardin du domaine",
          },
          {
            src: "/photos/domaine-terrasse.webp",
            alt: "Terrasse ombragée du mas",
          },
          {
            src: "/photos/domaine-jardin.webp",
            alt: "Jardin et roses devant la maison",
          },
          {
            src: "/photos/domaine-petanque.webp",
            alt: "Terrain de pétanque au coucher du soleil",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl text-verdon-900 md:text-4xl">
            Synthèse du dossier
          </h2>
          <p className="mt-3 max-w-2xl text-pierre-700">
            Chiffres clés issus du business plan — pour la lecture complète,
            ouvrir les pages documents.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <p className="text-xs uppercase tracking-[0.14em] text-pierre-500">
                {item.label}
              </p>
              <p className="mt-2 font-display text-3xl text-verdon-800">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-pierre-600">{item.hint}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <PhotoBand
        title="Ambiance"
        subtitle="Intérieurs du mas — lumière, pierre et volumes pour une lecture concrète du bien."
        photos={[
          {
            src: "/photos/ambiance-fenetre.webp",
            alt: "Vue depuis une fenêtre du domaine",
          },
          {
            src: "/photos/ambiance-salon.webp",
            alt: "Salon avec poutres et baies vitrées",
          },
          {
            src: "/photos/ambiance-cheminee.webp",
            alt: "Pièce de vie avec cheminée",
          },
          {
            src: "/photos/ambiance-cuisine.webp",
            alt: "Cuisine et salle à manger",
          },
        ]}
      />

      <section className="border-y border-[var(--line)] bg-white/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl text-verdon-900 md:text-4xl">
              Documents du dossier
            </h2>
            <p className="mt-3 max-w-2xl text-pierre-700">
              Chaque page affiche le markdown source en intégralité — sans
              raccourci. Les graphiques sont intégrés dans l’étude de marché.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {sections.map((section, index) => (
              <Reveal key={section.href} delay={index * 0.05}>
                <Link
                  href={section.href}
                  className="group flex flex-col gap-2 py-6 transition md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="font-display text-2xl text-verdon-900 group-hover:text-olivier-700">
                    {section.title}
                  </span>
                  <span className="max-w-xl text-sm leading-relaxed text-pierre-600 md:text-right">
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
