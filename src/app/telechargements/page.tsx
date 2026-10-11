import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Téléchargements PDF",
  description: "PDF du dossier banque SCI Latitude 39.",
};

const LABELS: Record<string, string> = {
  "SCI-Latitude39-business-plan-banque.pdf": "Business plan",
  "SCI-Latitude39-etude-marche-greoux.pdf": "Étude de marché Gréoux",
  "SCI-Latitude39-etude-marche-graphiques.pdf": "Étude — données / graphiques",
};

/** Ordre d’affichage : BP puis études */
const ORDER = [
  "SCI-Latitude39-business-plan-banque.pdf",
  "SCI-Latitude39-etude-marche-greoux.pdf",
  "SCI-Latitude39-etude-marche-graphiques.pdf",
];

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

export default function TelechargementsPage() {
  const dir = path.join(process.cwd(), "public", "pdfs");
  const files = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".pdf") && LABELS[name])
    .map((name) => {
      const stats = fs.statSync(path.join(dir, name));
      return {
        name,
        size: stats.size,
        label: LABELS[name],
        href: `/pdfs/${name}`,
      };
    })
    .sort(
      (a, b) =>
        ORDER.indexOf(a.name) - ORDER.indexOf(b.name) ||
        a.label.localeCompare(b.label, "fr"),
    );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-display text-4xl text-verdon-900 md:text-5xl">
        Téléchargements PDF
      </h1>
      <p className="mt-3 text-pierre-700">
        Dernière version du <span translate="no">Business plan</span> et études
        de marché.
      </p>

      <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {files.map((file) => (
          <li key={file.name}>
            <a
              href={file.href}
              download
              className="flex flex-col gap-1 py-5 transition hover:bg-white/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span
                  className="block font-display text-xl text-verdon-900"
                  {...(file.name.includes("business-plan")
                    ? { translate: "no" as const }
                    : {})}
                >
                  {file.label}
                </span>
                <span className="mt-1 block text-sm text-pierre-500">
                  {file.name}
                </span>
              </span>
              <span className="text-sm font-medium text-olivier-700">
                {formatBytes(file.size)} · télécharger
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
