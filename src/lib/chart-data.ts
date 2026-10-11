/** Données tirées de content/etude-marche-graphiques.md et business-plan-banque.md */

export const occupationMarche = [
  { mois: "Jan", occupation: 35 },
  { mois: "Fév", occupation: 40 },
  { mois: "Mar", occupation: 52 },
  { mois: "Avr", occupation: 65 },
  { mois: "Mai", occupation: 65 },
  { mois: "Juin", occupation: 69 },
  { mois: "Juil", occupation: 76 },
  { mois: "Aoû", occupation: 80 },
  { mois: "Sep", occupation: 66 },
  { mois: "Oct", occupation: 71 },
  { mois: "Nov", occupation: 62 },
  { mois: "Déc", occupation: 36 },
];

export const vinonMensuel = [
  { mois: "Jan", revenu: 243, occupation: 19 },
  { mois: "Fév", revenu: 948, occupation: 85 },
  { mois: "Mar", revenu: 1361, occupation: 97 },
  { mois: "Avr", revenu: 1569, occupation: 93 },
  { mois: "Mai", revenu: 1587, occupation: 100 },
  { mois: "Juin", revenu: 2309, occupation: 100 },
  { mois: "Juil", revenu: 2739, occupation: 100 },
  { mois: "Aoû", revenu: 2094, occupation: 100 },
  { mois: "Sep", revenu: 1519, occupation: 93 },
  { mois: "Oct", revenu: 1463, occupation: 94 },
  { mois: "Nov", revenu: 119, occupation: 7 },
  { mois: "Déc", revenu: 409, occupation: 29 },
];

export const occupationCompare = occupationMarche.map((row, index) => ({
  mois: row.mois,
  marche: row.occupation,
  t2Vinon: vinonMensuel[index].occupation,
}));

export const airdnaVilles = [
  {
    marche: "Gréoux",
    annonces: 555,
    ca: 13600,
    occupation: 65,
    adr: 70,
    score: 75,
  },
  {
    marche: "Manosque",
    annonces: 264,
    ca: 16400,
    occupation: 61,
    adr: 84,
    score: 77,
  },
  {
    marche: "Vinon",
    annonces: 57,
    ca: 16500,
    occupation: 59,
    adr: 95,
    score: 55,
  },
];

export const chambresRepartition = [
  { name: "T2 (5)", value: 5, fill: "#2f9195" },
  { name: "T3 (2)", value: 2, fill: "#60864e" },
];

export const construction133k = [
  { poste: "7 × ~18 k€", montant: 126000 },
  { poste: "Marge / upsell", montant: 7000 },
];

export const scenariosCa = [
  { name: "Scénario A", montant: 133000 },
  { name: "Scénario B", montant: 59280 },
  { name: "Vendeur 2025", montant: 49234 },
];

export const financement = [
  { name: "Emprunt", value: 650000, fill: "#204c50" },
  { name: "Apports notaire", value: 60000, fill: "#e09a08" },
];

export const nuitesPaca = [
  { annee: "2022", millions: 22.6 },
  { annee: "2023", millions: 25.0 },
  { annee: "2024", millions: 30.7 },
];

export const curistes = [
  { annee: "2019", curistes: 34600 },
  { annee: "2022", curistes: 26250 },
  { annee: "2023", curistes: 26900 },
  { annee: "2024", curistes: 26360 },
  { annee: "2025", curistes: 25800 },
];

export const historiqueVendeur = [
  { annee: "2023", ca: 39995 },
  { annee: "2024", ca: 44627 },
  { annee: "2025", ca: 49234 },
  { annee: "2026*", ca: 47992 },
];

export const COLORS = {
  verdon: "#2f9195",
  verdonDeep: "#204c50",
  olive: "#60864e",
  oliveDeep: "#3b5431",
  soleil: "#e09a08",
  pierre: "#8f7f66",
  ink: "#2c2823",
};
