"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoGalleryProps = {
  images: GalleryImage[];
  /** Ratio des vignettes — portrait pour les ambiances verticales */
  aspect?: "landscape" | "portrait";
  className?: string;
};

/**
 * Grille éditoriale + lightbox (prev/next, Escape, clic fond).
 * Les légendes restent visibles sous la vignette et dans le dialogue.
 */
export function PhotoGallery({
  images,
  aspect = "landscape",
  className = "",
}: PhotoGalleryProps) {
  const labelId = useId();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const isOpen = activeIndex !== null;
  const active = activeIndex !== null ? images[activeIndex] : null;
  const aspectClass =
    aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, close, showPrev, showNext]);

  if (images.length === 0) return null;

  const openAt = (index: number) => {
    setActiveIndex(index);
  };

  const onThumbKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openAt(index);
    }
  };

  const captionText =
    active?.caption?.trim() || active?.alt?.trim() || undefined;

  return (
    <>
      <ul
        className={`photo-gallery m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ${className}`}
      >
        {images.map((image, index) => {
          const label = image.caption?.trim() || image.alt;
          return (
            <li key={`${image.src}-${index}`}>
              <figure className="m-0">
                <button
                  type="button"
                  className={`group relative block w-full overflow-hidden bg-[rgba(32,76,80,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdon-600 ${aspectClass}`}
                  onClick={() => openAt(index)}
                  onKeyDown={(event) => onThumbKeyDown(event, index)}
                  aria-label={`Agrandir : ${label}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </button>
                {label ? (
                  <figcaption className="mt-3 text-sm leading-relaxed text-pierre-600">
                    {label}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {isOpen && active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[rgba(28,36,34,0.88)]"
              aria-label="Fermer la visionneuse"
              onClick={close}
            />

            <motion.div
              className="relative z-10 flex max-h-full w-full max-w-6xl flex-col"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-4 pb-3 text-white/90">
                <p
                  id={labelId}
                  className="min-w-0 flex-1 truncate text-sm md:text-base"
                >
                  {captionText}
                </p>
                <p className="shrink-0 text-xs tracking-wide text-white/55 tabular-nums">
                  {activeIndex! + 1} / {images.length}
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  className="shrink-0 border border-white/35 px-3 py-1.5 text-sm transition hover:bg-white/10"
                >
                  Fermer
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center">
                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-0 z-10 -translate-x-1 border border-white/35 bg-[rgba(28,36,34,0.55)] px-3 py-3 text-white transition hover:bg-[rgba(28,36,34,0.8)] sm:-translate-x-3"
                    aria-label="Photo précédente"
                  >
                    ←
                  </button>
                ) : null}

                <div className="relative mx-auto flex h-[min(72svh,42rem)] w-full items-center justify-center">
                  <Image
                    key={active.src}
                    src={active.src}
                    alt={active.alt}
                    width={2200}
                    height={2200}
                    className="max-h-[min(72svh,42rem)] w-auto max-w-full object-contain"
                    sizes="(max-width: 1280px) 92vw, 1100px"
                    priority
                  />
                </div>

                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-0 z-10 translate-x-1 border border-white/35 bg-[rgba(28,36,34,0.55)] px-3 py-3 text-white transition hover:bg-[rgba(28,36,34,0.8)] sm:translate-x-3"
                    aria-label="Photo suivante"
                  >
                    →
                  </button>
                ) : null}
              </div>

              {captionText ? (
                <p
                  className="mt-3 text-center text-sm leading-relaxed text-white/80"
                  aria-live="polite"
                >
                  {captionText}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
