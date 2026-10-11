# SCI Latitude 39 — dossier banque (site vitrine)

Site Next.js présentant le dossier banque **SCI Latitude 39 / Domaine Gréoux** :
business plan, étude de marché, graphiques, checklist pièces et PDF.

## Prérequis

- Node.js 20+
- npm

## Lancer en local

```bash
npm install
npm run dev
```

Le serveur écoute sur **http://0.0.0.0:43125** (accessible aussi via `http://127.0.0.1:43125`).

Production :

```bash
npm run build
npm run start
```

## Contenu

Les markdown sources sont dans `content/` (copie intégrale, non raccourcie) :

- `business-plan-banque.md`
- `etude-marche-greoux.md`
- `etude-marche-graphiques.md`
- `pieces-perso-associes.md`

PDF téléchargeables : `public/pdfs/SCI-Latitude39-*.pdf`

Checksums : `content/SHA256SUMS.txt`

## Pages

| Route | Contenu |
| ----- | ------- |
| `/` | Accueil synthétique |
| `/business-plan` | Business plan complet |
| `/etude-marche` | Étude de marché complète |
| `/graphiques` | Visualisations + tableaux sources |
| `/pieces` | Checklist pièces |
| `/telechargements` | PDF |

## Stack

Next.js · TypeScript · Tailwind CSS · Recharts · Framer Motion · react-markdown
