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
import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { mainData } from "@/data/main_data";
import { ImageSlider } from "@/components/ui/ImageSlider";

export default function LandingPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col relative">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/bg01.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
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

                <Link href={mainData.contact.url}>
                  <Button>
                    無料相談・お申し込みはこちら
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <LogoSlider />
          </section>

          {/* What's Transparent LED Film */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              What's this ?<span>透明LEDフィルムとは？</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-10 mb-16 md:mb-24">
              <div className="w-full md:w-1/2">
                <ImageSlider
                  images={[
                    "/images/about/01.jpg",
                    "/images/about/02.jpg",
                    "/images/about/07.jpg",
                  ]}
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-3xl md:text-4xl font-bold !leading-normal mb-5 md:mb-10">
                  革新的な
                  <br className="xs:hidden" />
                  ディスプレイ技術
                </p>
                <div className="[&_p]:text-base md:[&_p]:text-lg">
                  <p className="mb-5 md:mb-10">
                    透明LEDフィルムは、ガラスやアクリルなどの透明素材に貼り付けて使用する最先端のディスプレイ技術です。
                  </p>
                  <p className="mb-5 md:mb-10">
                    これにより、空間デザインを損なうことなく、鮮やかな映像を表示でき、視界を遮ることなく、広告やインフォメーションを発信できます。
                  </p>
                  <p>
                    この技術は、空間を開放的に保ちながらも、強力な訴求力を持つ映像を提供します。
                    <br />
                    昼と夜で異なる印象を与えることができるのも魅力です。
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button>
                {mainData.keyWords} について詳しく知る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Benefits */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              Benefits<span>導入のメリット</span>
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 text-black mb-16 md:mb-24">
              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  視覚的インパクト
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  ガラス面やウィンドウに直接取り付けることで、空間デザインをそのまま活かしたまま、動的で鮮やかな映像を表示可能です。高級感のある施設や店舗でも、ブランドイメージを維持しながら目を引くディスプレイが実現します。
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  自由度が高く、施工も簡単
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  比較的簡単な施工で、スピーディーに設置が可能です。店舗やオフィスなど、限られたスペースにも簡単に導入でき、配置変更や移設も柔軟に対応できます。短期間で効果的な運用を開始できます。
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  集客力・訴求力向上
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  動的なコンテンツやインタラクティブな演出が、通行人や来客の目を引きます。視覚的に印象に残りやすく、集客効果が高まります。また、遠くからでも目を引くため、屋外や大規模施設でも効果的です。
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  最新技術で次世代の広告表現
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  透明LEDフィルムは最新のディスプレイ技術を駆使しており、通常のLEDディスプレイでは実現できない「透明性」と「高解像度」を両立させます。これにより、視覚的な美しさと機能性を兼ね備えた未来的な広告手法を提供します。
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  優れたコストパフォーマンス
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  初期投資を抑えたい場合、レンタルプランを選択することができます。短期間のキャンペーンやイベントでも導入可能で、リスクを抑えつつ最新技術を試せます。さらに、レンタル期間後の移設や再契約も柔軟に対応可能です。
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#f1f1f1] py-4 md:py-6 px-4 md:px-8">
                <p
                  className="relative inline-block box-border font-semibold w-[calc(100%+20px)] ml-[-3.3rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl bg-gray-700 text-yellow-300 text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-800"
                >
                  簡便なメンテナンス
                </p>
                <div className="flex gap-10 mb-5">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <p>
                  透明LEDフィルムは耐久性が高く、メンテナンスが簡単で長期的に安定した運用が可能です。定期的な清掃やコンテンツ更新も簡単に行えるため、管理が楽で安心です。
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/services">
                <Button>
                  {mainData.keyWords} について詳しく知る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Case Studies */}
          <section className="container max-w-6xl bg-white/15 px-5 md:px-10 py-14 md:py-20 mb-10">
            <h2>
              Case Studies
              <span>活用事例</span>
            </h2>

            <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-16 md:mb-24">
              {cases.slice(0, 3).map((case_) => (
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
                  活用事例について詳しく見る
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
                  製品ラインナップについて詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Service */}
          <section className="py-10 md:py-20 mb-10">
            <h2>
              Service
              <span>サービス内容</span>
            </h2>

            <div className="mb-24 md:mb-32">
              <div className="relative flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/about/01.jpg"
                    alt="LED Display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-screen bg-white/20 -z-10 translate-x-4 -translate-y-4 lg:-translate-x-20 lg:translate-y-10"></div>
                  <div className="relative flex flex-col justify-end h-full">
                    <div className="flex items-baseline mb-8 md:mb-14">
                      <h3 className="text-yellow-300 text-4xl md:text-5xl font-bold leading-none">
                        販売
                      </h3>
                      <p className="text-yellow-300/80 text-xl md:text-3xl font-bold leading-none ml-2">
                        Sales
                      </p>
                    </div>
                    <p className="mb-10 md:mb-14">
                      屋内・屋外用のLEDビジョンを幅広く取り扱っています。
                      <br />
                      シースルービジョンや高解像度屋内LEDビジョン、一体型LEDビジョンなど、様々なニーズに応える最先端の製品と、最適な映像ソリューションをご提案しています。
                    </p>
                    <div>
                      <Link href="/services">
                        <Button variant="default">
                          販売について詳しく見る
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-20">
              <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12">
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

              <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12">
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
            </div> */}

            <div className="flex justify-center">
              <Link href="/services">
                <Button variant="default">
                  サービス内容を詳しく見る
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

            <div className="grid gap-10 md:gap-8 grid-cols-1 md:grid-cols-3 pt-14 mb-10">
              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 1
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step01.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <h3 className="text-start text-yellow-300 mb-8">
                    お問い合わせ
                  </h3>
                  <p>
                    24時間無料でお受付しています。ご要望をヒアリングし、お客様に最適な製品をご提案いたします。
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 2
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step02.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <h3 className="text-start text-yellow-300 mb-8">ご発注</h3>
                  <p>
                    お見積もりやご提案内容にご納得いただけましたら、ご発注手続きを進めさせていただきます。
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 3
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step03.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <h3 className="text-start text-yellow-300 mb-8">
                    導入・施工
                  </h3>
                  <p>
                    弊社の専門スタッフが現地で施工を行います。安全・確実な導入を第一に、丁寧にご対応いたします。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-5xl h-16 mx-auto text-white text-center flex items-center justify-center font-bold mb-3">
              <div
                className="absolute inset-0 0"
                style={{
                  clipPath: "polygon(0 0, 97% 0, 100% 50%, 97% 100%, 0 100%)",
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #000000 2%, #14532d 40%, #facc15 100%)",
                }}
              ></div>
              <span className="z-10 text-xl md:text-2xl tracking-wider px-2">
                ご注文から最短20日で導入完了！
              </span>
            </div>

            <p className="text-center mb-16 md:mb-32">
              ※導入完了後も安心してお使いいただけるよう、製品には2年間の保証をお付けしています。
            </p>

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
              <span>よくあるご質問</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-24">
              <Accordion type="multiple" className="w-full">
                {faqData.slice(0, 3).map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-yellow-300">
                      {item.answer.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.answer.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="default">
                  よくある質問を詳しく見る
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

          {/* CTA */}
          <Cta />
        </main>

        <Footer />
      </div>
    </>
  );
}
