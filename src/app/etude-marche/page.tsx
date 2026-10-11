import type { Metadata } from "next";
import { EtudeMarcheBody } from "@/components/EtudeMarcheBody";
import { DOC_META, readDoc } from "@/lib/docs";

export const metadata: Metadata = {
  title: DOC_META["etude-marche-greoux"].title,
  description: DOC_META["etude-marche-greoux"].description,
};

export default function EtudeMarchePage() {
  const content = readDoc("etude-marche-greoux");
  const annex = readDoc("etude-marche-graphiques");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <p className="mb-6 text-sm uppercase tracking-[0.14em] text-olivier-700">
        Contenu intégral · graphiques ancrés dans le texte
      </p>
      <EtudeMarcheBody content={content} annex={annex} />
    </div>
  );
}
