import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-verdon-900 text-pierre-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-xl text-soleil-300">SCI Latitude 39</p>
          <p className="mt-1 max-w-md text-sm text-pierre-200">
            Domaine à Gréoux-les-Bains — meublé de tourisme, 7 logements.
            Document de présentation du dossier banque.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/business-plan" className="hover:text-soleil-300">
            Business plan
          </Link>
          <Link href="/etude-marche" className="hover:text-soleil-300">
            Étude de marché
          </Link>
          <Link href="/telechargements" className="hover:text-soleil-300">
            Téléchargements
          </Link>
        </div>
      </div>
    </footer>
  );
}
