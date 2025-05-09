import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";

import { mainData } from "../../data/main";

export const metadata: Metadata = {
  title: `会社概要 | ${mainData.siteName} `,
  description: "会社概要ページです。",
};

export default function FlowPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />
      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Company
            <span>会社概要</span>
          </h2>
        </section>

        <div>
          <Link href="/">
            <Button>
              TOPページへ
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
