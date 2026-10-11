"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/photos/hero-facade.webp"
        alt="Façade du domaine à Gréoux-les-Bains"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-wash" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(32,76,80,0.35) 0%, rgba(32,76,80,0.15) 40%, rgba(32,76,80,0.72) 100%)",
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
          meublé de tourisme — business plan et étude de marché illustrée.
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
            href="/etude-marche"
            className="border border-pierre-100/50 px-5 py-3 text-sm font-medium text-pierre-50 transition hover:bg-white/10"
          >
            Étude de marché
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
