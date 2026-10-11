"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FullBleedPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Hauteur relative du plan photo — défaut ~55–62svh */
  heightClass?: string;
  objectPosition?: string;
};

/**
 * Plan photo edge-to-edge + légende éditoriale sous l’image (pas de carte, pas d’overlay).
 */
export function FullBleedPhoto({
  src,
  alt,
  caption,
  heightClass = "h-[52svh] min-h-[16rem] md:h-[60svh]",
  objectPosition = "center",
}: FullBleedPhotoProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.88, 1],
    [0.65, 1, 1, 0.75],
  );

  return (
    <figure className="m-0 w-full">
      <section
        ref={ref}
        className={`relative w-full overflow-hidden ${heightClass}`}
      >
        <motion.div className="absolute inset-0" style={{ scale, opacity }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition }}
            sizes="100vw"
          />
        </motion.div>
      </section>
      {caption ? (
        <figcaption className="mx-auto max-w-6xl px-5 py-4 text-sm leading-relaxed text-pierre-600 sm:px-8 md:px-12 lg:px-16">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type ChapterIntroProps = {
  title: string;
  text: string;
};

/** Intro de chapitre — une intention, hors carte */
export function ChapterIntro({ title, text }: ChapterIntroProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] leading-tight text-verdon-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pierre-700 md:text-lg">
          {text}
        </p>
      </motion.div>
    </section>
  );
}
