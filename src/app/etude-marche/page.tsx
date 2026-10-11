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
      <EtudeMarcheBody content={content} annex={annex} />
    </div>
  );
}
