import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/data/blog";

type BlogListProps = {
  post: Blog;
};

export function BlogList({ post }: BlogListProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <article className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <time dateTime={post.date}>{post.date}</time>
            <span className="bg-gray-100 px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
          <h2 className="text-xl text-black font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
