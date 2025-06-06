import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BackgroundImages } from "../../../components/BackgroundImage";
import { Breadcrumb } from "../../../components/blog/Breadcrumb";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";
import { Section, SubSection } from "@components/blog/Section";
import { Tag } from "../../../components/blog/Tag";
import { Date } from "@components/blog/Date";
import { TableOfContents } from "@components/blog/TableOfContents";

import { mainData } from "../../../data/main";
import { blogData } from "../../../data/blog";
import { caseData } from "../../../data/cases";

export const metadata: Metadata = {
  title: `${blogData[2].title} | ブログ`,
  description: blogData[2].description,
};

export default async function AboutPage() {
  const sectionTitles = [
    `はじめに`,
    `${mainData.keyWords}とは？その仕組みと特徴`,
    `なぜ今、「透けるディスプレイ広告」が注目されているのか`,
    `${mainData.keyWords}ディスプレイで"差がつく"広告の魅せ方5選`,
    `導入メリットと事例に学ぶ効果`,
    `導入の流れと注意点`,
    `どんな業種・ビジネスに向いている？`,
    `まとめ`,
  ];

  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ブログ", href: "/blog" },
          { label: `${blogData[2].title}` },
        ]}
      />

      <main className="flex-1 [scroll-behavior:smooth]">
        <article className="blog container max-w-5xl pt-10 md:pt-20">
          <h1>
            {blogData[2].title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < blogData[2].title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <div className="flex justify-between items-center">
            <p>
              {blogData[2].category.map((cat: string, index: number) => (
                <Tag key={index} label={cat} />
              ))}
            </p>
          </div>

          <Date date={blogData[2].date} />

          <div className="flex justify-center mx-auto mb-10 md:mb-16">
            <div className="relative">
              <Image
                src={`${blogData[2].image}`}
                alt=""
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>
          </div>

          <Section id="introduction" title={sectionTitles[0]}>
            <div className="space-y-4 md:space-y-8 mb-10 md:mb-16">
              <p>
                「広告をもっと目立たせたい」「店頭での印象をアップしたい」「空間のデザイン性を損なわずにPRしたい」
                <br />
                ——そんな課題を抱える店舗オーナーやイベント企画者、展示会の出展企業が今、注目しているのが
                "{mainData.keyWords}ディスプレイ" です。
              </p>
              <p>
                従来のLEDビジョンと異なり、透明なフィルム状のLEDを使うことで、ディスプレイ自体の存在を感じさせずに映像や情報を発信できるという革新的な技術。
                <br />
                この"透けるLED"が生み出すインパクトと利便性が、次世代の広告・集客手段として支持を集めています。
              </p>
              <p>
                この記事では、透明フィルム型LEDの仕組みや導入メリット、活用事例に加えて、他社と差がつく"広告の魅せ方"の具体例もご紹介。
                <br />
                空間演出と視認性を両立させた、最先端の集客方法をわかりやすく解説します。
              </p>
            </div>
          </Section>

          <TableOfContents items={sectionTitles} />

          <Section id="section01" title={sectionTitles[1]}>
            <p>
              {mainData.keyWords}
              とは、LEDチップを透明なフィルムに配列し、背面の景色や構造を遮らずに映像を表示できるディスプレイ技術です。
            </p>

            <div className="my-5 md:my-8">
              <p className="font-bold text-[1.3em] mb-2">【特徴】</p>
              <ul className="list-disc ml-5 space-y-2 md:space-y-4 [&_span]:text-[1.3em] [&_span]:font-bold [&_span]:text-yellow-300">
                <li>
                  <span>高透過率</span>（70〜90％）：後ろがしっかり見える
                </li>
                <li>
                  <span>軽量・薄型</span>
                  ：1平方メートルあたり2〜4kgと非常に軽量
                </li>
                <li>
                  <span>柔軟性</span>：窓や曲面にも貼れる柔軟構造
                </li>
                <li>
                  <span>高輝度</span>：日中の屋外でも視認性が高い
                </li>
              </ul>
            </div>

            <p>
              このような特性により、ガラス面や大型ウィンドウ、展示会ブースなど、空間を活かした広告演出が可能になります。
            </p>
          </Section>

          <Section id="section02" title={sectionTitles[2]}>
            <div className="flex justify-center mx-auto my-10 md:my-16">
              <div className="relative">
                <Image
                  src="/images/blog/difference-film-led/01.png"
                  alt=""
                  width={900}
                  height={900}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="my-5 md:my-8">
              <p className="font-bold font-mincho text-[1.4em] mb-5 md:mb-10">
                【背景となる3つのトレンド】
              </p>

              <SubSection title="1. 街並み・建築デザインとの共存">
                <p>
                  過剰な装飾や視界の妨げが嫌われる時代。
                  <br />
                  建物の美しさや街並みを損なわずに、より自然な広告演出を追求するニーズが高まっています。
                </p>
              </SubSection>

              <SubSection title="2. SNS時代の「映え」">
                <p>デジタルと空間を融合させる演出が拡散されやすい</p>
              </SubSection>

              <SubSection title="3. SDGs・環境意識の高まり">
                <p>省エネ・省資源の訴求ポイント</p>
              </SubSection>

              <p>
                結果、<strong>「目立ちすぎないのに印象に残る」広告</strong>
                として、高い評価を得ています。
              </p>
            </div>
          </Section>

          <Section id="section03" title={sectionTitles[3]}>
            <p className="mb-5 md:mb-10">
              透明フィルム型LEDは単なる表示装置ではありません。
              <br />
              <span>映像演出×空間演出×顧客体験</span>
              を融合させることで、他社と圧倒的な差別化が可能です。
            </p>

            <SubSection title="1. 透けるショーウィンドウ × 動くモデル">
              <p>
                実店舗のガラス窓に透明LEDを貼り付け、映像内に"仮想モデル"を登場させて商品を着用・紹介。
                <br />
                現実の展示商品と連動し、通行人に"体験"を与える仕掛けに。
              </p>
            </SubSection>

            <SubSection title="2. 昼と夜でコンテンツを自動切替">
              <p>
                時間帯によって表示内容を切り替えることで、昼は"情報"、夜は"演出"に特化。
                <br />
                営業時間外も視覚的インパクトを継続し、無人でもブランディングが可能。
              </p>
            </SubSection>

            <SubSection title={`3. 展示会ブースで"透明な壁"を使った没入体験`}>
              <p>
                囲い壁に透明LEDを使用し、内部からは外が見える一方、外側からは動画演出で引き込み。
                <br />
                没入感と開放感を同時に実現。
              </p>
            </SubSection>

            <SubSection title="4. リアルタイム連動コンテンツ">
              <p>
                SNS投稿、天気、気温、時間帯、POSデータと連動し、リアルタイムに表示内容を変化。
                <br />
                注目度と話題性をアップ。
              </p>
            </SubSection>

            <SubSection title="5. 季節ごとの空間演出×キャンペーン訴求">
              <p>
                ガラス窓全面を春は桜、夏は水流、冬はイルミ風など季節演出しつつ、中央にキャンペーン告知やQRを表示。
                <br />
                通行人の足を止め、店舗内へ誘導。
              </p>
            </SubSection>
          </Section>

          <Section id="section04" title={sectionTitles[4]}>
            <SubSection title="導入によるメリット">
              <ul className="list-disc ml-5 space-y-2 md:space-y-4 [&_span]:text-[1.3em] [&_span]:font-bold [&_span]:text-yellow-300">
                <li>
                  <span>集客率の向上</span>：
                  映像演出により、滞留時間と入店率アップ
                </li>
                <li>
                  <span>空間ブランディング</span>
                  ：設計・店舗デザインと調和した世界観作り
                </li>
                <li>
                  <span>話題性・SNS拡散</span>：ユーザーによる撮影・投稿を促進
                </li>
                <li>
                  <span>低運用コスト</span>：LED特性による省エネ・長寿命
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section id="section05" title={sectionTitles[5]}>
            <p className="font-bold font-mincho text-[1.4em] mb-5 md:mb-10">
              【導入ステップ】
            </p>

            <SubSection title="設置箇所の選定（ガラス・開口部・外壁）">
              <p></p>
            </SubSection>
            <SubSection title="要望ヒアリング・現地調査">
              <p></p>
            </SubSection>
            <SubSection title="コンテンツ企画（動画・画像・動的表示）">
              <p></p>
            </SubSection>
            <SubSection title="本体の取り付け・接続設定">
              <p></p>
            </SubSection>
            <SubSection title="運用開始とサポート">
              <p></p>
            </SubSection>

            <p className="font-bold font-mincho text-[1.4em] mb-5 md:mb-10">
              【導入における注意点と確認事項】
            </p>
            <p className="mb-10 md:mb-16">
              また、
              透明LEDビジョンを効果的に導入するためには、事前にいくつかの確認が必要です。
              <br />
              以下の5つのポイントを押さえておくことで、設置後のトラブルや無駄なコストを回避し、より効果的な活用が可能になります。
            </p>

            <SubSection title="1. 使用する面積はどのくらいか？">
              <p>
                設置するガラス面のサイズや形状に合わせて{mainData.keyWords}
                の必要面積を正確に把握することが大切です。
                <br />
                面積により最適なピッチや輝度が変わるため、事前の確認が導入成功の鍵を握ります。
              </p>
            </SubSection>

            <SubSection title="2. 設置場所は屋内？屋外？">
              <p>
                設置環境によって必要な防水・防塵性能や明るさのレベルが異なります。
                <br />
                たとえば、屋外では日光下でも視認性を確保するため高輝度モデルが必要となる場合もあります。
                <br />
                また、屋外ではガラスの透明度や照明条件に応じて、適切な輝度を選択することが重要です。
                <br />
                （※ {mainData.keyWords}
                は、屋内での使用を推奨しております。）
              </p>
            </SubSection>

            <SubSection title="3. 利用期間は短期？長期？">
              <p>
                短期イベント用なのか、常設で長期運用するのかにより、選定すべき製品の仕様や設置方法が変わります。
                <br />
                当社ではご相談も無料でお受け付けしております。詳しくはお問い合わせください。
              </p>
            </SubSection>

            <SubSection title="4. 表示コンテンツは静止画？動画？">
              <p>
                表示内容によって、適切な解像度やリフレッシュレートの選定が重要になります。
                <br />
                映像の動きが多い場合は、高性能モデルを選ぶことでストレスのない視聴体験を提供できます。
              </p>
            </SubSection>

            <SubSection title="5. 映像コンテンツの制作も依頼したいか？">
              <p>
                映像を最大限に活かすためには、
                <strong>製品特性に最適化された専用コンテンツ</strong>
                が必要です。
                <br />
                当社では、透明LEDディスプレイに最適なプロモーション動画や静止画バナーの制作も一貫して承っております。
              </p>
            </SubSection>

            <div className="my-10 md:my-20">
              <Link href="/blog">
                <Button>
                  コンテンツ制作について
                </Button>
              </Link>
            </div>

            <p>
              透明フィルム型LEDビジョンの導入を検討する際は、"どこに、どれくらいの期間、どのような映像を表示するか"を事前に明確にしておくことが重要です。
              <br />
              当社では、
              <strong>
                {mainData.keyWords}
                の販売・施工から、映像コンテンツの企画・制作までを一貫対応
              </strong>
              。
              <br />
              技術とクリエイティブの両面から、お客様のデジタルサイネージ導入を成功に導きます。
            </p>
          </Section>

          <Section id="section06" title={sectionTitles[6]}>
          <div className="grid gap-10 xs:gap-8 grid-cols-1 xs:grid-cols-2 mb-16 md:mb-24">
              {caseData.slice(0, 6).map((case_) => (
                <div key={case_.id} className="">
                  <div className="flex items-center justify-center mb-3 md:mb-5">
                    <Image
                      src={case_.image[0]}
                      alt={case_.title}
                      width={400}
                      height={400}
                      className="object-cover w-full"
                      priority
                    />
                  </div>
                  <h3 className="text-xl md:text-xl text-yellow-300 !mb-3">
                    {case_.title}
                  </h3>
                  <p
                    className="px-2"
                    dangerouslySetInnerHTML={{
                      __html: case_.description
                        // .replace(/\n/g, "<br />")
                        .replace(/<strong>/g, "<strong>"),
                    }}
                  ></p>
                </div>
              ))}
            </div>

            <Link href="/cases">
                <Button>
                  活用事例を詳しく見る
                </Button>
              </Link>
          </Section>

          <Section id="section07" title={sectionTitles[7]}>
            <p className="mb-10 md:mb-16">
              透明フィルム型LEDは、空間と広告を融合させ、
              <strong>"体験型広告"へと進化させるツール</strong>です。
              <br />
              単なる"表示装置"ではなく、
              <strong>"人の心を動かすメディア"</strong>
              として差別化に貢献します。
              <br />
              ✅ 他社に差をつける広告演出をしたい方
              <br />
              ✅ 施工事例や活用方法を知りたい方
              <br />
              ✅ 費用感・導入方法を相談したい方
              <br />
              まずは無料相談で、御社に最適な導入プランをご提案いたします。
              空間を、魅せ場に変える。
              透明LEDで、集客とブランド価値の次元を上げましょう。
            </p>
          </Section>
        </article>

        <Cta />

        <div className="my-10 md:my-20">
          <Link href="/blog">
            <Button>ブログ一覧へ</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
