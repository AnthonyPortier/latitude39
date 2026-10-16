"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";
import { PhotoGallery } from "@/components/PhotoGallery";
import { splitMarkdownGalleries } from "@/lib/markdown-galleries";

type MarkdownDocProps = {
  content: string;
};

const components: Components = {
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;
    const isLocal = src.startsWith("/");
    if (isLocal) {
      return (
        <span className="prose-photo">
          <Image
            src={src}
            alt={alt ?? ""}
            width={1600}
            height={1067}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </span>
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? ""} className="h-auto w-full" />
    );
  },
  a: ({ href, children }) => {
    if (!href) return <span>{children}</span>;
    if (href.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

function MarkdownBlock({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}

export function MarkdownDoc({ content }: MarkdownDocProps) {
  const segments = splitMarkdownGalleries(content);
  const hasGallery = segments.some((segment) => segment.type === "gallery");

  if (!hasGallery) {
    return (
      <article className="prose-dossier">
        <MarkdownBlock content={content} />
      </article>
    );
  }

  return (
    <article className="prose-dossier prose-dossier--with-galleries">
      {segments.map((segment, index) => {
        if (segment.type === "markdown") {
          return <MarkdownBlock key={`md-${index}`} content={segment.content} />;
        }

        return (
          <div key={`gallery-${index}`} className="not-prose my-8">
            <PhotoGallery images={segment.images} aspect="landscape" />
          </div>
        );
      })}
    </article>
  );
}
