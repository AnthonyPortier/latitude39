import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type DocSlug =
  | "business-plan-banque"
  | "etude-marche-greoux"
  | "etude-marche-graphiques"
  | "pieces-perso-associes";

export const DOC_META: Record<
  DocSlug,
  { title: string; nav: string; description: string }
> = {
  "business-plan-banque": {
    title: "Business plan — dossier banque",
    nav: "Business plan",
    description:
      "Dossier de financement SCI Latitude 39 — acquisition Domaine Gréoux.",
  },
  "etude-marche-greoux": {
    title: "Étude de marché — Gréoux",
    nav: "Étude de marché",
    description:
      "Marché locatif, thermalisme, Cadarache / ITER, saisonnalité Verdon.",
  },
  "etude-marche-graphiques": {
    title: "Données & graphiques",
    nav: "Graphiques",
    description: "Tableaux sourcés prêts à visualiser (PriceLabs, AirDNA, Insee).",
  },
  "pieces-perso-associes": {
    title: "Pièces & checklist",
    nav: "Pièces",
    description: "Checklist pièces personnelles, bien et assurance.",
  },
};

export function readDoc(slug: DocSlug): string {
  const filePath = path.join(contentDir, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8");
}

export function docByteLength(slug: DocSlug): number {
  return Buffer.byteLength(readDoc(slug), "utf8");
}
