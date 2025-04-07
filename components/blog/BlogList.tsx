import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/data/blog";

type BlogListProps = {
  post: Blog;
};

export function BlogList({ post }: BlogListProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <article className="bg-white/90 group-hover:bg-yellow-100 transition-all">
        <div className="relative min-h-52">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-1 -left-2 flex items-center gap-2 text-sm mb-2 z-10">
            <span className="bg-yellow-900  px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-gray-500 text-sm mb-2">
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h3 className="text-xl text-black text-start font-semibold mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
