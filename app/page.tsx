"use client";

import Image from "next/image";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LogoSlider from "@/components/ui/LogoSlider";
import { Cta } from "@/components/contact/Cta";
import { cases } from "@/data/cases";
import { blogs } from "@/data/blog";
import { BlogList } from "@/components/blog/BlogList";

export default function LandingPage() {
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
        {/* Fv */}
        <section className="py-20 relative mb-20">
          <div className="absolute inset-0 -z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/01.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 mb-20">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 md:gap-12 items-center text-white">
              <div className="space-y-8 mt-20">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl !leading-normal">
                  革新的な
                  <br />
                  テクノロジーで
                  <br />
                  空間を変える
                </h1>
                <p className="text-2xl font-semibold text-yellow-300">
                  透明フィルム型LEDビジョン【レンタル・販売】
                </p>
                <p className="text-xl">
                  ビジネスの集客力を最大化する最先端デジタルサイネージ
                </p>

                <div className="inline-block">
                  <Button>
                    無料相談・お申し込みはこちら
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <LogoSlider /> */}
        </section>

        {/* Service */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            Service
            <span>サービス内容</span>
          </h2>

          <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-20">
            <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-5 md:mb-8">
                <Image
                  src="/images/icons/sales.svg"
                  alt=""
                  width={80}
                  height={80}
                  layout="intrinsic"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-yellow-300">販売</h3>
              <hr className="my-5 md:my-8" />
              <p className="px-3">
                屋内・屋外用のLEDビジョンを幅広く取り扱っています。シースルービジョンや高解像度屋内LEDビジョン、一体型LEDビジョンなど、様々なニーズに応える最先端の製品と、最適な映像ソリューションをご提案しています。
              </p>
            </div>

            <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-5 md:mb-8">
                <Image
                  src="/images/icons/rental.svg"
                  alt=""
                  width={90}
                  height={90}
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-yellow-300">レンタル</h3>
              <hr className="my-5 md:my-8" />
              <p className="px-3">
                弊社のLEDビジョンレンタル事業では、高品質なLEDパネルの貸出を行っています。イベントや展示会、プロモーションに最適な映像ソリューションを提供し、設置から撤去までトータルサポートいたします。
              </p>
            </div>
            <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-5 md:mb-8">
                <Image
                  src="/images/icons/video.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-yellow-300">
                コンテンツ制作
              </h3>
              <hr className="my-5 md:my-8" />
              <p className="px-3">
                お客様のご予算に合わせた最適な映像コンテンツをご提案し、プロフェッショナルな映像をご提供いたします。簡単なヒアリングでお見積りのみも可能ですので、お気軽にお問い合わせください。
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/services" className="inline-block">
              <Button variant="default">
                サービス内容を詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="container max-w-6xl bg-white/15 px-5 md:px-10 py-10 md:py-20 mb-10">
          <h2>
            Case Studies
            <span>活用事例</span>
          </h2>

          <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-20">
            {cases.slice(0, 6).map((case_) => (
              <div key={case_.id} className="">
                <div className=" flex items-center justify-center mb-3 md:mb-5">
                  <Image
                    src={case_.image[0]}
                    alt={case_.title}
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl md:text-xl text-yellow-300 mb-3">
                  {case_.title}
                </h3>
                <p className="px-3">{case_.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/cases" className="inline-block">
              <Button variant="default">
                活用事例を詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* LED BLOG */}
        <section className="container max-w-6xl mb-10">
          <h2>
            LED BLOG
            <span>LED ブログ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-20">
            {blogs.map((post) => (
              <BlogList key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/blog" className="inline-block">
              <Button variant="default">
                LED ブログ一覧へ
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
