import { X, Check } from "lucide-react";
import { ArrowRight } from "lucide-react";

import React, { useEffect, useRef } from "react";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BackgroundImages } from "../../../components/BackgroundImage";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";

import { mainData } from "../../../data/main";
import { blogData } from "../../../data/blog";
import { caseData } from "../../../data/cases";

export const metadata: Metadata = {
  title: `${blogData[0].title} | ブログ`,
  description: blogData[0].description,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ブログ", href: "/blog" },
          { label: `${blogData[0].title}` },
        ]}
      />

      <main className="flex-1 [scroll-behavior:smooth]">
        <article className="blog container max-w-5xl pt-16 md:pt-20">
          <h1>
            {blogData[0].title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < blogData[0].title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <div className="flex justify-between items-center mb-10 md:mb-16">
            <p className="!text-xs mb-3 md:mb-5 -mt-5">
              {blogData[0].category.map((cat: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300/20 text-yellow-300 font-bold !text-xs px-1.5 py-1 rounded mr-1.5"
                >
                  {cat}
                </span>
              ))}
            </p>

            <div className="text-gray-400 group-hover:text-white/80 transition-all text-xs md:text-sm">
              <time dateTime={blogData[0].date}>{blogData[0].date}</time>
            </div>
          </div>

          <section>
            <p className="mb-10 md:mb-16">
              近年、ショッピングモールやビルのガラス面などで、外からでも中からでも視界を遮らない映像演出を見かけたことはありませんか？
              <br />
              それは「{mainData.keyWords}
              」と呼ばれる、ガラスに貼る新世代のディスプレイかもしれません。
              <br />
              <br />
              この記事では、
              <br />
              ・「{mainData.keyWords}ってそもそも何？」
              <br />
              ・「どんな仕組みで映像が映るの？」
              <br />
              ・「普通のLEDビジョンと何が違うの？」
              <br />
              という疑問をお持ちの方に向けて、仕組み・特徴・導入メリット・活用事例までわかりやすく解説します。
              <br />
              ぜひ、自社で{mainData.keyWords}
              を設置する際のご参考になれば幸いです。
            </p>

            <div className="relative w-full pb-[56.25%]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/film09.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="index md:w-2/3 mx-auto bg-white/10 backdrop-blur-sm p-10 md:p-20">
            <p className="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-6 md:mb-10">
              目 次
            </p>
            <ul className="list-decimal ml-5 space-y-6">
              <li>
                <Link href="#section01">
                  <span>集客力を劇的に変える ─ 高輝度 {mainData.keyWords}</span>
                </Link>
              </li>

              <li>
                <Link href="#section02">
                  <span>透明フィルム型LEDとは？</span>
                </Link>
              </li>

              <li>
                <Link href="#section03">
                  <span>{mainData.keyWords}の技術的な仕組み</span>
                </Link>
              </li>

              <li>
                <Link href="#section04">
                  <span>透明フィルム型LEDの主な特徴</span>
                </Link>
              </li>

              <li>
                <Link href="#section05">
                  <span>現状の課題</span>
                </Link>
              </li>

              <li>
                <Link href="#section06">
                  <span>使用例と活用シーン</span>
                </Link>
              </li>

              <li>
                <Link href="#section07">
                  <span>透明フィルム型LEDの仕様</span>
                </Link>
              </li>

              <li>
                <Link href="#section08">
                  <span>導入するメリット</span>
                </Link>
              </li>

              <li>
                <Link href="#section09">
                  <span>選ばれる理由・他商材との比較</span>
                </Link>
              </li>

              <li>
                <Link href="#section10">
                  <span>まとめ</span>
                </Link>
              </li>
            </ul>
          </section>

          {/* 集客力を劇的に変える ─ 高輝度 {mainData.keyWords} */}
          <section id="section01">
            <h2>
              <span></span>
              集客力を劇的に変える
              <br className="sm:hidden" /> ─ 高輝度 {mainData.keyWords}
            </h2>

            <div className="flex justify-center mx-auto my-10 md:my-16">
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/film01.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 font-mincho text-nowrap mb-8 md:mb-12">
                通りすがりの一瞬を、確実に掴む。
              </p>
              <p>
                そんな広告運用を目指すなら、{mainData.keyWords}
                がベストな選択です。
                <br />
                明るい場所でも、見やすく鮮やかな映像で訴求力は段違い。
                <br />
                映像・音声・文字情報を組み合わせた多彩な演出が可能な本機は、集客・情報発信に革新をもたらします。
              </p>
            </div>
          </section>

          {/* 透明フィルム型LEDとは？ */}
          <section id="section02">
            <h2>
              <span></span>
              {mainData.keyWords}とは？
            </h2>

            <div className="mb-10 md:mb-16">
              <h3>1. 技術の仕組み（原理や構造）</h3>

              <div className="flex flex-col md:flex-row gap-8 ml-3 md:ml-5">
                <div className="order-2 md:order-1 md:w-4/5">
                  <p>
                    {mainData.keyWords}
                    非常に薄い透明フィルムに微細なLEDチップを均一に配置した
                    <strong>次世代ディスプレイ技術</strong>です。
                    <br />
                    <br />
                    このフィルムは、ガラスやアクリルなどの透明素材に
                    <strong>直接貼り付けて使用</strong>
                    し、ディスプレイとして機能しながらも視界を遮ることがありません。
                    <br />
                    フィルム自体は高い透過率を持ち、映像や情報を表示する際には、配置されたLEDチップが
                    <strong>高輝度で発光</strong>
                    して鮮やかな映像を形成します。
                    <br />
                    LEDチップ同士の間隔は非常に細かく設計されており、
                    <strong>光の透過性を損なわず</strong>
                    に表示性能を両立している点が特長です。
                    <br />
                    <br />
                    この技術は、微細なLED構造を活かすことで、従来の大型ディスプレイでは実現が難しかった
                    <strong>「透明性」</strong>
                    と、<strong>「高解像度表示」</strong>
                    の両立を可能にしています。
                  </p>
                </div>
                <div className="order-1 md:order-2 md:w-1/5">
                  <div className="relative">
                    <Image
                      src="/images/products06.png"
                      alt=""
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 md:mb-16">
              <h3>2. 通常のLEDディスプレイとの違い</h3>

              <div className="flex flex-col md:flex-row gap-8 ml-3 md:ml-5">
                <div className="order-2 md:order-1 md:w-3/5">
                  <p>
                    通常のLEDディスプレイと{mainData.keyWords}
                    ディスプレイの最大の違いは、設置方法と空間への影響にあります。
                    <br />
                    <br />
                    一般的なLEDディスプレイは、密集したLED素子を搭載したパネルをキャビネットの前面に設置するため、映像表示時は
                    <strong>全面が光で覆われ、背後が完全に遮られる構造</strong>
                    です。
                    <br />
                    そのため、設置には十分な奥行きや構造補強が必要となり、空間設計や導線に制約が生まれることが少なくありません。
                    <br />
                    <br />
                    一方、{mainData.keyWords}
                    は、フィルムに直接 LED素子が搭載されているため、
                    <strong>
                      極薄フィルムをガラスやアクリルなどの透明面に直接貼り付けるだけ
                    </strong>
                    で設置可能です。
                    <br />
                    物理的なスペースをほとんど必要とせず、設置面の透過性を活かしたまま情報発信ができるため、空間デザインや景観を損なうことなく活用できます。
                    <br />
                    <br />
                    また、通常のLEDディスプレイは設置面を完全にふさいでしまいますが、
                    {mainData.keyWords}は
                    <strong>
                      透過性が高く、未使用時もガラス越しの視界を確保
                    </strong>
                    できます。
                    <br />
                    これにより、
                    <strong>
                      「映像表示時」と「未使用時」の空間演出にメリハリを与えられる
                    </strong>
                    点も、大きな魅力です。
                  </p>
                </div>

                <div className="order-1 md:order-2 md:w-2/5">
                  <div className="relative pb-[56.25%]">
                    <Image
                      src="/images/products07.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 md:mb-16">
              <h3>3. 「透明」であることによる独自の価値</h3>

              <div className="flex flex-col md:flex-row gap-8 ml-3 md:ml-5">
                <div className="order-2 md:order-1 md:w-3/5">
                  <p>
                    {mainData.keyWords}の最大の特徴は、その
                    <strong>高い透明性</strong>です。
                    <br />
                    <br />
                    ガラスや窓、アクリル板など透過素材に直接貼り付けられるため、ディスプレイとして機能しつつ空間を占有せず、景観を損なわずに使用できます。
                    <br />
                    この特性は、商業施設やオフィス、店舗のガラス面に設置しても内部の開放感を保ちながら、外部には美しい映像や広告を効果的に発信することが可能です。
                    <br />
                    <br />
                    さらに、昼間はガラス越しに外の景色をそのまま楽しめ、夜間や暗所では透明フィルムが鮮やかに輝き、映像を際立たせるダイナミックな演出も魅力の一つです。
                    <br />
                    また、インタラクティブ機能や動画コンテンツと連動させることで、より高度なエンターテインメントやマーケティング展開も可能です。
                    <br />
                    <br />
                    この<strong>高い透明性</strong>を活かした
                    効果的なブランディングや情報発信は、他のディスプレイ技術にはない独自の価値を提供します。
                  </p>
                </div>
                <div className="order-1 md:order-2 md:w-2/5">
                  <div className="relative pb-[56.25%]">
                    <Image
                      src="/images/about/02.jpg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center gap-10 mb-10 md:mb-16">
                <div>
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={700}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="/images/about/02.jpg"
                    alt=""
                    width={700}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mb-5 md:mb-10">
                {mainData.keyWords}
                は、ガラスやアクリルなどの透明素材に直接取り付けることで、視界を遮ることなく映像や情報を表示する
                <strong>革新的なディスプレイ技術</strong>です。
                <br />
                従来のLEDディスプレイや液晶ディスプレイ（LCD）とは異なり、透過性を保ちながらも高輝度・高解像度の映像表現を実現し、商業施設やオフィスビル、ショールーム、交通機関、イベント会場など、幅広いシーンで活用されています。
              </p>

              <p className="mb-5 md:mb-10">
                このディスプレイは、透明フィルム上に微細なLEDチップを均等に配置し、電子制によって映像を描き出す仕組みを採用しています。
                <br />
                LEDチップ間の隙間を最適化することで、{" "}
                <strong>視認性を確保</strong>しながら{" "}
                <strong>高い透明度</strong>を両立している点が大きな特徴です。
                <br />
                設置場所のデザインや空間の開放感を損なわず、広告・案内・装飾など多目的に情報を発信できるため、次世代の表示ソリューションとして高く評価されています。
              </p>

              <div className="flex justify-center mx-auto my-10 md:my-16">
                <div className="relative w-full pb-[56.25%]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/videos/film03.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <p className="mb-5 md:mb-10">
                {mainData.keyWords}
                は、<strong>薄型</strong>・<strong>軽量</strong>
                で、設置の自由度が高い点も大きな利点です。
                <br />
                一般的なディスプレイは壁面やスタンドへの固定が必要ですが、この技術を用いることで、窓ガラスやガラス製パーテーションなと、従来設置が難しかった場所への導入が可能になります。
                <br />
                空間を有効に活用し、建築デザインやインテリアの美観を損なうことなく情報発信が行えます。
              </p>

              <p className="mb-5 md:mb-10">
                さらに、{mainData.keyWords}
                は、<strong>明るい環境でも高い視認性を確保</strong>
                できる点も大きな特長です。
                <br />
                従来のプロジェクターを用いた透明スクリーンと異なり、LEDの自己発光技術により、直射日光下でも鮮明な映像表示を実現します。
                <br />
                屋外のショーウインドウや駅、空港など、公共空間での使用にも適しており、昼夜を問わずクリアな視認性を提供します。
              </p>

              <p className="mb-5 md:mb-10">
                技術の進化により、タッチスクリーン機能を搭載したインタラクティブディスプレイモデルも登場しています。
                <br />
                ユーザーが画面に直接触れて操作できるため、製品情報の検索、ショッピング、施設案内などの用途で活用の幅が広がっています
                <br />
                さらに、IoT（モノのインターネット）との連携により、遠隔操作によるコンテンツ管理や、センサー連動によるインタラクティブな情報表示など、次世代の活用方法も期待されています。
              </p>

              <p className="mb-5 md:mb-10">
                このように、{mainData.keyWords}
                は、従来のディスプレイ技術の枠を超え、さまざまな環境での情報表示や広告活用を可能にする新しいソリューションです。
                <br />
                省エネルギーかつ環境負荷が少なく、設置やメンテナンスも容易なことから、今後ますます幅広い分野での導入が進むと考えられています。
              </p>
            </div>
            <div>
              <p>
                また、<strong>COB （Chip on Board）技術</strong>
                を採用し、RGB発光素子を透明PETフィルムに直接搭載することで、LED素子を小型・薄型化しています。
                <br />
                これにより、 <strong>最小ピッチ3.75mm</strong>
                という微細な間隔でも高い透明度を維持し、より美しく自然な映像表現を実現しています。
              </p>
            </div>
          </section>

          {/* 透明フィルムLEDビジョンの技術的な仕組み */}
          <section id="section03">
            <h2>
              <span></span>
              {mainData.keyWords}の技術的な仕組み
            </h2>

            <div className="mb-10 md:mb-16">
              <h3>・透明なのに高輝度表示！最先端テクノロジー</h3>

              <div className="space-y-4 ml-5">
                <p>
                  {mainData.keyWords}
                  は、50～92%の透明度で、コンテンツを送出している時も光の透過ができます。
                  <br />
                  これにより、ガラス面をそのまま利用しながら、視界を遮ることなく鮮やかな映像を映し出します。
                  <br />
                  最新技術により、ディスプレイを点灯してない状態では、設置面の反対側がそのまま見える高い透明度を保ち、直射日光の中でも高い視認性を維持できます。
                </p>
                <p>
                  {mainData.keyWords}
                  は、従来のディスプレイ技術に比べ、スペースを節約しつつ効果的な広告表示を実現します。
                  <br />
                  屋外でも屋内でも使用でき、昼夜を問わず安定した表示が可能です。
                  <br />
                  これにより、コンテンツ映像と同時に内部の環境または製品を見せることができ、公共施設や商業施設など、幅広い業界で活用されるようになっています。
                </p>
              </div>
            </div>

            <div className="mb-10 md:mb-16">
              <h3>・空間を活かす！ガラス面に設置できる斬新なディスプレイ</h3>

              <div className="space-y-4 ml-5">
                <p>
                  {mainData.keyWords}
                  の最大の特徴は、<strong>ガラス面に直接設置</strong>
                  できることです。 <br />
                  これにより、建物の外観や内装を損なうことなく、広告や情報を表示することができます。
                  <br />
                  店舗のウィンドウやビルのガラスパネルに取り付けることで、スペースを有効活用しつつ、視覚的な効果を最大化できます。
                </p>
                <p>
                  また、ガラス面に設置するため、ディスプレイが目立ちすぎず、周囲の空間に調和します。
                  <br />
                  これにより、店舗や企業のブランドイメージを洗練された形で演出できます。
                  <br />
                  例えば、高級ブランド店では、店舗の外観を美しく保ちながら、動的な広告を表示することが可能になります。
                </p>
                <p>
                  空間デザインと情報発信を両立させる{mainData.keyWords}
                  は、都市型ビジネスにおいて非常に効果的なツールであり、今後ますます需要が高まることが予想されます。
                </p>
              </div>
            </div>
          </section>

          {/* 透明フィルムLEDビジョンの主な特徴 */}
          <section id="section04">
            <h2>
              <span></span>
              {mainData.keyWords}の主な特徴
            </h2>

            <div className="flex justify-center gap-5 mb-10 md:mb-16">
              <div className="flex justify-center">
                <Image
                  src="/images/blog/0003.jpg"
                  alt=""
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/about/02.jpg"
                  alt=""
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="mb-10 md:mb-16">
                <h3>1、透明性</h3>
                <p className="ml-5">
                  {mainData.keyWords}の最大の特徴は、
                  <strong>「透明性」</strong>にあります。
                  <br />
                  透明なフィルムにLEDチップが組み込まれているため、映像を表示していない部分はそのまま透明で、視界を遮りません。
                  <br />
                  このため、ガラス面や窓に設置しても、視界が確保され、空間全体の美観を損ねることがありません。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>2、高輝度・高解像度表示</h3>
                <p className="ml-5">
                  最先端のLED技術を活用しており、非常に<strong>高輝度</strong>・
                  <strong>高解像度</strong>
                  で映像を表示できます。
                  <br />
                  直射日光下でも高い視認性を誇り、屋外の過酷な環境でも明るく鮮明な映像を提供できます。
                  <br />
                  このため、広告や情報表示に適しており、夜間・昼間を問わず効果的に使用できます。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>3、薄型・軽量</h3>
                <p className="ml-5">
                  {mainData.keyWords}
                  は、非常に薄く、軽量であるため、設置が簡単で、既存の構造物に対しても負担をかけません。
                  <br />
                  さらに、軽量性を活かして、移動や設置変更が簡単に行えます。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>4、優れた熱放出と安定</h3>
                <p className="ml-5">
                  COBパッケージは、従来のIC内蔵型LEDより発熱が少なく、LEDフィルムの表面温度が周辺温度と約2°C程度高いため、室内での使用に適しています。
                  <br />
                  また、損傷しやすい敏感な部品の外部露出を最小化し、過酷な環境でも高い安定性を持ちます。
                </p>
              </div>
            </div>
          </section>

          {/* 現状の課題 */}
          <section id="section05">
            <h2>
              <span></span>
              現状の課題
            </h2>

            <div className="mb-10 md:mb-16">
              <div className="mb-10 md:mb-16">
                <h3>・伝えたい情報が埋もれていませんか？</h3>

                <ul className="ml-3 md:ml-5 space-y-3 md:space-y-4">
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      店舗や商業施設で、ディスプレイやポスターを活用しても視認性が悪く、通行人に気づかれにくい。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      従来のLEDビジョンでは、設置場所に制約があり、効果的な位置に配置できない。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      内装や空間デザインの美観を損なうことで、ブランド価値が低下してしまう。
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>・従来のLEDビジョンの限界とは？</h3>

                <ul className="ml-3 md:ml-5 space-y-3 md:space-y-4">
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      一般的な液晶ディスプレイやLEDビジョンは、場所を取るため設置が難しい。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      既存のインテリアやガラス面と調和せず、視界を遮ってしまう。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-6 w-6 !text-red-600 flex-shrink-0 mt-1" />
                    <p>高額な導入コストや維持費がかかる。</p>
                  </li>
                </ul>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>・{mainData.keyWords}ならすべて解決！</h3>

                <ul className="ml-3 md:ml-5 space-y-3 md:space-y-4">
                  <li className="flex gap-2">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      透明なフィルムに映像を映し出し、空間を活かしたPRが可能。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      窓やガラス面に直接貼り付けられ、場所を取らずに設置可能。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      美しいデザインと高い視認性で、商業施設・イベントなどの集客力を向上。
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/about/07.jpg"
                alt=""
                width={700}
                height={300}
                className="object-cover"
              />
            </div>
          </section>

          {/* 使用例と活用シーン */}
          <section id="section06">
            <h2>
              <span></span>
              使用例と活用シーン
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 mb-10 md:mb-16">
              {caseData.slice(0, 4).map((cases_) => (
                <div>
                  <div className="flex justify-center">
                    <Image
                      src={cases_.image[0]}
                      alt={cases_.title}
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-yellow-300 my-5 md:my-8">
                    {cases_.title}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: cases_.description,
                    }}
                  />
                </div>
              ))}
            </div>
            {/* <div className="bg-gray-300 inline-block px-10 py-4 mt-10">
                <p>
                  関連記事 :
                  <span className="ml-2">
                    <a
                      href=""
                      className="border-b border-black hover:border-gray-500 transition-colors"
                    >
                      {mainData.keyWords}の主な特徴と技術的な仕組み
                    </a>
                  </span>
                </p>
              </div> */}
            <div className="flex justify-center">
              <div className="inline-block mt-10">
                <Button>
                  使用例と活用シーンをもっと見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* 透明フィルムLEDビジョンの仕様 */}
          <section id="section07">
            <h2>
              <span></span>
              {mainData.keyWords}の仕様
            </h2>

            <div>
              <div className="flex justify-center mb-10 md:mb-20">
                <Image
                  src="/images/about/01.jpg"
                  alt=""
                  width={700}
                  height={300}
                  className="object-cover"
                />
              </div>

              <div className="mb-10 md:mb-16">
                <h3>1、透過率（透明度）｜ 視界を邪魔せずに空間演出に最適</h3>
                <p>
                  透明フィルム型LEDの最大の特徴はその「透明度」。
                  <br />
                  製品によって異なりますが、おおよそ50〜92%の透過率を実現しています。
                  <br />
                  映像を映し出していないときはほぼガラスそのもの。
                  <br />
                  ディスプレイの存在感を感じさせないため、ショーウィンドウや展示空間でも自然な雰囲気を維持できます。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>
                  2、画素ピッチ（Pixel Pitch）｜
                  映像の美しさを左右するキーポイント
                </h3>
                <p>
                  画素ピッチとは、LED同士の間隔のこと。数字が小さいほど、より高精細な映像を表示できます。
                  <br />
                  ・屋内用：3.75mm〜程度
                  <br />
                  ・屋外用：6〜10mm程度
                  <br />
                  設置環境と表示内容に応じて適切なピッチを選ぶことで、文字の可読性やグラフィックの鮮明度が大きく変わります。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>3、明るさ（輝度）｜ 昼間の屋外でもしっかり見える</h3>
                <p>
                  透明ディスプレイでも明るさは非常に重要な要素です。
                  <br />
                  一般的に、透明LEDディスプレイの輝度は1000〜5000cd/m²が目安。
                  <br />
                  屋内でも十分な視認性があり、日差しの強い屋外でも見やすい高輝度モデルも存在します。
                  <br />
                  使用環境に応じて、輝度の自動調整機能が付いた製品も人気です。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>4、厚さ・重さ ｜ 建物に負担をかけない設計</h3>
                <p>
                  透明フィルム型LEDは非常に薄く、厚さはわずか1〜3mm、重さも1〜3kg/m²程度と超軽量。
                  <br />
                  従来のLEDビジョンと比べて大幅にスリムなため、ビルのガラス面や商業施設の窓面にも安全に設置可能です。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>5、表示色と映像再現 ｜ フルカラーでインパクトある演出を</h3>
                <p>
                  RGB（赤・緑・青）のLED素子によって、フルカラーで映像や写真、文字の表示が可能です。
                  <br />
                  鮮やかでインパクトある映像表現ができるため、広告・イベント・演出など幅広い用途に対応します。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>6. 制御方法 ｜ Wi-FiやUSBなど多様な入力方式に対応</h3>
                <p>
                  透明LEDディスプレイの多くは、以下のような柔軟な制御方式に対応しています。
                  <br />
                  ・Wi-Fi／LAN接続
                  <br />
                  ・USBメモリ
                  <br />
                  ・クラウドやPCソフト連携
                  <br />
                  また、動画（MP4,AVIなど）や静止画（JPG,PNG）など、一般的なフォーマットに対応。
                  <br />
                  コンテンツの更新やスケジューリングも簡単に行えるのが魅力です。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>7、 設置方式 ｜ ガラスに直接貼れる</h3>
                <p>
                  最大の利点は、ガラスに直接貼り付けられる設置の手軽さ。
                  <br />
                  ディスプレイ裏面に粘着層があり、工具を使わずに施工可能。
                  <br />
                  また、曲面ガラスにも対応する柔軟素材のモデルもあるため、設計の自由度が高く、建築意匠を壊しません。
                </p>
              </div>
            </div>
          </section>

          {/* 導入するメリット */}
          <section id="section08">
            <h2>
              <span></span>
              導入するメリット
            </h2>

            <div>
              <div className="mb-10 md:mb-16">
                <h3>・空間デザインを損なわず、訴求力を向上</h3>

                <p className="ml-4 md:ml-5">
                  {mainData.keyWords}
                  は、ガラスやアクリルなどの透明な面に直接設置できるため、空間の開放感を維持しながら情報発信が可能です。
                  <br />
                  特に、高級感のあるブティック、ホテル、レストラン、オフィスエントランスなどでは、デザイン性を損なうことなく、ブランドイメージを保ちながら訴求力を高めることができます。
                  <br />
                  通常のLEDディスプレイのように壁を塞ぐことがないため、店舗の雰囲気を壊さずに、洗練された演出が可能です。
                  <br />
                  また、映像コンテンツを動的に変化させることで、シンプルなデザインの店舗でも目を引くインパクトのある演出ができ、視認性の向上につながります。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>・目を引く演出で集客力UP</h3>

                <p className="ml-4 md:ml-5">
                  {mainData.keyWords}
                  は、従来の固定看板やポスターと異なり、映像やアニメーションを活用したダイナミックな表現が可能です。
                  <br />
                  特に、ショッピングモールや繁華街のウィンドウディスプレイでは、遠くからでも視認しやすく、通行人の興味を引きやすいという特長があります。
                  <br />
                  例えば、昼間の明るい時間帯でも高輝度なLEDが鮮明に映像を映し出すため、広告効果が高まります。
                  <br />
                  さらに、タッチパネル機能やセンサー技術を組み合わせることで、インタラクティブなコンテンツを提供でき、より効果的なマーケティングが可能になります。
                  <br />
                  ユーザーが自らコンテンツを操作することで、エンゲージメントが向上し、購買意欲の促進につながるでしょう。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>・設置自由度が高く、施工も簡単</h3>

                <p className="ml-4 md:ml-5">
                  従来の大型LEDビジョンやLCDディスプレイは、設置に大掛かりな工事が必要な場合が多く、設置場所が限られていました。
                  <br />
                  しかし、{mainData.keyWords}
                  は、軽量で柔軟なフィルムタイプのため、窓ガラスやアクリルパネルに直接貼り付けるだけで使用できます。
                  <br />
                  これにより、設置の自由度が大幅に向上し、スペースを最大限に活用することができます。
                  <br />
                  また、施工に関しても、特殊なフレームや大型スタンドを必要とせず、比較的短期間での設置が可能です。
                  <br />
                  特に、リニューアル工事や店舗の改装時など、時間的な制約がある場合にも適しており、スピーディに導入できます。電源や配線の設計もシンプルなため、追加の工事費用を抑えることができ、メンテナンスも容易です。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>・簡単な設置で手軽に導入可能</h3>

                <p className="ml-4 md:ml-5">
                  {mainData.keyWords}
                  は、従来の大型LEDディスプレイと比べて非常に軽量かつ柔軟性があり、特別な金具やフレームを使わず、ガラス面に直接貼り付けるだけで設置が完了します。
                  <br />
                  フィルム自体に粘着層があるため、比較的簡単に取り付けが可能で、施工時間や人件費を大幅に削減できます。
                  <br />
                  特に、店舗のショーウィンドウやオフィスのガラスパーティションなど、既存の構造物を活かしたまま映像演出を加えられるのが大きな特長です。
                  <br />
                  また、取り外しや再設置も簡単に行えるため、季節やイベントに応じて柔軟に運用できます。
                  <br />
                  こうした利便性から、短期イベントでの使用はもちろん、長期設置にも適しており、多くの商業施設や企業に選ばれています。
                </p>
              </div>
            </div>
          </section>

          {/* 選ばれる理由・他商材との比較 */}
          <section id="section09">
            <h2>
              <span></span>
              選ばれる理由・他商材との比較
            </h2>

            <div className="mb-10 md:mb-16">
              <p className="mb-5 md:mb-10">
                {mainData.keyWords}
                は、従来の液晶ディスプレイやプロジェクション型ディスプレイと比較して、いくつかの点で優れています。
                <br />
                例えば、液晶ディスプレイはどうしても厚みがあり、視界を遮るため、スペースを取ってしまうことがあります。
                <br />
                プロジェクション型ディスプレイも設置場所に制約があり、特に光の反射や映像の鮮明さが問題になる場合があります。
              </p>
              <p>
                一方で、{mainData.keyWords}
                は、透過性を保ちつつ高輝度で鮮明な映像を表示できるため、空間を最大限に活用できるだけでなく、他のディスプレイ技術に比べて設置の自由度が高く、より柔軟な運用が可能です。
              </p>
            </div>

            <div className="mb-10 md:mb-16">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-400 border-r-0 p-4 text-left"></th>
                    <th className="border border-yellow-300 p-4 text-center text-yellow-300">
                      {mainData.keyWords}
                    </th>
                    <th className="border border-gray-400 p-4 text-center">
                      従来のLEDビジョン
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-gray-400 border-r-0 p-4 font-semibold">
                      設置場所
                    </td>
                    <td className="border border-yellow-300 p-4 text-center">
                      <Check className="h-6 w-6 text-green-600 mx-auto" />
                      <span className="block mt-1">
                        既存のガラス面に設置可能
                      </span>
                    </td>
                    <td className="border border-gray-400 p-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                      <span className="block mt-1">専用スペースが必要</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-400 border-r-0 p-4 font-semibold">
                      視界の確保
                    </td>
                    <td className="border border-yellow-300 p-4 text-center">
                      <Check className="h-6 w-6 text-green-600 mx-auto" />
                      <span className="block mt-1">透明で視界を遮らない</span>
                    </td>
                    <td className="border border-gray-400 p-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                      <span className="block mt-1">不透明で視界を遮る</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-400 border-r-0 p-4 font-semibold">
                      設置工事
                    </td>
                    <td className="border border-yellow-300 p-4 text-center">
                      <Check className="h-6 w-6 text-green-600 mx-auto" />
                      <span className="block mt-1">簡易な施工で早い</span>
                    </td>
                    <td className="border border-gray-400 p-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                      <span className="block mt-1">
                        大掛かりな工事が必要で遅い
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-400 border-r-0 p-4 font-semibold">
                      コスト
                    </td>
                    <td className="border border-yellow-300 p-4 text-center">
                      <Check className="h-6 w-6 text-green-600 mx-auto" />
                      <span className="block mt-1">比較的 低コスト</span>
                    </td>
                    <td className="border border-gray-400 p-4 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                      <span className="block mt-1">高額な初期投資が必要</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* まとめ */}
          <section id="section10" className="scroll-margin-top-40">
            <h2>
              <span></span>
              まとめ
            </h2>

            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <p className="mb-5 md:mb-8">
                  {mainData.keyWords}
                  は、最新のディスプレイ技術を駆使し、視界を遮らずに高品質な映像を提供できる革新的な製品です。
                  <br />
                  商業施設や公共施設、企業のブランディングや広告に最適で、今後ますます多くの分野で活用されることが期待されています。
                </p>
                <p className="mb-5 md:mb-8">
                  その特長と利点を活かし、他のディスプレイ技術と比較して、ユニークで効果的な情報発信手段として注目されています。
                  <br />
                  貴社のビジネスにも{mainData.keyWords}
                  を導入して、視覚的なインパクトを最大限に活かしませんか？
                  <br />
                  設置方法や活用事例など、詳しく知りたい方はぜひお気軽にお問い合わせください。
                  <br />
                  専門スタッフが最適な導入プランをご提案いたします。
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/about/08.jpg"
                  alt=""
                  width={600}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </article>

        <Cta />

        <div className="mb-10">
          <Link href="/blog">
            <Button>
              ブログ一覧へ
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
