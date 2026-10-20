import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Téléchargements PDF",
  description: "PDF du dossier banque SCI Latitude 39.",
};

type PdfEntry = {
  name: string;
  label: string;
  noTranslate?: boolean;
};

/** Liste explicite — évite tout libellé ambigu / tronqué */
const PDFS: PdfEntry[] = [
  {
    name: "SCI-Latitude39-business-plan-banque.pdf",
    label: "Business plan",
    noTranslate: true,
  },
  {
    name: "SCI-Latitude39-etude-marche-greoux.pdf",
    label: "Étude de marché Gréoux",
  },
  {
    name: "SCI-Latitude39-etude-marche-graphiques.pdf",
    label: "Étude — données / graphiques",
  },
  {
    name: "SCI-Latitude39-presentation-appartements.pdf",
    label: "Fiche appartements",
    noTranslate: true,
  },
  {
    name: "SCI-Latitude39-presentation-associes.pdf",
    label: "Présentation des associés",
  },
];

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

export default function TelechargementsPage() {
  const dir = path.join(process.cwd(), "public", "pdfs");
  const files = PDFS.flatMap((entry) => {
    const filePath = path.join(dir, entry.name);
    if (!fs.existsSync(filePath)) return [];
    const stats = fs.statSync(filePath);
    return [
      {
        name: entry.name,
        label: entry.label,
        noTranslate: entry.noTranslate === true,
        size: stats.size,
        href: `/pdfs/${entry.name}`,
      },
    ];
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-display text-4xl text-verdon-900 md:text-5xl">
        Téléchargements PDF
      </h1>
      <p className="mt-3 text-pierre-700">
        Dernière version du <span translate="no">Business plan</span>, études
        de marché, <span translate="no">Fiche appartements</span> et
        présentation des associés.
      </p>

      <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {files.map((file) => (
          <li key={file.name}>
            <a
              href={file.href}
              download={file.name}
              className="flex flex-col gap-1 py-5 transition hover:bg-white/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="min-w-0">
                <span
                  className="block text-xl font-semibold text-verdon-900"
                  {...(file.noTranslate ? { translate: "no" as const } : {})}
                >
                  {file.label}
                </span>
                <span className="mt-1 block break-all text-sm text-pierre-500">
                  {file.name}
                </span>
              </span>
              <span className="shrink-0 text-sm font-medium text-olivier-700">
                {formatBytes(file.size)} · télécharger
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
