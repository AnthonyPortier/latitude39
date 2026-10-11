import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

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

export function MarkdownDoc({ content }: MarkdownDocProps) {
  return (
    <article className="prose-dossier">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
