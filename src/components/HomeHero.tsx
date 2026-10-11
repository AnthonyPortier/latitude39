"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-hero-wash"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(245,184,20,0.25), transparent 35%), radial-gradient(circle at 80% 70%, rgba(47,145,149,0.3), transparent 40%), linear-gradient(180deg, transparent 55%, rgba(32,76,80,0.55) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold tracking-tight text-pierre-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          SCI Latitude 39
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl font-display text-2xl font-medium text-soleil-200 sm:text-3xl md:text-4xl"
        >
          Domaine Gréoux — dossier banque
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-pierre-100 md:text-lg"
        >
          Acquisition d’un domaine à Gréoux-les-Bains pour une exploitation en
          meublé de tourisme — business plan, étude de marché et pièces du dossier.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/business-plan"
            className="bg-soleil-400 px-5 py-3 text-sm font-semibold text-verdon-950 transition hover:bg-soleil-300"
          >
            Lire le business plan
          </Link>
          <Link
            href="/graphiques"
            className="border border-pierre-100/50 px-5 py-3 text-sm font-medium text-pierre-50 transition hover:bg-white/10"
          >
            Voir les graphiques
          </Link>
          <Link
            href="/telechargements"
            className="border border-pierre-100/50 px-5 py-3 text-sm font-medium text-pierre-50 transition hover:bg-white/10"
          >
            Télécharger les PDF
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
