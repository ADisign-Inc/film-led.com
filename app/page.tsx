"use client";

import Image from "next/image";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LogoSlider from "@/components/ui/LogoSlider";
import { Cta } from "@/components/ui/Cta";
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
            <div className="max-w-6xl mx-auto text-white">
              <div className="space-y-8 mt-14 mb-10">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl !leading-normal mb-20">
                  革新的な
                  <br />
                  テクノロジーで
                  <br />
                  空間を変える
                  <br />
                  次世代型LEDビジョン
                </h1>

                <p className="text-2xl md:text-3xl font-semibold text-yellow-300">
                  透明LEDフィルム【レンタル・販売】
                </p>
                <p className="text-xl">
                  店舗・オフィス・イベントに最適。視覚のインパクトと空間演出を両立します。
                </p>
              </div>

              <Button>
                無料相談・お申し込みはこちら
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* <LogoSlider /> */}
        </section>

        {/* Service */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            What's Transparent LED Film ?<span>透明LEDフィルムとは？</span>
          </h2>

          <div className="flex gap-10">
            <Image
              src="/images/about/01.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover"
              priority
            />
            <div>
              <p className="text-4xl font-bold mb-20">
                革新的なディスプレイ技術
              </p>
              <p className="text-lg leading-8">
                透明LEDフィルムは、ガラスやアクリルなどの透明素材に貼り付けて使用する最先端のディスプレイ技術です。
                <br />
                これにより、空間デザインを損なうことなく、鮮やかな映像を表示でき、視界を遮ることなく、広告やインフォメーションを発信できます。
                <br />
                この技術は、空間を開放的に保ちながらも、強力な訴求力を持つ映像を提供します。
                <br />
                昼と夜で異なる印象を与えることができるのも魅力です。
              </p>
            </div>
          </div>
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
            <Link href="/services">
              <Button variant="default">
                サービス内容を詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Advantages of Introduction */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            Advantages of Introduction
            <span>導入のメリット</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-black mb-20">
            <div className="bg-white/90 p-10 rounded-xl">
              1. 空間デザインを損なわず、視覚的インパクトを与える
              透明LEDフィルムは、ガラス面やウィンドウに直接取り付けることで、空間デザインをそのまま活かしたまま、動的で鮮やかな映像を表示可能です。高級感のある施設や店舗でも、ブランドイメージを維持しながら目を引くディスプレイが実現します。
            </div>
            <div className="bg-white/90 p-10 rounded-xl">
              2. 設置の自由度が高く、施工も簡単
              大規模な工事を必要とせず、スピーディーに設置が可能です。店舗やオフィスなど、限られたスペースにも簡単に導入でき、配置変更や移設も柔軟に対応できます。短期間で効果的な運用を開始できます。
            </div>
            <div className="bg-white/90 p-10 rounded-xl">
              3. 集客力・訴求力の向上
              動的なコンテンツやインタラクティブな演出が、通行人や来客の目を引きます。視覚的に印象に残りやすく、集客効果が高まります。また、遠くからでも目を引くため、屋外や大規模施設でも効果的です。
            </div>
            <div className="bg-white/90 p-10 rounded-xl">
              4. 最新技術で次世代の広告表現が可能
              透明LEDフィルムは最新のディスプレイ技術を駆使しており、通常のLEDディスプレイでは実現できない「透明性」と「高解像度」を両立させます。これにより、視覚的な美しさと機能性を兼ね備えた未来的な広告手法を提供します。
            </div>
            <div className="bg-white/90 p-10 rounded-xl">
              5. コストパフォーマンスに優れたレンタルプラン
              初期投資を抑えたい場合、レンタルプランを選択することができます。短期間のキャンペーンやイベントでも導入可能で、リスクを抑えつつ最新技術を試せます。さらに、レンタル期間後の移設や再契約も柔軟に対応可能です。
            </div>
            <div className="bg-white/90 p-10 rounded-xl">
              6. メンテナンスの簡便さ
              透明LEDフィルムは耐久性が高く、メンテナンスが簡単で長期的に安定した運用が可能です。定期的な清掃やコンテンツ更新も簡単に行えるため、管理が楽で安心です。
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="default">
                透明LEDフィルムについて詳しく知る
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
            <Link href="/cases">
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
            {blogs.slice(0, 3).map((post) => (
              <div key={post.id}>
                <BlogList post={post} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="default">
                LED ブログ一覧へ
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Product Lineup */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            Product Lineup
            <span>製品ラインナップ</span>
          </h2>

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="default">
                製品ラインナップを詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Flow */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            Flow
            <span>導入の流れ</span>
          </h2>

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="default">
                導入の流れを詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Faq */}
        <section className="container max-w-6xl py-10 md:py-20 mb-10">
          <h2>
            Faq
            <span>よくある質問</span>
          </h2>

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="default">
                よくある質問を詳しく見る
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
