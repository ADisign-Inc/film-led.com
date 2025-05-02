import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../data/blog";

export function BlogList({ post }: { post: Blog }) {
  return (
    <Link href={`/blog/${post.url}`} className="group">
      <article className="bg-white/5 group-hover:bg-black/5 transition-all shadow-lg group-hover:shadow-[0_0_5px_rgba(255,255,255,0.8)] flex flex-col h-full">
        <div className="relative aspect-[16/9] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/30 group-hover:after:transition-all">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 md:px-6 md:py-8 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="text-gray-400 group-hover:text-white/80 transition-all text-sm">
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <p className="!text-xs">
              <span className="bg-yellow-400/60 text-black px-1.5 py-0.5 rounded">
                {post.category}
              </span>
            </p>
          </div>
          <h3 className="text-xl group-hover:text-yellow-400 transition-all text-start font-semibold mb-2 md:mb-5">
            {post.title}
          </h3>
          <p className="text-gray-400 group-hover:text-white/80 transition-all !leading-5 mb-3 flex-grow">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
