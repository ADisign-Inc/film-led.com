import { ArrowRight } from "lucide-react";
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

export const metadata: Metadata = {
  title: `${blogData[1].title} | ブログ`,
  description: blogData[1].description,
};

type ComparisonData = {
  category: string;
  mediaFilm: string;
  icLed: string;
  barPcb: string;
};

const data: ComparisonData[] = [
  {
    category: "外観",
    mediaFilm: "",
    icLed: "",
    barPcb: "",
  },
  {
    category: "重さ",
    mediaFilm:
      "パッケージではなく、RGBフィルムに直接搭載し、薄くて軽い<br/><strong>≒2kg/㎡</strong>",
    icLed: "駆動IC内蔵型LEDパッケージを使用し、厚くて重い<br/>≒3.5kg/㎡",
    barPcb:
      "PC板に駆動IC内蔵型LEDパッケージを載せたバー型PCBを埋め込んでおり、厚くて重い<br/>≒6kg/㎡",
  },
  {
    category: "薄さ",
    mediaFilm:
      "OCAを使用し1mmT以下に薄くすることが可能で、<strong>様々な場所に設置可能</strong><br/>※光耐抗改善可能",
    icLed: "シリコン接着剤を使用しているため厚い（≧3mmT）<br/>※光再用問題有り",
    barPcb: "PC板を使用し、厚さが4mmT以上で、曲面での設置が難しい",
  },
  {
    category: "透過性",
    mediaFilm:
      "発光部（RGB素子）が小さく、全体的に<strong>透過性が優れている</strong>",
    icLed: "RGB＋駆動ICのパッケージを使用し、透過性が悪い",
    barPcb: "不透明なバー型PCBを使用し、透過性が悪い",
  },
  {
    category: "消費電力",
    mediaFilm: "120〜140w/㎡",
    icLed: "800〜1000w/㎡",
    barPcb: "800〜1000w/㎡",
  },
  {
    category: "視角",
    mediaFilm: "≒170°",
    icLed: "≒140°",
    barPcb: "≒140°",
  },
  {
    category: "寿命",
    mediaFilm:
      "駆動ICがディスプレイモジュール外部に実装され、<strong>発熱が比較的少なく、寿命が長い</strong>",
    icLed: "駆動ICが内蔵され、発熱が高く、寿命短縮の原因となる",
    barPcb: "駆動ICが内蔵され、発熱が高く、寿命短縮の原因となる",
  },
];

