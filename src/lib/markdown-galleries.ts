export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type MarkdownSegment =
  | { type: "markdown"; content: string }
  | { type: "gallery"; images: GalleryImage[] };

const IMAGE_LINE =
  /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/;

/**
 * Regroupe les suites d’images Markdown consécutives en galeries,
 * le reste du document restant du Markdown classique.
 */
export function splitMarkdownGalleries(content: string): MarkdownSegment[] {
  const lines = content.split("\n");
  const segments: MarkdownSegment[] = [];
  let markdownBuffer: string[] = [];
  let galleryBuffer: GalleryImage[] = [];

  const flushMarkdown = () => {
    if (markdownBuffer.length === 0) return;
    const text = markdownBuffer.join("\n");
    if (text.trim().length > 0) {
      segments.push({ type: "markdown", content: text });
    }
    markdownBuffer = [];
  };

  const flushGallery = () => {
    if (galleryBuffer.length === 0) return;
    segments.push({ type: "gallery", images: galleryBuffer });
    galleryBuffer = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i] ?? "";
    const trimmed = line.trim();
    const match = trimmed.match(IMAGE_LINE);

    if (match) {
      flushMarkdown();
      const alt = match[1] ?? "";
      const src = match[2] ?? "";
      const title = match[3];
      galleryBuffer.push({
        src,
        alt,
        caption: title || alt || undefined,
      });
      continue;
    }

    if (trimmed === "" && galleryBuffer.length > 0) {
      let j = i + 1;
      while (j < lines.length && (lines[j] ?? "").trim() === "") j += 1;
      const next = (lines[j] ?? "").trim();
      if (IMAGE_LINE.test(next)) {
        continue;
      }
    }

    flushGallery();
    markdownBuffer.push(line);
  }

  flushGallery();
  flushMarkdown();
  return segments;
}
