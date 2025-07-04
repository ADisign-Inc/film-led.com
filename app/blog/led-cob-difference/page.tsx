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

import { blogData } from "../../../data/blog";

export const metadata: Metadata = {
  title: `${blogData[3].title} | ブログ`,
  description: blogData[3].description,
};

export default async function AboutPage() {
  const sectionTitles = [
    `はじめに`,
    `LEDとは？基礎知識のおさらい`,
    `COB（Chip on Board）とは？`,
    `SMDとCOBの違いを比較`,
    `COB LED のメリット・デメリット`,
    `COBが活躍する具体的な用途`,
    `SMD、Mini LED、Micro LEDとの違い`,
    `COB 導入の際に気をつけるポイント`,
    `【まとめ】COB LEDは“映える”空間づくりの新常識`,
  ];

  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ブログ", href: "/blog" },
          { label: `${blogData[3].title}` },
        ]}
      />

      <main className="flex-1 [scroll-behavior:smooth]">
        <article className="blog container max-w-5xl pt-10 md:pt-20">
          <h1>
            {blogData[3].title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < blogData[3].title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <div className="flex justify-between items-center">
            <p>
              {blogData[3].category.map((cat: string, index: number) => (
                <Tag key={index} label={cat} />
              ))}
            </p>
          </div>

          <Date date={blogData[3].date} />

          <div className="flex justify-center mx-auto mb-10 md:mb-16">
            <div className="relative">
              <Image
                src={`${blogData[3].image}`}
                alt=""
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>
          </div>

          <Section id="introduction" title={sectionTitles[0]}>
            <div className="space-y-4 md:space-y-8">
              <p>
                「LED」と一口に言っても、その中にはさまざまな種類があります。
                <br />
                中でも近年注目されているのが
                <strong>「COB（Chip on Board）」</strong>と呼ばれる方式です。
                <br />
                従来のSMDタイプと何が違うのか、どんな場面で選ばれるのかなど、よくわからないという方も多いのではないでしょうか。
              </p>
              <p>
                本記事では、LEDの基本からCOBの仕組み、他の技術との違い、そして選び方までをわかりやすく解説いたします。
                <br />
                LEDディスプレイの導入やLEDサイネージの設置を検討している方は必見です。
              </p>
            </div>
          </Section>

          <TableOfContents items={sectionTitles} />

          <Section id="section01" title={sectionTitles[1]}>
            <div className="flex flex-col sm:flex-row justify-center gap-5 mx-auto mb-10 md:mb-16">
              <p className="md:w-4/5">
                LED（Light Emitting
                Diode/発光ダイオード）は、電流を流すと発光する半導体素子の一種で、
                <strong>
                  電気エネルギーを直接光に変換するエレクトロルミネッセンス（EL）現象を応用した
                </strong>
                照明・表示デバイスです。
                <br />
                一般的な白熱灯や蛍光灯とは異なり、フィラメントを加熱したり、ガス放電を利用することなく、物理的・化学的な反応によって光を発するため、効率や耐久性に優れています。
              </p>
              <div className="md:w-1/5 relative">
                <Image
                  src="/images/blog/led-cob-difference/01.webp"
                  alt=""
                  width={900}
                  height={900}
                  className="object-contain w-1/2 sm:w-full mx-auto"
                />
              </div>
            </div>

            <SubSection title="1. LEDの仕組み">
              <div className="flex flex-col sm:flex-row justify-center gap-5 mx-auto mb-10 md:mb-16">
                <p className="md:w-3/5">
                  LEDは主に
                  <strong>n型半導体とp型半導体の接合によって構成</strong>
                  され、これを<strong>pn接合</strong>と呼びます。
                  <br />
                  電圧を加えることで電子と正孔（ホール）が接合部で再結合し、その際に余分なエネルギーが光子（フォトン）として放出される――これがLEDの発光原理です。
                  <br />
                  発光する光の波長（＝色）は、この半導体のバンドギャップエネルギーによって決まり、
                  <strong>
                    材料により赤・緑・青・紫外線・赤外線などが生成
                  </strong>
                  されます。
                </p>
                <div className="md:w-2/5 relative">
                  <Image
                    src="/images/blog/led-cob-difference/PN-junction.webp"
                    alt=""
                    width={900}
                    height={900}
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </SubSection>

            <SubSection title="2. LEDの構造と種類">
              <p className="mb-4 md:mb-5">
                LEDチップ単体では微弱な光しか出せないため、通常は以下のような構造になっています。
              </p>

              <div className="flex flex-col md:flex-row justify-center mb-10 md:mb-16">
                <ul className="list-disc ml-5 md:ml-10 space-y-2 md:space-y-4 mb-10 md:mb-16 md:w-2/3">
                  <li>
                    <strong>チップ（発光素子）</strong>
                    ：GaN系やInGaN系の半導体が多く用いられる
                  </li>
                  <li>
                    <strong>基板・リードフレーム</strong>：放熱性や導電性を担う
                  </li>
                  <li>
                    <strong>蛍光体コーティング</strong>
                    ：青色LEDに黄色の蛍光体を重ねて白色を実現
                  </li>
                  <li>
                    <strong>レンズ・樹脂封止</strong>
                    ：光の拡散性や耐久性を高める
                  </li>
                </ul>
                <div className="md:w-1/3 relative">
                  <Image
                    src="/images/blog/led-cob-difference/02.webp"
                    alt=""
                    width={900}
                    height={900}
                    className="object-contain w-full"
                  />
                </div>
              </div>

              <p className="mb-5 md:mb-10">
                また、LEDのパッケージには、以下のような実装方式があります。
              </p>
              <table className="w-full [&_th]:border [&_th]:border-gray-500 [&_td]:border [&_td]:border-gray-500 [&_th]:p-2 [&_td]:p-2 [&_th]:md:p-4 [&_td]:md:p-4">
                <tbody>
                  <tr className="bg-white/5">
                    <th>実装方式</th>
                    <th>特徴</th>
                    <th>用途</th>
                  </tr>
                  <tr>
                    <td>DIP型（砲弾型）</td>
                    <td>古典的な方式。看板や信号などに視認性重視の屋外向け</td>
                    <td>看板や信号などに視認性重視の屋外向け</td>
                  </tr>
                  <tr>
                    <td>SMD（表面実装）</td>
                    <td>コンパクトで量産向き</td>
                    <td>テレビ、照明、ディスプレイ</td>
                  </tr>
                  <tr className="font-bold">
                    <th className="text-yellow-300">COB（Chip on Board）</th>
                    <td>高密度・高輝度・放熱性が高い</td>
                    <td>
                      スポットライト、屋外用LEDビジョン、屋外用デジタルサイネージ
                    </td>
                  </tr>
                </tbody>
              </table>
            </SubSection>

            <SubSection title="3. LEDの特徴・メリット">
              <p className="mb-4 md:mb-5">
                LEDには以下のような特徴やメリットがあります。
              </p>
              <ul className="list-disc ml-5 md:ml-10 space-y-2 md:space-y-4 mb-10 md:mb-16 [&_li]:leading-loose">
                <li>
                  <strong className="text-yellow-300">省エネルギー性</strong>
                  <br />
                  LEDは、電気エネルギーを光へと直接変換する効率が非常に高く、
                  <strong>白熱灯の20%以下の消費電力</strong>
                  で同等の明るさを実現できます。
                  <br />
                  たとえば、60Wの白熱灯相当の明るさを、LEDでは約9〜10Wでまかなうことが可能です。
                  <br />
                  このため、大型施設や商業ビル、展示会場など、
                  <strong>長時間点灯が前提となる場所では電気代削減</strong>
                  に直結し、環境負荷とコストの両面で大きなメリットがあります。
                </li>
                <li>
                  <strong className="text-yellow-300">長寿命</strong>
                  <br />
                  一般的な白熱灯が1,000〜2,000時間、蛍光灯でも10,000時間程度の寿命であるのに対し、LEDは
                  <strong>平均で50,000〜100,000時間の連続使用に耐える</strong>
                  と言われています。
                  <br />
                  これは、<strong>1日8時間点灯しても、10年以上交換不要</strong>
                  なレベルです。
                  <br />
                  また、<strong>点灯回数による劣化がほとんどない</strong>
                  ため、デジタルサイネージやインタラクティブなディスプレイ広告でも効果を発揮します。
                </li>
                <li>
                  <strong className="text-yellow-300">即時点灯</strong>
                  <br />
                  白熱灯や蛍光灯は、スイッチを入れてから徐々に明るくなる性質がありますが、LEDは
                  <strong>
                    スイッチONと同時に0.1秒以下で最大輝度に達する瞬発性
                  </strong>
                  があります。
                  <br />
                  これはイベント演出やセンサー連動型のサイネージ、タイマー制御された広告など、動きや時間に連動するシーンで大きなアドバンテージとなります。
                </li>
                <li>
                  <strong className="text-yellow-300">環境負荷が少ない</strong>
                  <br />
                  LEDには水銀や鉛などの有害物質が一切含まれておらず、
                  <strong>リサイクル性にも優れる</strong>
                  ため、環境保護の観点でも評価されています。
                  <br />
                  また、発熱量が非常に少なく、
                  <strong>放射熱が約1/5程度に抑えられる</strong>
                  ため、
                  <strong>
                    周囲の空間に熱を与えにくく、空調への負担を軽減
                  </strong>
                  できます。
                </li>
                <li>
                  <strong className="text-yellow-300">高耐久性</strong>
                  <br />
                  LEDは、ガラス管やフィラメントを用いないソリッドステート構造（固体素子）であるため、
                  <strong>
                    物理的な衝撃・振動に強く、輸送・施工時の破損リスクが低減
                  </strong>
                  されます。
                  <br />
                  さらに、
                  <strong>-30℃〜+50℃程度の広い温度環境にも耐える</strong>
                  ことができ、
                  <strong>屋外での使用や高温多湿な環境にも対応可能</strong>
                  です。
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section id="section02" title={sectionTitles[2]}>
            <div className="text-yellow-300 [&_p]:text-white my-5 md:my-8">
              <SubSection title="高密度実装による高性能・高演出性を両立する次世代LED技術">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <p className="sm:w-1/2 md:w-3/4">
                    COB（Chip on Board）とは、
                    <strong>
                      複数のLEDチップを基板（ボード）に直接実装し、発光モジュールとして一体化
                    </strong>
                    した先進的な実装方式です。
                    <br />
                    従来のSMD（Surface Mount
                    Device）方式と比べ、構造そのものが根本的に異なるため、光の質、耐久性、表現力において大きなアドバンテージがあります。
                  </p>
                  <div className="sm:w-1/2 md:w-1/4 relative">
                    <Image
                      src="/images/blog/led-cob-difference/03.webp"
                      alt=""
                      width={900}
                      height={900}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </SubSection>

              <SubSection title="均一で自然な面発光">
                <p>
                  COBの最大の特長は、
                  <strong>多数のLEDチップが極めて高密度で配置される</strong>
                  ことで、<strong>面全体が均一に発光する</strong>点です。
                  <br />
                  SMDではチップごとに明暗のムラが生じやすく、近距離での視認性や映像の滑らかさに課題がありましたが、COBではそれが大きく改善されています。
                </p>

                <p>
                  このムラのない均一な発光は、
                  <strong>高精細な映像表現や繊細なグラフィック表示</strong>
                  に非常に有効で、特にショールーム・ブティック・百貨店など、“ブランド価値を視覚で魅せる”空間で力を最大限に発揮します。
                </p>
              </SubSection>

              <SubSection
                title="高輝度 × 低消費電力の両立"
                className="text-yellow-300 space-y-5 [&_p]:text-white"
              >
                <p>
                  COBモジュールは<strong>光束密度が高く</strong>、
                  <strong>少ない電力でも高輝度</strong>
                  を得られるため、エネルギー効率に優れた照明・映像ソリューションとしても注目されています。
                  <br />
                  特に、大型のディスプレイやガラスファサードに透過型LEDディスプレイとして展開する際にも、
                  <strong>必要最小限の発光体で最大限の輝度を確保</strong>
                  可能です。
                  <br />
                  これにより、
                  <strong>省エネとインパクトを両立した広告・演出</strong>
                  が可能になります。
                </p>
              </SubSection>

              <SubSection
                title="優れた放熱性で長寿命・安定稼働"
                className="text-yellow-300 space-y-5 [&_p]:text-white"
              >
                <p>
                  COBはLEDチップを直接基板に接合する構造であるため、
                  <strong>
                    放熱効率が極めて高く、温度上昇による性能劣化を大幅に抑制
                  </strong>
                  できます。
                  <br />
                  これは、長時間稼働が求められる商業施設や交通機関、イベントスペースなどでの安定運用にとって極めて重要です。
                </p>
                <p>
                  結果として、<strong>LED素子そのものの劣化が抑えられ</strong>、
                  <strong>長寿命化・メンテナンス頻度の低減</strong>
                  が可能になります。
                  <br />
                  これも、BtoBユースにおける
                  <strong>TCO（総保有コスト）の削減</strong>
                  という観点で大きな利点です。
                </p>
              </SubSection>

              <SubSection
                title="ピクセルピッチの極小化により、超近距離での使用にも対応"
                className="text-yellow-300 space-y-5 [&_p]:text-white"
              >
                <p>
                  COBは、LEDチップ同士の隙間を極限まで縮められるため、ピクセルピッチ（画素の間隔）を1.0mm以下まで狭めることが可能です。
                  <br />
                  これにより、
                  <strong>超高精細な表示が必要な近接ディスプレイ</strong>
                  （例：ショーケース、カウンター、室内イベントなど）にも柔軟に対応可能です。
                </p>
                <p>
                  従来のLEDディスプレイでは解像度の限界から
                  <strong>“近づいて見ると粗さが目立つ”という課題</strong>
                  がありましたが、<strong>COBではそれを完全に克服</strong>
                  しています。
                </p>
              </SubSection>

              <SubSection
                title="耐衝撃性・防塵性・防水性も高く、多様な環境に対応"
                className="text-yellow-300 space-y-5 [&_p]:text-white"
              >
                <p>
                  COBは、チップが露出せず、樹脂やガラスで一体化される設計が可能なため、
                  <strong>
                    物理的な耐久性にも優れ、粉塵・湿気などへの耐性も高い
                  </strong>
                  という特長があります。
                </p>
                <p>
                  これにより、屋外広告や工場・倉庫、レジャー施設、さらには多湿な温泉施設や海辺のリゾート地などでも使用可能で、
                  <strong>導入場所を選ばない</strong>柔軟性を実現しています。
                </p>
              </SubSection>

              <SubSection
                title="透明フィルム型LEDとの融合で、次世代の透過型サイネージへ"
                className="text-yellow-300 space-y-5 [&_p]:text-white"
              >
                <p>
                  近年は、COB技術を応用した透明LEDフィルムの開発も進んでおり、COBならではの高密度発光と透過性の両立が実現しつつあります。
                  <br />
                  これにより、<strong>“透明な光の壁”</strong>
                  のように見える未来的な広告体験や、外から見た時の透明感、内から見た時の視界確保という両立が可能になります。
                </p>
                <p>
                  このように、COBは単なる“高性能LED”という枠を超え、
                  <strong>
                    空間演出やブランド体験の質そのものを引き上げるコア技術
                  </strong>
                  として、今後のBtoBマーケティングにおいて大きな武器になると言えるでしょう。
                </p>
              </SubSection>
            </div>
          </Section>

          <Section id="section03" title={sectionTitles[3]}>
            <SubSection title="">
              <p className="mb-5 md:mb-8">
                LEDとひと口に言っても、実はその実装技術や発光方式には複数の種類があります。
                <br />
                なかでも現在主流の「SMD（Surface Mount
                Device）」型と、近年急速に注目を集めている「COB（Chip on
                Board）」型には、大きな違いがあります。
              </p>

              <table className="w-full [&_th]:border [&_th]:border-gray-500 [&_td]:border [&_td]:border-gray-500 [&_th]:p-2 [&_td]:p-2 [&_th]:md:p-4 [&_td]:md:p-4">
                <tbody>
                  <tr>
                    <th className="border-none"></th>
                    <th className="bg-white/5">SMD</th>
                    <th className="bg-white/5 text-yellow-300">COB</th>
                  </tr>
                  <tr>
                    <td className="font-bold">発光方式</td>
                    <td>点発光</td>
                    <td className="font-bold">面発光（均一な光）</td>
                  </tr>
                  <tr>
                    <td className="font-bold">輝度</td>
                    <td>中〜高</td>
                    <td className="font-bold">非常に高い</td>
                  </tr>
                  <tr>
                    <td className="font-bold">放熱性</td>
                    <td>標準</td>
                    <td className="font-bold">高い（熱を分散しやすい）</td>
                  </tr>
                  <tr>
                    <td className="font-bold">発光ムラ</td>
                    <td>起きやすい</td>
                    <td className="font-bold">少ない（自然な光）</td>
                  </tr>
                  <tr>
                    <td className="font-bold">修理性</td>
                    <td>チップ単位で交換</td>
                    <td className="font-bold">モジュール単位の交換が主</td>
                  </tr>
                </tbody>
              </table>
            </SubSection>
          </Section>

          <Section id="section04" title={sectionTitles[4]}>
            <SubSection title="メリット">
              <ul className="list-decimal ml-5 space-y-8 md:space-y-10 [&_span]:text-[1.2em] [&_span]:font-bold [&_span]:text-yellow-300">
                <li>
                  <span>高輝度かつムラのない面発光</span>
                  <br />
                  <p className="mt-3">
                    COB LEDは、複数のLEDチップを密集して基板に直接実装しており、
                    <strong>全体が面のように均一に発光</strong>します。
                    <br />
                    これにより、従来のSMD型にありがちな「点の光」「明暗のムラ」を感じさせず、
                    <strong>明るさと視認性に優れた表示が可能</strong>です。
                  </p>
                </li>
                <li>
                  <span>放熱性に優れ、長寿命</span>
                  <br />
                  <p className="mt-3">
                    COBは放熱構造にも優れており、
                    <strong>
                      発光効率が高いにもかかわらず熱を効率的に分散
                    </strong>
                    できます。
                    <br />
                    これにより、LED自体の劣化を抑え、長時間点灯にも耐える長寿命設計が可能となります。
                  </p>
                </li>
                <li>
                  <span>光が自然</span>
                  <br />
                  <p className="mt-3">
                    COBは面全体で発光するため、
                    <strong>自然光に近い柔らかな光</strong>を放ちます。
                    <br />
                    また、演色性（CRI）が高い製品も多く、
                    <strong>
                      色再現性に優れ、店舗の陳列物や広告コンテンツの色味を忠実に表現
                    </strong>
                    できます。
                    <br />
                    ファッション、食品、美術の展示など、色の見え方が購買に直結する業界では非常に有利な特性です。
                  </p>
                </li>
                <li>
                  <span>コンパクトな設計でデザイン自由度が高い</span>
                  <br />
                  <p className="mt-3">
                    COBは小型モジュールに高密度な光源を詰め込めるため、
                    <strong>薄型・軽量設計</strong>
                    がしやすく、<strong>スペースを取らない</strong>
                    のも魅力です。
                    <br />
                    これにより、ガラス面への貼り付け型LEDや、柱などの局面、天井への隠し設置など
                    <strong>自由度の高い設計が可能</strong>になります。
                  </p>
                </li>
              </ul>
            </SubSection>
            <SubSection title="デメリット">
              <ul className="list-decimal ml-5 space-y-8 md:space-y-10 [&_span]:text-[1.2em] [&_span]:font-bold">
                <li>
                  <span>修理やメンテナンスはSMDに比べて手間</span>
                  <br />
                  <p className="mt-3">
                    COBはモジュール単位でLEDチップが密集している構造のため、万が一の故障時には
                    <strong>一部だけの修理が難しい</strong>
                    という側面があります。
                    <br />
                    SMDのようにチップ単位での交換ができないため、修理の際には
                    <strong>モジュール全体の取り換えが必要</strong>
                    となる場合が多く、
                    <strong>メンテナンスには注意が必要</strong>です。
                  </p>
                </li>
                <li>
                  <span>初期コストはやや高くなることが多い</span>
                  <br />
                  <p className="mt-3">
                    COB LEDは
                    <strong>製造技術や放熱設計が高度であり、品質も高い</strong>
                    分、初期導入コストがSMDよりも高めになることがあります。
                    <br />
                    しかし、<strong>長寿命</strong>で
                    <strong>省エネ性も高い</strong>
                    ため、トータルコストでは回収可能なケースが多く、ランニングコストを抑えたいBtoB用途（商業施設・交通機関・展示会など）には長期的に有利です。
                  </p>
                </li>
                <li>
                  <span>一部の照明器具やコントローラーとの相性に注意</span>
                  <br />
                  <p className="mt-3">
                    COB
                    LEDは高密度発光・高出力設計のため、既存の照明器具やドライバとの互換性に制限がある場合もあります。
                    <br />
                    <strong>
                      導入時には、対応機器のスペック確認や調光対応の有無など、細かなチェックが必要
                    </strong>
                    です。
                    <br />
                    特に、後付けでLEDを置き換える場合には、施工業者との事前確認が不可欠です。
                  </p>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section id="section05" title={sectionTitles[5]}>
            <p className="mb-8 md:mb-12">
              COB LEDは、特に
              <strong>「省スペースで高輝度を実現したい現場」</strong>
              において、従来のSMD型LEDを大きく上回るパフォーマンスを発揮します。
              <br />
              以下では、COB
              LEDが活躍する具体的な業界・用途別に、その技術的優位性と導入メリットを解説します。
            </p>

            <div className="[&_h3]:inline-block [&_h3]:border-b [&_h3]:px-1 [&_p]:text-white">
              <SubSection title="アパレルショップのウィンドウ広告">
                <div className="flex flex-col sm:flex-row justify-center gap-3 mx-auto mb-10 md:mb-16">
                  <p className="w-full md:w-3/5">
                    COB LEDは<strong>高い演色性（CRI）を誇る</strong>
                    ため、服の質感や色味を忠実に再現する光が求められるファッション業界で高評価を得ています。
                    <br />
                    とくにハイブランド店舗では、商品そのものが光によって魅力を左右されるため、明るすぎず、かつムラのない美しい照明が必須です。
                    <br />
                    COBの面発光特性により影が出にくく、
                    <strong>対象物を自然に浮かび上がらせる演出</strong>
                    が可能です。
                  </p>
                  <div className="w-full md:w-2/5 relative">
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
                </div>
              </SubSection>
              <SubSection title="展示会ブース・ショールームのディスプレイ演出">
                <div className="flex flex-col sm:flex-row justify-center gap-3 mx-auto mb-10 md:mb-16">
                  <p className="w-full md:w-3/5">
                    展示会やショールームでは、限られたスペース内でいかに印象的な演出を行うかが勝負となります。
                    <br />
                    COBは小型で高輝度なため、
                    <strong>
                      目立ちにくい場所に設置しても強い発光効果を得られる
                    </strong>
                    のが強みです。
                    <br />
                    また、光のムラが少ないため、
                    <strong>
                      大型モニターや装飾壁に組み込んだ場合でもコンテンツを均一に照らす
                    </strong>
                    ことが可能です。
                    <br />
                    とくにインタラクティブなブースやLEDビジョンと連携する演出においては、COBの面発光性・放熱性・デザイン自由度が高く評価されています。
                  </p>
                  <div className="w-full md:w-2/5 relative">
                    <Image
                      src="/images/cases/exhibition02.webp"
                      alt=""
                      width={900}
                      height={900}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </SubSection>
              <SubSection title="屋外サイネージ・大型LEDビジョン">
                <div className="flex flex-col sm:flex-row justify-center gap-3 mx-auto mb-10 md:mb-16">
                  <p className="w-full md:w-3/5">
                    COBのもう一つの得意分野が屋外向けの大型LEDディスプレイです。
                    <br />
                    従来のSMD方式では発光点が分離して見えやすく、視認距離によってはちらつきや粒状感が出ることも多いのですが、COBは密集したLEDチップを基板に一体化しているため、
                    <strong>画素密度が高く、より滑らかな映像表示</strong>
                    が可能になります。
                    <br />
                    また、<strong>放熱性能にも優れている</strong>
                    ため、長時間稼働する屋外ディスプレイや電子看板での使用にも適しています。
                  </p>
                  <div className="w-full md:w-2/5 relative">
                    <div className="relative w-full pb-[56.25%]">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/videos/film10.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </SubSection>
              <SubSection title="撮影・スタジオ照明（映像制作・放送業界）">
                <p>
                  映像や写真撮影において、照明はクオリティを大きく左右する要素です。
                  <br />
                  COB LEDは高演色性（CRI90以上）かつ、
                  <strong>自然な色再現ができる</strong>ため、
                  <strong>人物の肌色・商品の質感を忠実に描写する</strong>
                  ことが可能です。
                  <br />
                  SMDに比べて<strong>ノイズの少ない均一な光を得られる</strong>
                  ため、映像編集時の色補正の手間も軽減されます。
                  <br />
                  多くのプロフェッショナル用照明メーカーがCOBベースの製品を採用しており、映像制作現場でも事実上のスタンダードになりつつあります。
                </p>
              </SubSection>
              <SubSection title="医療現場・精密作業のための作業灯">
                <p>
                  COBの面発光特性と高演色性は、医療用ライトや工業系の作業照明にも最適です。
                  <br />
                  <strong>
                    影が出にくく、長時間の作業でも目が疲れにくい自然な光
                  </strong>
                  を提供できるため、外科手術、歯科治療、電子基板の検査・修理といった細かい作業においても活躍。
                  <br />
                  また、
                  <strong>発熱が少なく器具の表面温度も上がりにくい</strong>
                  ため、作業環境の安全性にも貢献します。
                  <br />
                  <strong>長寿命かつメンテナンス頻度が低い</strong>
                  ことから、医療機器・検査装置にも多数採用実績があります。
                </p>
              </SubSection>
            </div>

            <p>
              このように、COB
              LEDは高輝度・高演色・高効率・省スペースといった特徴を生かし、あらゆる業界の現場で価値を発揮する次世代照明技術です。
              <br />
              とくに<strong>「見た目の印象が売上に直結する業種」</strong>や、
              <strong>
                「設置スペースに制限があるが、明るさを確保したい現場」
              </strong>
              では、COBが選ばれるべき選択肢といえるでしょう。
            </p>
          </Section>

          <Section id="section06" title={sectionTitles[6]}>
            <p className="mb-8 md:mb-12">
              LEDディスプレイや照明分野では、COB（Chip on
              Board）以外にもさまざまな実装方式が存在します。
              <br />
              特に<strong>SMD、Mini LED、Micro LED</strong>
              は、COBと比較されることの多い技術です。
              <br />
              本章では、それぞれの方式の技術的な違いと、今後のLED技術の展望について解説します。
            </p>

            <div className="text-yellow-300 [&_p]:text-white">
              <SubSection title="SMD（Surface Mounted Device）">
                <p>
                  SMDは現在
                  <strong>最も一般的に使われているLEDの実装方式</strong>
                  で、個別のLEDチップを基板に半田付けして実装します。
                  <br />
                  <strong>コストが安く、大量生産に向いており</strong>
                  、デジタルサイネージや屋内外の広告表示に広く普及しています。
                  <br />
                  ただし、
                  <strong>チップ間に距離があるため光のムラが出やすく</strong>
                  、近距離での視認性や精細な表示には不向きとされています。
                  <br />
                  また、
                  <strong>
                    発光面積が小さいため、高輝度化や省スペース設計には限界がある
                  </strong>
                  点が課題です。
                </p>
              </SubSection>
              <SubSection title="Mini LED">
                <p>
                  Mini LEDは、SMDの高密度進化型ともいえる技術で、
                  <strong>LEDチップを小型化し、より高密度に実装する</strong>
                  方式です。
                  <br />
                  液晶パネルのバックライト用途や、ハイエンドディスプレイのローカルディミング制御に多く使われています。
                  <br />
                  また、<strong>SMDよりも明るさやコントラスト制御が向上</strong>
                  しますが、構造上はまだチップを個別に配置するため、完全な面発光や自然なグラデーションには課題が残ります。
                </p>
              </SubSection>
              <SubSection title="Micro LED">
                <p>
                  Micro
                  LEDは、1画素=1LEDチップという構造で、各チップが個別に発光・制御できるため、
                  <strong>有機EL（OLED）を超える性能が期待</strong>
                  されています。
                  <br />
                  <strong>自己発光型</strong>
                  であるため、
                  <strong>極めて高いコントラストと応答速度を実現</strong>
                  し、<strong>消費電力も非常に少ないのが特長</strong>です。
                  <br />
                  しかし、現在のところは製造コストが高く、微細実装の技術的ハードルが非常に高いため、量産には課題が多いのが実情です。
                  <br />
                  AppleやSamsungなどが積極的に開発を進めており、今後数年で一般普及に向けた転換点を迎えるとされています。
                </p>
              </SubSection>
            </div>
            <SubSection title="COBと次世代LED技術との連携と今後の展望">
              <p>
                COBは単体でも優れた性能を持っていますが、近年では
                <strong>
                  Mini LEDやMicro LEDと組み合わせたハイブリッド技術
                </strong>
                が進化を遂げつつあります。
                <br />
                たとえば、Mini LEDチップをCOB基板上に高密度実装する
                <strong>「COB-Mini LED」</strong>
                構造では、輝度・放熱性・省スペース性のすべてを両立した新世代ディスプレイが登場しています。
                <br />
                このようなハイブリッド実装は、今後の
                <strong>8K超高精細ディスプレイ</strong>や
                <strong>フレキシブルサイネージ</strong>、
                <strong>曲面型表示装置</strong>
                など、多様な応用に対応できると注目されています。
                <br />
                また、COBの放熱構造はMicro
                LEDの発熱問題へのソリューションとしても活用が期待されており、COB技術自体が進化のベースプラットフォームとして位置づけられ始めているのです。
              </p>
            </SubSection>
          </Section>

          <Section id="section07" title={sectionTitles[7]}>
            <p className="mb-10 md:mb-16">
              COB
              LEDを最大限に活用するためには、設置前の計画と環境評価が非常に重要です。
              <br />
              高性能であるがゆえに、導入時に注意すべき点がいくつかあります。
            </p>

            <SubSection title="1. 熱対策を考慮した設置環境">
              <p>
                COBは密閉空間や屋内の高温環境下では、
                <strong>
                  放熱が十分でないと寿命や性能に悪影響を及ぼす可能性があります
                </strong>
                。
                <br />
                そのため、ヒートシンクや自然通風、場合によってはファンなどを活用した
                <strong>放熱設計</strong>が重要です。
                <br />
                設置場所の通気性・温度環境を事前に確認し、必要であれば専用の熱拡散パネルなどを取り入れましょう。
              </p>
            </SubSection>
            <SubSection title="2. 視認距離と設置スペースの最適化">
              <p>
                COBは非常に高輝度かつ均一な光源であるため、
                <strong>適切な視認距離を取ることで最大限の効果を発揮</strong>
                します。
                <br />
                近すぎると眩しすぎたり、遠すぎると意図した印象が薄れることもあるため、
                <strong>目的に応じた距離設計</strong>が必要です。
                <br />
                また、COBユニットはコンパクトながら冷却構造を含めるとある程度の設置スペースが必要となります。
                <br />
                壁面や天井など、
                <strong>設置する箇所の構造や配線経路も事前に確認</strong>
                しておきましょう。
              </p>
            </SubSection>
            <SubSection title="3. 信頼できるパートナーの選定">
              <p>
                COBはまだ普及初期段階にあるため、
                <strong>設計・施工ノウハウを持つ業者</strong>
                の存在が極めて重要です。
                <br />
                安価な製品や未検証のモジュールなども出回っており、性能差・信頼性の違いは一目瞭然です。
                <br />
                導入時は、過去の導入実績や設置環境に対する対応力をもとに、パートナー企業を慎重に選定してください。
                <br />
                特にアフターサポート・メンテナンス体制の有無は、長期的な運用コストにも直結します。
              </p>
            </SubSection>
            <SubSection title="4. コストだけで判断しない">
              <p>
                初期導入費用が若干高めになるCOBですが、消費電力の少なさや長寿命設計、演出効果の高さを考慮すれば、
                <strong>トータルでは高いコストパフォーマンスを発揮</strong>
                します。
                <br />
                「価格」だけに目を向けず、ランニングコスト・メンテナンス性・設置の柔軟性などを含めた総合的な導入評価が求められます。
              </p>
            </SubSection>
          </Section>

          <Section id="section07" title={sectionTitles[8]}>
            <p className="mb-10 md:mb-16">
              COB LEDは、従来のSMD方式や他のLED技術に比べて、
              <strong>
                視認性・演出力・省スペース性で優れたパフォーマンスを発揮
              </strong>
              する新世代の光源技術です。
              <br />
              その均一な面発光と高輝度特性は、ただの照明・表示にとどまらず、“映える”空間演出やブランド価値の向上に直結する表現力を持っています。
              <br />
              これまで表現できなかった
              <strong>
                「明るくて自然な光」「立体的で奥行きある映像」「静かな高級感のある照明演出」
              </strong>
              などを可能にし、商業施設・展示会・レジャー空間・撮影スタジオなど、あらゆる場所で活用の幅が広がっています。
              <br />
              また、COBは<strong>Mini LEDやMicro LEDとの技術融合</strong>
              により、さらなる進化が見込まれており、今後のLEDディスプレイ市場を牽引する存在になると考えられています。
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