export default async function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ブログ", href: "/blog" },
          { label: `${blogData[1].title}` },
        ]}
      />

      <main className="flex-1 [scroll-behavior:smooth]">
        <article className="blog container max-w-5xl pt-10 md:pt-20">
          <h1>{blogData[1].title}</h1>

          <div className="flex justify-between items-center mb-10 md:mb-16">
            <p className="!text-xs mb-3 md:mb-5 -mt-5">
              {blogData[1].category.map((cat: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300/20 text-yellow-300 font-bold !text-xs px-1.5 py-1 rounded mr-1.5"
                >
                  {cat}
                </span>
              ))}
            </p>

            <div className="text-gray-400 group-hover:text-white/80 transition-all text-xs md:text-sm">
              <time dateTime={blogData[1].date}>{blogData[1].date}</time>
            </div>
          </div>

          <section className="mb-20 md:mb-36">
            <p className="mb-10 md:mb-16">
              ガラス面に映像を映し出す"透過型LEDビジョン"は、空間デザインと広告の融合を実現する注目の最先端技術です。
              <br />
              しかし実は、この透過型LEDにも複数の種類があり、製品選びによってコスト・演出効果・設置性に大きな差が生まれます。
              <br />
              本記事では、代表的な3種類の透過型LEDビジョンを比較しながら、最も導入に適した選択肢をご紹介します。
            </p>

            <div>
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/film16.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          <section className="index md:w-2/3 mx-auto bg-white/10 backdrop-blur-sm p-10 md:p-16">
            <p className="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-6 md:mb-10">
              目 次
            </p>
            <ul className="list-decimal ml-5 space-y-6">
              <li>
                <Link href="#section01">
                  <span>透過型LEDビジョンとは？</span>
                </Link>
              </li>

              <li>
                <Link href="#section02">
                  <span>3種類の透過型LED製品タイプ</span>
                </Link>
              </li>

              <li>
                <Link href="#section03">
                  <span>{mainData.keyWords}が選ばれる5つの理由</span>
                </Link>
              </li>

              <li>
                <Link href="#section04">
                  <span>活用事例のご紹介</span>
                </Link>
              </li>

              <li>
                <Link href="#section05">
                  <span>導入前に確認すべきポイント</span>
                </Link>
              </li>

              <li>
                <Link href="#section06">
                  <span>まとめ</span>
                </Link>
              </li>
            </ul>
          </section>

          <section id="section01">
            <h2>
              <span></span>
              透過型LEDビジョンとは？
            </h2>

            <div>
              <p>
                透過型LEDビジョンとは、映像表示機能を備えながら、背面の視認性も確保できるLEDディスプレイのことです。
                <br />
                通常のLEDディスプレイとは異なり、背景を隠さずに広告や情報を表示できるため、下記のような場面で活用されています。
                <br />
                ・商業施設のファサードやガラス面
                <br />
                ・路面店のショーウィンドウ
                <br />
                ・屋外ビルボード
                <br />
                空間を圧迫せず、デザイン性を損なわない"透明性"こそが、透過型LED最大の魅力です。
              </p>
            </div>
          </section>

          <section id="section02">
            <h2>
              <span></span>
              3種類の透過型LED製品タイプ
            </h2>

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

            <div>
              <p className="mb-10 md:mb-16">
                透過型LEDビジョンでは、現在主に以下の3種類が挙げられます。
              </p>

              <div>
                <div className="mb-10 md:mb-16">
                  <h3 className="text-yellow-300">▷ {mainData.keyWords}</h3>
                  <p>
                    <strong>【特徴】</strong>
                    <br />
                    ・極薄・軽量（約2kg/㎡）
                    <br />
                    ・ガラスに直接貼り付け可能 高透過率（約87%）、視界を遮らない
                    <br />
                    ・曲面ガラスにも設置可能
                  </p>
                </div>

                <div className="mb-10 md:mb-16">
                  <h3>▷ IC内蔵型LED</h3>
                  <p>
                    <strong>【特徴】</strong>
                    <br />
                    ・ICがLEDパッケージ内にあり、やや厚く、重い（約3.5kg/㎡）
                    <br />
                    ・視野角は中程度（140°前後）
                    熱の発生により寿命が短くなりがち
                  </p>
                </div>

                <div className="mb-10 md:mb-16">
                  <h3>▷ バー型PCB</h3>
                  <p>
                    <strong>【特徴】</strong>
                    <br />
                    ・PCB（基板）をバー状に配置、最も重い（約6kg/㎡）
                    <br />
                    ・透過性・柔軟性が低く、設置場所に制限あり
                    <br />
                    ・古い構造のため消費電力が高め
                  </p>
                </div>
              </div>
            </div>

            <h3>比較表</h3>

            <p className="md:hidden text-xs text-end mb-1">
              ※ 横にスクロールできます。
            </p>
            <div className="overflow-x-auto px-3 -mx-4 md:mx-0">
              <div className="min-w-[800px]">
                <table className="w-full border border-gray-400 text-sm">
                  <thead className=" text-left">
                    <tr>
                      <th className="p-3 md:p-5 border border-gray-400 w-[5.2rem] md:w-28"></th>
                      <th className="p-3 md:p-5 border border-gray-400 !text-[1.5em] font-mincho text-yellow-300">
                        {mainData.keyWords}
                      </th>
                      <th className="p-3 md:p-5 border border-gray-400">
                        IC内蔵型LED
                      </th>
                      <th className="p-3 md:p-5 border border-gray-400">
                        バー型PCB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-3 md:p-5 border border-gray-400 font-semibold">
                          {row.category}
                        </td>
                        <td className="p-3 md:p-5 border border-gray-400 whitespace-pre-line">
                          {row.category === "外観" ? (
                            <div>
                              <Image
                                src="/images/products01.png"
                                alt="MEDIA FILMの外観"
                                width={300}
                                height={200}
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: row.mediaFilm,
                              }}
                            />
                          )}
                        </td>
                        <td className="p-3 md:p-5 border border-gray-400 whitespace-pre-line">
                          {row.category === "外観" ? (
                            <div>
                              <Image
                                src="/images/blog/difference-film-led/02.png"
                                alt="IC内蔵型LEDの外観"
                                width={300}
                                height={200}
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{ __html: row.icLed }}
                            />
                          )}
                        </td>
                        <td className="p-3 md:p-5 border border-gray-400 whitespace-pre-line">
                          {row.category === "外観" ? (
                            <div>
                              <Image
                                src="/images/blog/difference-film-led/03.png"
                                alt="バー型PCBの外観"
                                width={300}
                                height={200}
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{ __html: row.barPcb }}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="section03">
            <h2>
              <span></span>
              {mainData.keyWords}が選ばれる5つの理由
            </h2>

            <div>
              <div className="mb-10 md:mb-16">
                <h3>1. とにかく軽い！設置もラクラクで施工コストを大幅に削減</h3>
                <p>
                  透明フィルム型LEDビジョンは、従来のIC内蔵型やPCBタイプのLEDディスプレイと比較して圧倒的に軽量です。
                  <br />
                  一般的なディスプレイが1㎡あたり6kg以上あるのに対し、フィルム型は約2kg/㎡と1/3以下の軽さ。
                  <br />
                  そのため、
                  <strong>
                    高所ガラスや大型の商業施設の窓面にも負担なく設置できる
                  </strong>
                  ほか、建物への構造的な影響も最小限。
                  <br />
                  吊り下げや貼り付け施工も可能で、クレーンや足場の大掛かりな工事が不要なケースも多く、
                  <strong>
                    施工費や設置時間を大きく抑えることができます。
                  </strong>
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>2. 圧倒的な透明感！開放感を損なわない</h3>
                <p>
                  この製品の最大の特長ともいえるのが、高い透過率（約85〜90%）です。
                  <br />
                  通常のLEDディスプレイは黒い基盤や配線が視界を遮ってしまいますが、透明フィルム型LEDでは、
                  <strong>発光素子（RGBチップ）を極小サイズで分散配置</strong>。
                  <br />
                  そのため、日中でも店内や室内の様子を自然に見せることができ、
                  <strong>景観やガラスの開放感を損なうことなく広告表示</strong>
                  が行えます。
                  <br />
                  デジタルサイネージとしての視認性を保ちながら、
                  <strong>建築物としての美しさやデザイン性を両立</strong>
                  できるため、商業施設やショーウィンドウとの相性も抜群です。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>3. 曲面ガラスにも貼れる柔軟性</h3>
                <p>
                  透明フィルム型LEDは、薄く柔らかいフィルム状の設計が特長です。
                  <br />
                  一般的なPCBタイプのLEDビジョンは厚みがあるため、曲面や湾曲したガラスには設置できません。
                  <br />
                  しかし、フィルム型はわずか1mm程度まで薄くすることができ、
                  <strong>
                    ガラスの形状にぴったりと沿わせて貼ることが可能
                  </strong>
                  。
                  <br />
                  これにより、<strong>円形の建築物</strong>や
                  <strong>カーブを描いた外壁</strong>
                  など、今までLEDの設置が難しかった場所にも、
                  <strong>自由度高く導入できる</strong>ようになりました。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>4. 視野角170度！どこから見ても高い視認性</h3>
                <p>
                  {mainData.keyWords}は、<strong>左右170度の広い視野角</strong>
                  を持っています。
                  <br />
                  これにより、
                  <strong>
                    正面だけでなく斜めや真横からもくっきり映像が見える
                  </strong>
                  ため、通行人やドライバーへの訴求力も抜群。
                  <br />
                  人の流れが多い繁華街や商業施設の前など、さまざまな角度からの視認性が求められる場面でも、高いパフォーマンスを発揮します。
                  <br />
                  これは、
                  <strong>
                    店頭集客や屋外広告において非常に大きなメリット
                  </strong>
                  です。
                </p>
              </div>

              <div>
                <h3>5. 長寿命・省エネ設計でランニングコストを抑制</h3>
                <p>
                  {mainData.keyWords}は、
                  <strong>熱効率に優れた省エネ設計</strong>がされています。
                  <br />
                  <strong>発熱量が少ない構造</strong>
                  により、冷却装置が不要なケースも多く、
                  <strong>電力コストが大幅に軽減</strong>されます。
                  <br />
                  また、発熱が少ないということは、それだけ
                  <strong>LED素子への負荷が少なく寿命も長くなる</strong>
                  ということです。
                  <br />
                  従来のLEDディスプレイに比べて、
                  <strong>メンテナンスの頻度も少なく済む</strong>
                  ため、長期運用におけるトータルコストの削減に貢献します。
                  <br />
                  導入後のサポートコストを抑えたい企業や店舗にもおすすめです。
                </p>
              </div>
            </div>
          </section>

          <section id="section04">
            <h2>
              <span></span>
              活用事例のご紹介
            </h2>
          </section>

          <section id="section05">
            <h2>
              <span></span>
              導入前に確認すべきポイント
            </h2>

            <div>
              <p className="mb-10 md:mb-16">
                透明LEDビジョンを効果的に導入するためには、事前にいくつかの確認が必要です。
                <br />
                以下の5つのポイントを押さえておくことで、設置後のトラブルや無駄なコストを回避し、より効果的な活用が可能になります。
              </p>

              <div className="mb-10 md:mb-16">
                <h3>1. 使用する面積はどのくらいか？</h3>
                <p>
                  設置するガラス面のサイズや形状に合わせて{mainData.keyWords}
                  の必要面積を正確に把握することが大切です。
                  <br />
                  面積により最適なピッチや輝度が変わるため、事前の確認が導入成功の鍵を握ります。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>2. 設置場所は屋内？屋外？</h3>
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
              </div>

              <div className="mb-10 md:mb-16">
                <h3>3. 利用期間は短期？長期？</h3>
                <p>
                  短期イベント用なのか、常設で長期運用するのかにより、選定すべき製品の仕様や設置方法が変わります。
                  <br />
                  当社ではご相談も無料でお受け付けしております。詳しくはお問い合わせください。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>4. 表示コンテンツは静止画？動画？</h3>
                <p>
                  表示内容によって、適切な解像度やリフレッシュレートの選定が重要になります。
                  <br />
                  映像の動きが多い場合は、高性能モデルを選ぶことでストレスのない視聴体験を提供できます。
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                <h3>5. 映像コンテンツの制作も依頼したいか？</h3>
                <p>
                  映像を最大限に活かすためには、
                  <strong>製品特性に最適化された専用コンテンツ</strong>
                  が必要です。
                  <br />
                  当社では、透明LEDディスプレイに最適なプロモーション動画や静止画バナーの制作も一貫して承っております。
                </p>
              </div>

              <div className="my-10 md:my-20">
                <Link href="/blog">
                  <Button>
                    コンテンツ制作について
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <p>
                透明フィルム型LEDビジョンの導入を検討する際は、「どこに、どれくらいの期間、どのような映像を表示するか」を事前に明確にしておくことが重要です。
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
            </div>
          </section>

          <section id="section06">
            <h2>
              <span></span>
              まとめ
            </h2>

            <p className="text-[1.2em] md:text-[1.5em] font-mincho text-yellow-300 mb-5">
              LEDビジョンを設置するなら、圧倒的に「{mainData.keyWords}
              」がおすすめです。
            </p>
            <p>
              数ある透過型LEDビジョンの中でも、「{mainData.keyWords}」は
              <strong>
                軽さ・透明度・柔軟性・省エネ性のすべてで群を抜いています
              </strong>
              。
              <br />
              わずか2kg/㎡の軽量設計と、170°の広視野角で、
              <strong>施工のしやすさと高い広告効果を両立</strong>。
              <br />
              湾曲ガラスや限られたスペースにも柔軟に対応できるため、商業施設・飲食店・ショールーム・オフィスビルのガラス面など、
              <strong>あらゆるシーンで集客力を最大化</strong>します。
              <br />
              <br />
              当社では、
              <strong>
                製品選定から施工、コンテンツ動画制作までワンストップで対応
              </strong>
              。
              <br />
              単なる販売ではなく、お客様のビジネスゴールを実現するための最適な提案をお約束します。
            </p>
          </section>
        </article>

        <Cta />

        <div className="mb-10">
          <Link href="/blog">
            <Button>ブログ一覧へ</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
