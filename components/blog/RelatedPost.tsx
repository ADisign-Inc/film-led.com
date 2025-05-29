import Link from "next/link";
import { BlogData } from "../../types/blog";

interface RelatedArticleProps {
  article: BlogData;
}

export const RelatedArticle = ({ article }: RelatedArticleProps) => {
  return (
    <div className="flex justify-center mt-10 md:mt-28">
      <div className="bg-white/10 inline-block px-5 xs:px-10 md:px-14 py-4">
        <p>
          関連記事 :
          <span className="hover:text-yellow-300 mx-2">
            <Link
              href={`/blog/${article.url}`}
              className="border-b border-white hover:border-yellow-300 transition-colors pb-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
