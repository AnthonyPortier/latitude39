# SCI Latitude 39 — dossier banque (site vitrine)

Site Next.js présentant le dossier banque **SCI Latitude 39 / Domaine Gréoux** :
business plan, étude de marché (graphiques ancrés dans le texte) et PDF.

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
- `etude-marche-graphiques.md` (annexe tableaux sur la page étude)

Photos domaine : `public/photos/` (Drive « La maison » + site lemasdesrelarguiers.com)

PDF : `public/pdfs/SCI-Latitude39-*.pdf`

## Pages

| Route | Contenu |
| ----- | ------- |
| `/` | Accueil + photos domaine / ambiance |
| `/business-plan` | Business plan complet |
| `/etude-marche` | Étude complète + graphiques inline |
| `/telechargements` | PDF |
| `/graphiques` | Redirige vers `/etude-marche` |

## Stack

Next.js · TypeScript · Tailwind CSS · Recharts · Framer Motion · react-markdown
