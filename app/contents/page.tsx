"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { VideoList } from "../../components/contents/videoList";

import { mainData } from "../../data/main";

const ContentsPage = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className=" mb-20 md:mb-20">
          <div className="relative text-center">
            <div className="py-28 md:py-48 px-5">
              <h1 className="text-3xl md:text-5xl text-yellow-300 mb-10 md:mb-20">
                映像が空間を変える。
              </h1>

              <p className="text-lg md:text-2xl font-mincho !leading-loose mb-10 md:mb-20 [&>span]:text-yellow-300">
                透明LEDに最適化されたコンテンツ動画を、企画から制作まで
                <span>一括対応</span>。
                <br />
                LEDとコンテンツ映像、セットで<span>集客効果</span>
                を最大化します。
              </p>

              <Link href={mainData.contact.url}>
                <Button variant="default">
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center z-[-1]"
              style={{ backgroundImage: "url('/images/cases/05-0.jpg')" }}
            />
          </div>
        </section>

        <div className="container max-w-6xl mx-auto">
          <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">
              {mainData.keyWords}の効果を最大化するのは
              <span className="text-yellow-300 inline-block text-2xl md:text-3xl font-bold">
                「映像の質」
              </span>
            </h2>

            <div className="text-center">
              <p className="mb-5 md:mb-6">
                {mainData.keyWords}
                の最大の強みである、高輝度・高透明度を活かすには、専用に最適化された動画コンテンツが必要です。
                <br />
                光の透過性や背景との調和、映像の動きや色の演出が「通行人の視線を奪う」効果を生み出します。
              </p>

              <p className="mb-5 md:mb-20">
                私たちは、{mainData.keyWords}
                の特性を理解した映像制作で、集客・販促効果を最大限に引き出します。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/10 p-8">
                  <p className="text-lg md:text-2xl font-bold text-yellow-300 font-mincho mb-3 md:mb-5">
                    圧倒的な視認性
                  </p>
                  <p>
                    昼間でもはっきり見える高輝度。映像次第で通行人の視線を一瞬で奪う。
                  </p>
                </div>

                <div className="bg-white/10 p-8">
                  <p className="text-lg md:text-2xl font-bold text-yellow-300 font-mincho mb-3 md:mb-5">
                    空間演出の主役に
                  </p>
                  <p>
                    音もナレーションもいらない。映像だけでブランド価値を表現。
                  </p>
                </div>

                <div className="bg-white/10 p-8">
                  <p className="text-lg md:text-2xl font-bold text-yellow-300 font-mincho mb-3 md:mb-5">
                    離脱率の低下
                  </p>
                  <p>
                    動的コンテンツにより、通行人の滞在時間が大幅アップ。記憶にも残る。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">制作可能な動画の種類</h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto text-center mb-20">
              {[
                "商品・製品紹介動画",
                "イベント・キャンペーン映像",
                "モーショングラフィックス",
                "装飾用ループ映像",
                "インタラクティブ動画",
                "ショールーム/展示会映像",
              ].map((item) => (
                <div key={item} className="">
                  <p className="text-[1.2em] md:text-[1.4em] font-bold font-mincho text-yellow-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-end">
              ※
              モーショングラフィックスとは、動きのない文章や画像、イラストなどの素材に動き（モーション）を与える技術をいいます。
            </p>
          </section>

          <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">映像制作 実績紹介</h2>

            <div>
              <p className="text-center mb-10 md:mb-20">
                私たちが実際に制作した動画を掲載しています。お問い合わせや制作の参考にぜひお使いください。
              </p>

              <VideoList />
            </div>
          </section>

          <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">
              こんなお悩みはありませんか？
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-10 md:mb-20 [&>p]:text-[1.2em] [&>p]:font-bold [&>p]:border [&>p]:border-yellow-300 [&>p]:bg-white/5 [&>p]:p-8 [&>p]:rounded-lg [&>p]:text-center">
              <p>「映像は自分たちで作っていたけど、いまいち効果が出ない」</p>
              <p>「自分たちだけでは見栄えがする映像が作れない」</p>
              <p>「LEDに最適化された映像仕様が分からない」</p>
              <p>「広告代理店に任せているがコストが高すぎる」</p>
              <p>「制作会社とLED業者の双方とのやり取りに手間がかかる」</p>
              <p>「外注先の映像制作会社を探すのが大変」 </p>
            </div>
            <p className="text-[1.6em] text-center font-bold font-mincho text-yellow-300">
              すべて、弊社がまるごと解決します。
            </p>
          </section>

          <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">
              LEDディスプレイに特化した、ワンストップ制作体制
            </h2>

            <p className="text-center mb-5 md:mb-12">
              弊社にお任せいただければ、専門スタッフによる
              映像＋ハード＋設置まで一貫対応可能です。
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
              <div className="bg-white/5 px-3 md:px-5 py-5 md:py-">
                <p className="text-lg md:text-xl font-bold text-yellow-300 font-mincho mb-3">
                  演出設計
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/icons/direction.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                  />
                </div>
              </div>

              <div className="bg-white/5 px-3 md:px-5 py-5 md:py-8">
                <p className="text-lg md:text-xl font-bold text-yellow-300 font-mincho mb-3">
                  撮影・編集
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/icons/photo.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                  />
                </div>
              </div>

              <div className="bg-white/5 px-3 md:px-5 py-5 md:py-8">
                <p className="text-lg md:text-xl font-bold text-yellow-300 font-mincho mb-3">
                  アニメーション
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/icons/animation.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                  />
                </div>
              </div>

              <div className="bg-white/5 px-3 md:px-5 py-5 md:py-8">
                <p className="text-lg md:text-xl font-bold text-yellow-300 font-mincho mb-3">
                  LEDへの最適化
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/icons/optimization.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                  />
                </div>
              </div>

              <div className="bg-white/5 px-3 md:px-5 py-5 md:py-8">
                <p className="text-lg md:text-xl font-bold text-yellow-300 font-mincho mb-3">
                  設置・施工
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/icons/step03.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="mb-20 md:mb-40">
            <h2 className="text-2xl md:text-3xl">料金プラン＆納品までの流れ</h2>
            <div>
              <p>
                ▷ 表示例（目安価格でもOK）
                ベーシックプラン：15秒静止映像／￥50,000〜
                スタンダードプラン：30秒動画＋BGM／￥120,000〜
                フルオーダープラン：60秒動画＋撮影・編集／￥250,000〜 ▷
                納品フロー ① ヒアリング → ② 企画提案 → ③ 制作開始 → ④ 初稿確認 →
                ⑤ 納品 → ⑥ LEDで配信
              </p>
            </div>
          </section> */}

          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl">制作〜納品までの流れ</h2>

            <ol className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-10">
              {[
                {
                  title: "お問い合わせ",
                  description:
                    "まずはお気軽にご相談ください。内容やご要望をお伺いします。",
                },
                {
                  title: "ヒアリング・お打ち合わせ",
                  description:
                    "目的やターゲット、予算感などを詳細にお聞きします。",
                },
                {
                  title: "ご提案",
                  description:
                    "ヒアリングをもとに、最適なプランをご提案いたします。",
                },
                {
                  title: "正式発注",
                  description:
                    "内容にご納得いただけましたら、ご契約・発注となります。",
                },
                {
                  title: "制作開始",
                  description:
                    "スケジュールに沿って映像やデザインの制作を開始します。",
                },
                {
                  title: "映像チェック",
                  description:
                    "仮仕上げの映像をご確認いただき、修正があれば対応します。",
                },
                {
                  title: "納品",
                  description: "最終確認後、完成データを納品いたします。",
                },
                {
                  title: "LEDで配信",
                  description:
                    "納品したコンテンツをLEDビジョンで配信・運用します。",
                },
              ].map((step, i) => (
                <li key={i} className="relative flex-1">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="text-sm md:text-base flex items-center justify-center mb-2">
                      {i + 1}
                    </div>

                    <h5 className="text-lg md:text-2xl text-yellow-300 font-mincho font-semibold mb-3">
                      {step.title}
                    </h5>

                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="mt-5 md:mt-10 text-center">
          <Link href="/">
            <Button>TOPへ戻る</Button>
          </Link>
        </div>

        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default ContentsPage;
