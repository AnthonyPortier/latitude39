import type { Metadata } from "next";
import { MarkdownDoc } from "@/components/MarkdownDoc";
import { DOC_META, readDoc } from "@/lib/docs";

export const metadata: Metadata = {
  title: DOC_META["business-plan-banque"].title,
  description: DOC_META["business-plan-banque"].description,
};

export default function BusinessPlanPage() {
  const content = readDoc("business-plan-banque");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="mb-6 text-sm uppercase tracking-[0.14em] text-olivier-700">
        Contenu intégral · business-plan-banque.md
      </p>
      <MarkdownDoc content={content} />
    </div>
  );
}
