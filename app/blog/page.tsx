import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Cta } from "@/components/ui/Cta";
import { BlogList } from "@/components/blog/BlogList";
import { blogs } from "@/data/blog";

export default function BlogPage() {
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
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            LED BLOG
            <span>LED ブログ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((post) => (
              <BlogList key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="default">TOPへ戻る</Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
