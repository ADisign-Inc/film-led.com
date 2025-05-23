import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { ArchiveList } from "../../components/archives/ArchiveList";

import { archiveData } from "../../data/archives";

export const metadata: Metadata = {
  title: `導入実績`,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default function ArchivesPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Archives
            <span>導入実績</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mb-40">
            {archiveData.filter(post => post.isVisible !== false).map((post) => (
              <ArchiveList key={post.id} post={post} />
            ))}
          </div>

          <Link href="/">
            <Button variant="default">
              TOPへ
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>

        {/* CTA */}
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
