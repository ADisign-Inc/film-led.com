import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";

import { mainData } from "../../data/main";

const ContentsPage = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl mx-auto py-28 md:py-40">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-20">
              映像が空間を変える。
            </h1>

            <p className="text-lg md:text-xl mb-8 md:mb-20">
              透明LEDに最適化されたコンテンツ動画を、企画から制作まで一括対応。
              <br />
              LEDとコンテンツ映像、セットで集客効果を最大化。
            </p>

            <Link href={mainData.contact.url}>
              <Button variant="default">
                無料相談はこちら
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center z-[-1]"
              style={{ backgroundImage: "url('/images/led-sample-bg.jpg')" }}
            />
          </div>

          {/* Importance Section */}
          <section className="py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              {mainData.keyWords}の効果を最大化するのは「映像の質」
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                高輝度・高透明度を活かすには、専用に最適化された動画コンテンツが必要です。光の透過性や背景との調和、映像の動きや色の演出が「通行人の視線を奪う」効果を生み出します。
              </p>
              <p>
                私たちは、{mainData.keyWords}
                の特性を理解した映像制作で、集客・販促効果を最大限に引き出します。
              </p>
              <p>
                圧倒的な視認性：昼間でもはっきり見える高輝度。映像次第で通行人の視線を一瞬で奪う。
                空間演出の主役に：音もナレーションもいらない。映像だけでブランド価値を表現。
                離脱率の低下：動的コンテンツにより、通行人の滞在時間が大幅アップ。記憶にも残る。
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-10">
              制作可能な動画の種類
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center mb-20">
              {[
                "商品・製品紹介動画",
                "イベント・キャンペーン映像",
                "モーショングラフィックス",
                "装飾用ループ映像",
                "インタラクティブ動画",
                "ショールーム/展示会映像",
              ].map((item) => (
                <div key={item} className="">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p>
              モーショングラフィックスとは、動きのない文章や画像、イラストなどの素材に動き（モーション）を与える技術をいいます
            </p>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              透明LED専用 映像制作 実績紹介
            </h2>
            <div className="max-w-3xl mx-auto text-center"></div>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              こんなお悩みありませんか？
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p>
                「映像は自分たちで作っていたけど、いまいち効果が出ない」
                「見栄えがする映像が作れない」
                「LEDに最適化された仕様が分からない」
                「広告代理店に任せているがコストが高すぎる」
                「制作会社とLED業者のやり取りが面倒」 →
                すべて、弊社がまるごと解決します。
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              LED映像に特化した、ワンストップ制作体制
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p>
                LED専門スタッフによる演出設計 撮影・編集・アニメーション対応
                LEDディスプレイへの最適化納品 映像＋ハード＋設置まで一貫対応可
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              料金プラン＆納品までの流れ
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p>
                ▷ 表示例（目安価格でもOK）
                ベーシックプラン：15秒静止映像／￥50,000〜
                スタンダードプラン：30秒動画＋BGM／￥120,000〜
                フルオーダープラン：60秒動画＋撮影・編集／￥250,000〜 ▷
                納品フロー ① ヒアリング → ② 企画提案 → ③ 制作開始 → ④ 初稿確認 →
                ⑤ 納品 → ⑥ LEDで配信
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-10">制作の流れ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "1. ヒアリング・お打ち合わせ",
                "2. ご提案",
                "3. 正式発注）",
                "4. 制作開始",
                "5. 映像チェック",
                "6. 納品",
                "7. LEDで配信",
              ].map((step, i) => (
                <div key={i} className="border-l-4 border-yellow-300 pl-4">
                  <p className="font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default ContentsPage;
