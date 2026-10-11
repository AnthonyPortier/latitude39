import { redirect } from "next/navigation";

/** Les graphiques sont désormais ancrés dans l’étude de marché. */
export default function GraphiquesRedirectPage() {
  redirect("/etude-marche");
}
