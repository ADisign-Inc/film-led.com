import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-bold mb-8">関連記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <article className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="text-blue-600">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
