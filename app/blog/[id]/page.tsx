import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function BlogPage({ params }: Props) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg01.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <Header />

      <main className="flex-1">
        <article className="container max-w-4xl py-10 md:py-20 text-start">
          <div className="mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
          <div className="space-y-4 text-start">
            <div className="flex items-center gap-4 text-sm">
              <time dateTime={blog.date}>{blog.date}</time>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-xl text-gray-600">{blog.description}</p>

            {typeof blog.content === "string" ? (
              <div className="prose max-w-none mt-8">{blog.content}</div>
            ) : (
              <div className="prose max-w-none mt-8">
                <p>{blog.content.introduction}</p>
                {blog.content.sections.map((section, index) => (
                  <div key={index} className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                ))}
                <p className="mt-8">{blog.content.conclusion}</p>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
