"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
};

export function PhotoBand({
  title,
  subtitle,
  photos,
}: {
  title: string;
  subtitle: string;
  photos: Photo[];
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:px-6 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl text-verdon-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-pierre-700">{subtitle}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`relative min-h-[42vh] overflow-hidden ${
              index === 0 ? "md:col-span-2 md:min-h-[56vh]" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes={index === 0 ? "100vw" : "50vw"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
