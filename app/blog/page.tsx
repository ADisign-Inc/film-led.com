import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { BlogList } from "../../components/blog/BlogList";

import { mainData } from "../../data/main";
import { blogData } from "../../data/blog";

export const metadata: Metadata = {
  title: `ブログ `,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            BLOG
            <span>ブログ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogData
              .filter((post) => post.isVisible)
              .map((post) => (
                <BlogList key={post.id} post={post} />
              ))}
          </div>

          <div className="mt-20 md:mt-28 text-center">
            <Link href="/">
              <Button variant="default">
                TOPへ戻る
                <ArrowRight className="h-4 w-4" />
              </Button>
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
