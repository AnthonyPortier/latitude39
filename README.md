# SCI Latitude 39 — dossier banque

Site vitrine du dossier banque **SCI Latitude 39 / Domaine Gréoux**.

**Repo :** https://github.com/AnthonyPortier/latitude39  
**Site :** https://latitude39-wheat.vercel.app

## Lancer en local

```bash
npm install
npm run dev
```

Serveur : **http://127.0.0.1:43125** (`0.0.0.0:43125`).

```bash
npm run build && npm run start
```

## Contenu

- `content/` — documents sources (texte intégral)
- `public/photos/` — photos domaine
- `public/pdfs/` — Business plan (dernière version) + études

## Pages

| Route | Contenu |
| ----- | ------- |
| `/` | Accueil + photos |
| `/business-plan` | Business plan |
| `/etude-marche` | Étude avec graphiques dans le texte |
| `/telechargements` | PDF |

## Stack

Next.js · TypeScript · Tailwind · Recharts · Framer Motion
