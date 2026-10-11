"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FullBleedPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Hauteur relative du plan photo */
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
  heightClass = "h-[78svh] min-h-[22rem] md:h-[88svh]",
  objectPosition = "center",
}: FullBleedPhotoProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.55, 1, 1, 0.7]);

  return (
    <figure className="m-0 w-full">
      <section ref={ref} className={`relative w-full overflow-hidden ${heightClass}`}>
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
        <figcaption className="mx-auto max-w-6xl px-5 py-5 text-sm leading-relaxed text-pierre-600 sm:px-8 md:px-12 lg:px-16">
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
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-verdon-900">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-pierre-700">{text}</p>
      </motion.div>
    </section>
  );
}
