import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogHeaderProps {
  title: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export function BlogHeader({ title, date, category, image, author }: BlogHeaderProps) {
  return (
    <>
      <Link 
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        ブログ一覧に戻る
      </Link>

      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="text-blue-600">{category}</span>
          <span>•</span>
          <span>{date}</span>
        </div>

        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/images/placeholder.svg"
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-gray-600">執筆者</div>
          </div>
        </div>
      </div>
    </>
  );
} 