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
  title: `${blogData[3].title} | ブログ`,
  description: blogData[3].description,
};

export default async function AboutPage() {
  const sectionTitles = [
    `はじめに`,
    `LEDとは？基礎知識のおさらい`,
    `COB（Chip on Board）とは？`,
    `LEDとCOBの違いを比較`,
    `COB LED それぞれのメリット・デメリット`,
    `COBが活躍する具体的な用途`,
    `SMD、Mini LED、Micro LEDとの違いと今後の展望`,
    `導入の際に気をつけるポイント`,
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
            <div className="space-y-4 md:space-y-8 mb-10 md:mb-16">
              <p>
                「LED」と一口に言っても、その中にはさまざまな種類があります。中でも近年注目されているのが「COB（Chip
                on Board）」と呼ばれる方式。
                <br />
                従来のSMDタイプと何が違うのか、どんな場面で選ばれるのか、よくわからないという方も多いはず。
              </p>
              <p>
                本記事では、LEDの基本からCOBの仕組み、他の技術との違い、そして選び方までをわかりやすく解説。店舗照明・ディスプレイ導入・サイネージ設置を検討している方必見です。
              </p>
            </div>
          </Section>

          <TableOfContents items={sectionTitles} />

          <Section id="section01" title={sectionTitles[1]}>
            <p className="mb-5 md:mb-16">
              LED（Light Emitting
              Diode／発光ダイオード）は、電流を流すと発光する半導体素子の一種で、電気エネルギーを直接光に変換するエレクトロルミネッセンス（EL）現象を応用した照明・表示デバイスです。
              <br />
              一般的な白熱灯や蛍光灯とは異なり、フィラメントを加熱したり、ガス放電を利用することなく、物理的・化学的な反応によって光を発するため、効率や耐久性に優れています。
            </p>

            <SubSection title="1. LEDの仕組み">
              <p>
                LEDは主にn型半導体とp型半導体の接合によって構成され、これをpn接合と呼びます。
                <br />
                電圧を加えることで電子と正孔（ホール）が接合部で再結合し、その際に余分なエネルギーが光子（フォトン）として放出される――これがLEDの発光原理です。
              </p>
              <p>
                発光する光の波長（＝色）は、この半導体のバンドギャップエネルギーによって決まり、材料により赤・緑・青・紫外線・赤外線などが生成されます。
              </p>
            </SubSection>

            <SubSection title="2. LEDの構造と種類">
              <p className="mb-5 md:mb-10">
                LEDチップ単体では微弱な光しか出せないため、通常は以下のような構造になっています。
              </p>
              <ul className="list-disc ml-5 md:ml-10 space-y-2 md:space-y-4 mb-10 md:mb-16">
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
                  <strong>レンズ・樹脂封止</strong>：光の拡散性や耐久性を高める
                </li>
              </ul>
              <p className="mb-5 md:mb-10">
                また、LEDのパッケージには、以下のような実装方式があります。
              </p>
              <table className="w-full [&_th]:border [&_th]:border-gray-500 [&_td]:border [&_td]:border-gray-500 [&_th]:p-2 [&_td]:p-2 [&_th]:md:p-4 [&_td]:md:p-4">
                <tbody>
                  <tr>
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
                  <tr>
                    <th>COB（Chip on Board）</th>
                    <td>高密度・高輝度・放熱性が高い</td>
                    <td>スポットライト、屋外ビジョン</td>
                  </tr>
                </tbody>
              </table>
            </SubSection>

            <SubSection title="3. LEDの特徴と利点">
              <p className="mb-5 md:mb-10">
                LEDチップ単体では微弱な光しか出せないため、通常は以下のような構造になっています。
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
                  白熱灯や蛍光灯は、スイッチを入れてから徐々に明るくなる性質がありますが、LEDはスイッチONと同時に
                  <strong>0.1秒以下で最大輝度に達する瞬発性</strong>があります。
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
                  ため、周囲の空間に熱を与えにくく、空調への負担を軽減できます。
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
                  ことができ、屋外使用や高温多湿な環境にも対応可能です。
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section id="section02" title={sectionTitles[2]}>
            {/* <div className="flex justify-center mx-auto my-10 md:my-16">
              <div className="relative">
                <Image
                  src="/images/blog/difference-film-led/01.png"
                  alt=""
                  width={900}
                  height={900}
                  className="object-contain"
                />
              </div>
            </div> */}

            <div className="my-5 md:my-8">
              <SubSection title="高密度実装による高性能・高演出性を両立する次世代LED技術">
                <p>
                  COB（Chip on Board）とは、
                  <strong>
                    複数のLEDチップを基板（ボード）に直接実装し、発光モジュールとして一体化
                  </strong>
                  した先進的な実装方式です。
                  <br />
                  従来のSMD（Surface Mount
                  Device）方式と比べ、構造そのものが根本的に異なるため、光の質、耐久性、表現力において大きなアドバンテージがあります。
                </p>
              </SubSection>

              <SubSection title="● 光の「面発光化」による自然な視認性と発色表現">
                <p>
                  SMDでは、ひとつの素子が1点から発光する「点光源」であるため、拡散や拡張レンズが必要でした。一方、COBは数十〜数百のLEDチップを密に配置し、1つの「面」から発光する構造。これにより、以下のような特徴があります
                </p>
                <ul className="list-disc ml-5 md:ml-10 space-y-2 md:space-y-4 mb-10 md:mb-16 [&_li]:leading-loose">
                  <li>光のムラ（ドット感）が極めて少ない</li>
                  <li>
                    拡散レンズが不要なため、よりクリアで均一な映像表示が可能
                  </li>
                  <li>
                    輝度の強弱がなだらかで、目に優しく自然光に近い印象を与える
                  </li>
                </ul>
                <p>
                  とくに店舗やイベント会場、ブライダル施設など空間演出が重視されるシーンにおいて、「空間になじむ演出」を求めるニーズに応えられるのがCOBです。
                </p>
              </SubSection>

              <SubSection title="● 放熱効率の高さ＝LEDの寿命と性能を大きく左右する">
                <p>デジタルと空間を融合させる演出が拡散されやすい</p>
              </SubSection>
            </div>
          </Section>

          {/* <Section id="section03" title={sectionTitles[3]}>
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
          </Section> */}

          {/* <Section id="section04" title={sectionTitles[4]}>
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
          </Section> */}

          {/* <Section id="section05" title={sectionTitles[5]}>
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
                <Button>コンテンツ制作について</Button>
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
          </Section> */}

          {/* <Section id="section06" title={sectionTitles[6]}>
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
              <Button>活用事例を詳しく見る</Button>
            </Link>
          </Section> */}

          {/* <Section id="section07" title={sectionTitles[7]}>
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
          </Section> */}
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
