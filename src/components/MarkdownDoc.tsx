import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownDocProps = {
  content: string;
};

export function MarkdownDoc({ content }: MarkdownDocProps) {
  return (
    <article className="prose-dossier">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
