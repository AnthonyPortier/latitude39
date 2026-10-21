"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative h-[70svh] min-h-[24rem] w-full overflow-hidden md:h-[78svh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/photos/hero-facade.webp"
          aria-label="Vidéo du domaine à Gréoux-les-Bains"
        >
          <source src="/media/hero-domaine.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Voile bas uniquement — lisibilité du texte, pas d’overlay décoratif */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(28, 36, 34, 0.45) 45%, rgba(28, 36, 34, 0.82) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 pt-28 sm:px-8 md:px-12 md:pb-20 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[0.92] tracking-tight text-white"
          >
            SCI Latitude 39
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-snug text-[#e8dfc8]"
          >
            Domaine Gréoux — dossier banque
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-md text-base leading-relaxed text-white/85 md:text-lg"
          >
            Un mas à Gréoux-les-Bains pour une exploitation en meublé de
            tourisme — <span translate="no">Business plan</span> et étude de
            marché.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/business-plan"
              className="bg-[#d4a017] px-5 py-3 text-sm font-semibold text-[#1c2422] transition hover:bg-[#e0b020]"
              translate="no"
            >
              Lire le Business plan
            </Link>
            <Link
              href="/etude-marche"
              className="border border-white/45 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Étude de marché
            </Link>
            <Link
              href="/telechargements"
              className="border border-white/45 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Télécharger les PDF
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
