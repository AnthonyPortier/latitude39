import type { ReactNode } from "react";
import { MarkdownDoc } from "@/components/MarkdownDoc";
import {
  ChartAirdna,
  ChartChambres,
  ChartConstruction133k,
  ChartCuristes,
  ChartNuitesPaca,
  ChartOccupationSaison,
  ChartVinonCa,
} from "@/components/ChartBlocks";

/** Ancre un graphique juste après la section dont le titre commence ainsi. */
const CHART_AFTER: { match: string; chart: ReactNode }[] = [
  {
    match: "### 2.3 Locations saisonnières",
    chart: <ChartNuitesPaca />,
  },
  {
    match: "### 4.1 Les curistes",
    chart: <ChartCuristes />,
  },
  {
    match: "### 7.1 AirDNA",
    chart: <ChartAirdna />,
  },
  {
    match: "### 7.2 PriceLabs",
    chart: <ChartOccupationSaison />,
  },
  {
    match: "## 8. Positionnement du projet",
    chart: <ChartChambres />,
  },
  {
    match: "## 9. Preuve de performance locale",
    chart: <ChartVinonCa />,
  },
  {
    match: "### 10.1 Scénario A",
    chart: <ChartConstruction133k />,
  },
];

function splitByHeadings(markdown: string): string[] {
  const parts = markdown.split(/(?=^#{2,3} )/m);
  return parts.filter((part) => part.length > 0);
}

function chartForSection(section: string): ReactNode | null {
  const firstLine = section.split("\n", 1)[0].trim();
  const hit = CHART_AFTER.find((item) => firstLine.startsWith(item.match));
  return hit ? hit.chart : null;
}

type EtudeMarcheBodyProps = {
  content: string;
  annex?: string;
};

export function EtudeMarcheBody({ content, annex }: EtudeMarcheBodyProps) {
  const sections = splitByHeadings(content);

  return (
    <div>
      {sections.map((section, index) => {
        const chart = chartForSection(section);
        return (
          <div key={`section-${index}`}>
            <div className="prose-wrap max-w-3xl">
              <MarkdownDoc content={section} />
            </div>
            {chart}
          </div>
        );
      })}

      {annex ? (
        <section className="mt-16 max-w-3xl border-t border-[var(--line)] pt-12">
          <p className="mb-6 text-sm uppercase tracking-[0.14em] text-olivier-700">
            Annexe — tableaux et données sources
          </p>
          <MarkdownDoc content={annex} />
        </section>
      ) : null}
    </div>
  );
}
