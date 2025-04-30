import Image from "next/image";
import { X, Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";
import { mainData } from "../../../data/main";
import { caseData } from "../../../data/cases";

export default async function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="fixed inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/bg01.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <Header />

      <main className="flex-1">
        <div className="container max-w-5xl py-10 md:py-40">
          <h2>
            About
            <span>{mainData.keyWords}とは？</span>
          </h2>

          <article className="bg-white/85 [&_p]:text-black [&_h3]:text-black px-5 md:px-16 py-16 md:py-20">
            <section className="mb-10 md:mb-20">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                店舗の集客力を劇的に変える ─ 高輝度 {mainData.keyWords}
              </h3>

              <div className="w-4/5 mx-auto mb-10">
                <div className="relative w-full pb-[56.25%] overflow-hidden">
                  <div className="absolute inset-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/01.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-semibold mb-5">
                  「通りすがりの一瞬を、確実に掴む。」
                </p>
                <p>
                  そんな広告運用を目指すなら、透明LEDフィルムがベストな選択です。
                  <br />
                  明るい場所でも見やすく、4K解像度の鮮やかな映像で、訴求力は段違い。
                  <br />
                  映像・音声・文字情報を組み合わせた多彩な演出が可能な本機は、集客・情報発信に革新をもたらします。
                </p>
              </div>
            </section>

            {/* 透明フィルムLEDビジョンとは？ */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                {mainData.keyWords}とは？
              </h3>

              <div className="mb-5 md:mb-10">
                <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                  1. 技術の仕組み（{mainData.keyWords}の原理や構造）
                </p>
                <p className="ml-5">
                  {mainData.keyWords}
                  は、非常に薄い透明フィルムに微細なLEDチップを配置したディスプレイ技術です。
                  <br />
                  このフィルムは、ガラスやアクリルなどの透明素材に貼り付けて使用され、ディスプレイとしての機能を発揮しながらも視界を遮ることがありません。
                  <br />
                  フィルム自体は高透過率を持ち、映像や情報を表示するためにLEDチップが高輝度で発光します。
                  <br />
                  LEDチップ間の間隔は非常に細かく設計されており、光の透過性を最大限に確保しつつ、鮮やかな映像を表示します。
                  <br />
                  この技術は、LEDの微細な構造を活用することで、従来の大型ディスプレイでは実現できなかった「透明性」を持たせながらも高解像度の映像を投影できるという特長を持っています。
                </p>
              </div>
              <div className="mb-5 md:mb-10">
                <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                  2. 通常のLEDディスプレイとの違い
                </p>
                <p className="ml-5">
                  通常のLEDディスプレイと{mainData.keyWords}
                  の最大の違いは、ディスプレイの設置方法と視覚的な影響です。
                  <br />
                  通常のLEDディスプレイは、完全に光を発するパネルが前面に配置されるため、設置するには十分なスペースと深さが必要です。
                  <br />
                  このため、従来のディスプレイは設置場所や空間に制約が多いというデメリットがあります。
                  一方、{mainData.keyWords}
                  は非常に薄く、透明な素材に設置できるため、物理的なスペースをほとんど占有せず、さらに視覚的にも設置場所が目立たず、インテリアや景観に影響を与えません。
                  <br />
                  従来のLEDディスプレイが背面にLEDパネルが搭載されているのに対し、
                  {mainData.keyWords}
                  は前面やガラス面に張り付けて使えるため、視覚的にも「透明感」が感じられます。
                </p>
              </div>
              <div className="mb-5 md:mb-10">
                <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                  3. 「透明」であることによる独自の価値・メリット
                </p>
                <p className="ml-5">
                  {mainData.keyWords}の最大の特徴は、その透明性です。
                  <br />
                  ガラスや窓、アクリル板などの透過する素材に貼り付けることができるため、ディスプレイとして機能しながらも空間を占有せず、景観を損なうことなく使用できます。
                  <br />
                  この透明性は、商業施設やオフィス、店舗のガラス面に設置することで、内部の視覚的な開放感を保ちつつ、外部からは美しい映像や広告を発信できるというメリットがあります。
                  <br />
                  さらに、昼間はガラスを通して外の景色をそのまま見ることができ、夜間や暗い場所ではその透明フィルムが輝き、鮮やかな映像を表示するというダイナミックなギャップも魅力です。
                  <br />
                  また、透明LEDフィルムはインタラクティブな機能や動画コンテンツと連動させることも可能で、より高度なエンターテインメントやマーケティング手法を展開することができます。
                  <br />
                  この透明性がもたらす効果的なブランディングや情報発信は、他のディスプレイ技術にはない独自の価値を提供します。
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-5 md:mb-12">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={700}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <p className="mb-3 md:mb-10">
                  {mainData.keyWords}
                  は、ガラスやアクリルなどの透明な素材に直接取り付けることで、視界を遮らずに映像や情報を表示できる革新的なディスプレイ技術です。
                  <br />
                  従来のLEDディスプレイや液晶ディスプレイ（LCD）とは異なり、透過性を維持しながらも高輝度・高解像度の映像を表示できるため、商業施設、オフィスビル、ショールーム、交通機関、イベント会場など、さまざまな場所で活用されています。
                </p>

                <p className="mb-3 md:mb-10">
                  このディスプレイは、透明なフィルム上に微細なLEDチップを均等に配置し、電子制御によって映像を形成する仕組みを採用しています。
                  <br />
                  LEDチップ間の隙間が最適化されており、視認性を確保しながらも透明度を損なわないのが大きな特徴です。
                  <br />
                  通常のLEDディスプレイと異なり、設置場所のデザインや空間の開放感を維持しつつ、情報発信が可能なため、広告や案内表示、装飾用途として非常に高い評価を受けています。
                </p>

                <div className="flex justify-center w-5/6 mx-auto my-5 md:my-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/01.mp4" type="video/mp4" />
                  </video>
                </div>

                <p className="mb-5 md:mb-10">
                  {mainData.keyWords}
                  は、薄型・軽量で、設置の自由度が高い点も大きな利点です。
                  <br />
                  一般的なディスプレイは、壁面やスタンドに固定する必要がありますが、この技術を用いることで、窓ガラスやガラス製のパーテーションなど、従来のディスプレイが設置できなかった場所にも導入できます。
                  <br />
                  これにより、空間の有効活用が可能となり、建築デザインやインテリアの美観を損なわずに情報を発信できるのです。
                </p>

                <p className="mb-5 md:mb-10">
                  さらに、{mainData.keyWords}
                  は、明るい環境でも高い視認性を確保できる点が優れています。
                  <br />
                  従来のプロジェクターを使用した透明スクリーンと比べ、LEDの自己発光技術により、直射日光下でも鮮明な映像を表示できます。
                  <br />
                  このため、屋外のショーウィンドウや駅、空港などの公共空間での使用にも適しており、昼夜を問わずクリアな視認性を提供します。
                </p>

                <p className="mb-5 md:mb-10">
                  技術の進化に伴い、{mainData.keyWords}
                  には、タッチスクリーン機能を組み込んだインタラクティブディスプレイモデルも登場しています。
                  <br />
                  これにより、ユーザーが直接画面に触れて操作できるようになり、製品情報の検索やショッピング、施設案内などの用途で活用される機会が増えています。
                  <br />
                  加えて、IoT（モノのインターネット）と連携することで、遠隔操作によるコンテンツ管理や、センサーとの連携によるインタラクティブな情報表示が可能となるなど、さらなる進化が期待されています。
                </p>

                <p className="mb-5 md:mb-10">
                  このように、{mainData.keyWords}
                  は、従来のディスプレイ技術の枠を超え、さまざまな環境での情報表示や広告活用を可能にする新しいソリューションです。
                  <br />
                  省エネルギーで環境負荷が少なく、設置やメンテナンスも容易なため、今後ますます幅広い分野での導入が進むと考えられています。
                </p>
              </div>
              <div>
                <p>
                  COB (Chip on board) LED RGB発光素子を透明PETフィルムに直接
                  搭載する技術で、LEDが小さく薄くなって小さなピッチでも高い透明度を維持することができます。
                  ※最小ピッチ：3.75mm
                </p>
              </div>
            </section>

            {/* 透明フィルムLEDビジョンの技術的な仕組み */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                {mainData.keyWords}の技術的な仕組み
              </h3>

              <div className="mb-5 md:mb-8">
                <p className=" md:text-xl font-semibold mb-4 md:mb-8">
                  ・透明なのに高輝度表示！最先端テクノロジー
                </p>
                <div className="space-y-4 ml-5">
                  <p>
                    {mainData.keyWords}
                    は、50～92%の透明度で、コンテンツを送出している時も光の透過ができます。
                    <br />
                    これにより、ガラス面をそのまま利用しながら、視界を遮ることなく鮮やかな映像を映し出します。
                    <br />
                    最新技術により、ディスプレーを点灯してない状態では、設置面の反対側がそのまま見える高い透明度を保ち、直射日光の中でも視認性を維持できます。
                  </p>
                  <p>
                    {mainData.keyWords}
                    は、従来のディスプレイ技術に比べ、スペースを節約しつつ効果的な広告表示を実現します。
                    <br />
                    屋外でも屋内でも使用でき、昼夜を問わず安定した表示が可能です。これにより、コンテンツ映像と同時に内部の環境または製品を見せることができ、公共施設や商業施設など、幅広い業界で活用されるようになっています。
                  </p>
                </div>
              </div>

              <div className="">
                <p className=" md:text-xl font-semibold mb-4 md:mb-8">
                  ・空間を活かす！ガラス面に設置できる斬新なディスプレイ
                </p>
                <div className="space-y-4 ml-5">
                  <p>
                    {mainData.keyWords}
                    の最大の特徴は、ガラス面に直接設置できることです。これにより、建物の外観や内装を損なうことなく、広告や情報を表示することができます。
                    <br />
                    店舗のウィンドウやビルのガラスパネルに取り付けることで、スペースを有効活用しつつ、視覚的な効果を最大化できます。
                  </p>
                  <p>
                    また、ガラス面に設置するため、ディスプレイが目立ちすぎず、周囲の空間に調和します。
                    <br />
                    これにより、店舗や企業のブランドイメージを洗練された形で演出できます。例えば、高級ブランド店では、店舗の外観を美しく保ちながら、動的な広告を表示することが可能になります。
                  </p>
                  <p>
                    空間デザインと情報発信を両立させる{mainData.keyWords}
                    は、都市型ビジネスにおいて非常に効果的なツールであり、今後ますます需要が高まることが予想されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 透明フィルムLEDビジョンの主な特徴 */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                {mainData.keyWords}の主な特徴
              </h3>

              <div className="flex justify-center gap-5 mb-5 md:mb-10">
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
                <div className="mb-8 md:mb-10">
                  <p className="text-lg md:text-2xl font-semibold mb-5 md:mb-6">
                    1、透明性
                  </p>
                  <p className="ml-5">
                    {mainData.keyWords}の最大の特徴は、「透明性」にあります。
                    <br />
                    透明なフィルムにLEDチップが組み込まれているため、映像を表示していない部分はそのまま透明で、視界を遮りません。
                    <br />
                    このため、ガラス面や窓に設置しても、視界が確保され、空間全体の美観を損ねることがありません。
                  </p>
                </div>
                <div className="mb-8 md:mb-10">
                  <p className="text-lg md:text-2xl font-semibold mb-5 md:mb-6">
                    2、高輝度・高解像度表示
                  </p>
                  <p className="ml-5">
                    最新のLED技術を活用しており、非常に高輝度・高解像度で映像を表示できます。
                    <br />
                    直射日光下でも高い視認性を誇り、屋外の過酷な環境でも明るく鮮明な映像を提供できます。
                    <br />
                    このため、広告や情報表示に適しており、夜間・昼間を問わず効果的に使用できます。
                  </p>
                </div>
                <div className="mb-8 md:mb-10">
                  <p className="text-lg md:text-2xl font-semibold mb-5 md:mb-6">
                    3、薄型・軽量
                  </p>
                  <p className="ml-5">
                    {mainData.keyWords}
                    は、非常に薄く、軽量であるため、設置が簡単で、既存の構造物に対しても負担をかけません。
                    <br />
                    さらに、軽量性を活かして、移動や設置変更が簡単に行えます。
                  </p>
                </div>
                <div className="mb-8 md:mb-10">
                  <p className="text-lg md:text-2xl font-semibold mb-5 md:mb-6">
                    4、優れた熱放出と安定
                  </p>
                  <p className="ml-5">
                    COBパッケージは、従来のIC内蔵型LEDより発熱が少なく、LEDフィルムの表面温度が周辺温度と約2°C程度高いため、室内での使用に適しています。
                    <br />
                    また、損傷しやすい敏感な部品の外部露出を最小化し、過酷な環境でも高い安定性を持ちます。
                  </p>
                </div>
              </div>
            </section>

            {/* 現状の課題 */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                現状の課題
              </h3>

              <div className="mb-5 md:mb-14">
                <div className="mb-5 md:mb-8">
                  <p className="text-lg md:text-xl font-semibold mb-3">
                    ・伝えたい情報が埋もれていませんか？
                  </p>
                  <ul className="ml-5 space-y-3">
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

                <div className="mb-5 md:mb-8">
                  <p className="text-lg md:text-xl font-semibold mb-3">
                    ・従来のLEDビジョンの限界とは？
                  </p>
                  <ul className="ml-5 space-y-3">
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

                <div className="mb-5 md:mb-8">
                  <p className="text-lg md:text-xl font-semibold mb-3">
                    ・{mainData.keyWords}なら解決！
                  </p>
                  <ul className="ml-5 space-y-3">
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
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                使用例と活用シーン
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8 md:gap-y-10">
                {caseData.slice(0, 4).map((cases_) => (
                  <div>
                    <div className="flex justify-center mb-3 md:mb-5">
                      <Image
                        src={cases_.image[0]}
                        alt={cases_.title}
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xl font-semibold mb-3 md:mb-5">
                      {cases_.title}
                    </p>
                    <p>{cases_.description}</p>
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
                  <Button>使用例と活用シーンについて詳しく見る</Button>
                </div>
              </div>
            </section>

            {/* 透明フィルムLEDビジョンの仕様 */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                {mainData.keyWords}の仕様
              </h3>

              <div>
                <div className="flex justify-center mb-3">
                  <Image
                    src="/images/about/specification01.jpg"
                    alt=""
                    width={700}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <Image
                    src="/images/about/01.jpg"
                    alt=""
                    width={700}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* 導入するメリット */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                導入するメリット
              </h3>

              <div className="">
                <div className="mb-5 md:mb-10">
                  <div className="flex items-center gap-2 mb-3 md:mb-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-700"
                      >
                        <path d="M2 9V5c0-1.1.9-2 2-2h4"></path>
                        <path d="M2 13v4c0 1.1.9 2 2 2h4"></path>
                        <path d="M22 9V5c0-1.1-.9-2-2-2h-4"></path>
                        <path d="M22 13v4c0 1.1-.9 2-2 2h-4"></path>
                        <rect x="9" y="1" width="6" height="22" rx="2"></rect>
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl font-semibold">
                      空間デザインを損なわず、訴求力を向上
                    </p>
                  </div>
                  <p className="ml-5">
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

                <div className="mb-5 md:mb-10">
                  <div className="flex items-center gap-2 mb-3 md:mb-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-700"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl font-semibold">
                      目を引く演出で集客力UP
                    </p>
                  </div>
                  <p className="ml-5">
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

                <div className="mb-5 md:mb-10">
                  <div className="flex items-center gap-2 mb-3 md:mb-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-700"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl font-semibold">
                      設置自由度が高く、施工も簡単
                    </p>
                  </div>
                  <p className="ml-5">
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

                <div className="mb-5 md:mb-10">
                  <div className="flex items-center gap-2 mb-3 md:mb-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-700"
                      >
                        <path d="M12 2v20"></path>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl font-semibold">
                      レンタルプランで手軽に導入可能
                    </p>
                  </div>
                  <p className="ml-5">
                    {mainData.keyWords}
                    は、購入だけでなくレンタルプランも提供されているため、短期間のイベントやキャンペーンにも手軽に導入できます。
                    <br />
                    例えば、期間限定のポップアップストアや展示会、プロモーションイベントなどでは、設置コストを抑えつつ、インパクトのある演出を行うことができます。
                    <br />
                    レンタルなら、初期投資を抑えながら運用できるため、まずは試験導入して効果を確認したい企業にとっても最適な選択肢となります。
                    <br />
                    また、イベント終了後には簡単に撤去できるため、不要な保管コストがかからず、スペースを有効活用できます。
                    <br />
                    さらに、最新の機種を試せる機会にもなり、導入前に技術的な適合性を確認することが可能です。このように、レンタルプランを活用すれば、低リスクかつ柔軟に
                    {mainData.keyWords}を導入できます。
                  </p>
                </div>
              </div>
            </section>

            {/* 選ばれる理由・他商材との比較 */}
            <section className="mb-10 md:mb-24">
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                選ばれる理由・他商材との比較
              </h3>

              <div className="px-5 mb-5 md:mb-8">
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

              <div className="mx-5">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/90">
                      <th className="border border-gray-400 p-4 text-left"></th>
                      <th className="border border-gray-400 p-4 text-center bg-yellow-200">
                        {mainData.keyWords}
                      </th>
                      <th className="border border-gray-400 p-4 text-center bg-gray-200">
                        従来のLEDビジョン
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/90">
                    <tr>
                      <td className="bg-gray-100 border border-gray-400 p-4 font-medium">
                        設置スペース
                      </td>
                      <td className="border border-gray-400 p-4 text-center bg-yellow-50">
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
                      <td className="bg-gray-100 border border-gray-400 p-4 font-medium">
                        視界の確保
                      </td>
                      <td className="border border-gray-400 p-4 text-center bg-yellow-50">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="block mt-1">透明で視界を遮らない</span>
                      </td>
                      <td className="border border-gray-400 p-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="block mt-1">不透明で視界を遮る</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 border border-gray-400 p-4 font-medium">
                        設置工事
                      </td>
                      <td className="border border-gray-400 p-4 text-center bg-yellow-50">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="block mt-1">簡易な施工で設置可能</span>
                      </td>
                      <td className="border border-gray-400 p-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="block mt-1">大掛かりな工事が必要</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 border border-gray-400 p-4 font-medium">
                        コスト
                      </td>
                      <td className="border border-gray-400 p-4 text-center bg-yellow-50">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="block mt-1">
                          レンタルプランあり、低コスト
                        </span>
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
            <section>
              <h3 className="text-2xl text-start font-bold flex items-center gap-6 mb-5 md:mb-10">
                <span className="w-1 h-10 bg-yellow-400"></span>
                まとめ
              </h3>

              <div>
                <div className="md:flex gap-5">
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
                      設置方法や活用事例、レンタルプランなど、詳しく知りたい方はぜひお気軽にお問い合わせください。専門スタッフが最適な導入プランをご提案いたします。
                    </p>
                  </div>
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/images/about/08.jpg"
                      alt=""
                      width={600}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="mt-10">
                    <Button>
                      無料相談・お申し込みはこちら
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
