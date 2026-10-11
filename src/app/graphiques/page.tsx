import type { Metadata } from "next";
import { ChartsGallery } from "@/components/Charts";
import { MarkdownDoc } from "@/components/MarkdownDoc";
import { DOC_META, readDoc } from "@/lib/docs";

export const metadata: Metadata = {
  title: DOC_META["etude-marche-graphiques"].title,
  description: DOC_META["etude-marche-graphiques"].description,
};

export default function GraphiquesPage() {
  const content = readDoc("etude-marche-graphiques");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10 max-w-3xl">
        <h1 className="font-display text-4xl text-verdon-900 md:text-5xl">
          Graphiques
        </h1>
        <p className="mt-3 text-pierre-700">
          Visualisations tirées des tableaux sourcés. Le document markdown
          complet figure en bas de page.
        </p>
      </header>

      <ChartsGallery />

      <section className="mx-auto mt-16 max-w-3xl border-t border-[var(--line)] pt-12">
        <p className="mb-6 text-sm uppercase tracking-[0.14em] text-olivier-700">
          Contenu intégral · etude-marche-graphiques.md
        </p>
        <MarkdownDoc content={content} />
      </section>
    </div>
  );
}
