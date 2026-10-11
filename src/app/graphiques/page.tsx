import { redirect } from "next/navigation";

/** Les graphiques sont désormais dans le texte de l’étude de marché. */
export default function GraphiquesRedirectPage() {
  redirect("/etude-marche");
}
