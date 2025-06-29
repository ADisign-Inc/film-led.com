import Image from "next/image";
import Link from "next/link";
import { Archive } from "../../data/archives";

export function ArchiveList({ post }: { post: Archive }) {
  return (
    <Link href={`/archives/${post.id}`} className="group">
      <article className="bg-white/5 group-hover:bg-black/5 transition-all shadow-lg group-hover:shadow-[0_0_5px_rgba(255,255,255,0.6)] flex flex-col h-full">
        <div className="relative aspect-[16/9] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/30 group-hover:after:transition-all">
          <Image
            src={post.mediaData.image[0]}
            alt={post.clientName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 md:px-6 md:py-8 flex flex-col flex-grow">
          <p className="!text-xs mb-3 md:mb-5 -mt-5">
            {post.category.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-300/20 text-yellow-300 font-bold !text-xs px-1.5 py-1 rounded mr-1.5"
              >
                {cat}
              </span>
            ))}
          </p>

          <h3 className="text-xl group-hover:text-yellow-400 transition-all text-start font-semibold mb-3 md:mb-5">
            {post.clientName}
          </h3>

          <p
            dangerouslySetInnerHTML={{
              __html:
                post.description.length > 85
                  ? `${post.description.slice(0, 85)}...`
                  : post.description,
            }}
            className="text-sm text-gray-300 group-hover:text-white transition-all !leading-5 mb-3 flex-grow"
          ></p>

          <div className="flex items-end">
            <div className="text-gray-400 group-hover:text-white/80 transition-all text-xs md:text-sm text-end w-full">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
