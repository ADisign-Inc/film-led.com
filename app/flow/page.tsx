import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { mainData } from "../../data/main";

export default function FlowPage() {
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
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Flow
            <span>導入までの流れ</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white" />

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">1</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">
                    無料相談・お申し込み
                  </h4>
                  <p className="mb-8">
                    まずはお気軽にご相談ください。導入に関する疑問やご要望をお聞きし、具体的な導入イメージをお伝えします。
                    <br />
                    実際にデモを体験していただくことで、視覚的なイメージをより明確にし、技術や機能に対する理解を深めていただけます。
                    <br />
                    オンライン相談も対応可能ですので、遠方のお客様でもお気軽にご利用いただけます。
                  </p>

                  <Button variant="default">
                    無料相談・お申し込みはこちら
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">2</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">
                    ヒアリング・最適プランのご提案
                  </h4>
                  <p className="">
                    お客様の目的や予算、設置環境に合わせて最適なプランをご提案します。
                    <br />
                    どのようなコンテンツを表示したいのか、設置場所のサイズや形状に合わせた具体的な設置方法を検討し、システム全体の構築をお手伝いします。
                    <br />
                    また、コンテンツ制作についてのご相談にも応じ、効果的な映像や広告コンテンツの作成についてもサポートします。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">3</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">お見積もり</h4>
                  <p className="">
                    専門スタッフが、設置から運用に至るまでの全体的なサポート体制を整えたうえで、お見積もりをご提案します。
                    <br />
                    お客様の予算に合わせて、最適なプランと機材を選定し、納得いただける価格でご案内します。
                    <br />
                    また、コンテンツの更新方法や運用についても、実際にどのように管理するかについてアドバイスいたします。
                    <br />
                    アフターフォロー体制も整えており、導入後も安心して運用いただけます。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">4</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">ご発注</h4>
                  <p className="">
                    お見積もりにご納得いただけましたら、正式にご発注となります。
                    <br />
                    発注後は、具体的なスケジュールや設置準備が進行します。
                    <br />
                    すべての工程をしっかりとサポートし、お客様のビジョンに沿った最適な環境を構築します。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">5</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">
                    コンテンツ制作・サイネージ構築・導入
                  </h4>
                  <p className="">
                    コンテンツの制作が必要な場合、映像制作を専門のチームが行い、貴社のブランドやメッセージにマッチしたデザインを仕上げます。
                    <br />
                    映像の効果的な構成や演出を考えた上で、{mainData.keyWords}
                    に最適なサイネージを構築します。
                    <br />
                    システムの導入に際しては、機器の設置や接続、各種設定を専門スタッフが行いますので、スムーズに進行できます。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">6</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">設置工事</h4>
                  <p className="">
                    {mainData.keyWords}の設置工事を実施します。
                    <br />
                    設置場所の詳細な確認を行い、必要な調整を施しながら施工を進めます。
                    <br />
                    ガラス面やアクリルパネルへのフィルム貼り付け作業、電源や配線の接続を確実に行い、安全で美しい仕上がりを実現します。
                    <br />
                    設置後は、現場で動作確認を行い、問題なく作動することを確認します。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 md:gap-8 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 border-4 border-white">
                  <span className="text-xl font-bold text-black">7</span>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl md:text-2xl mb-5">
                    操作説明・運用サポート
                  </h4>
                  <p className="">
                    設置後、{mainData.keyWords}
                    の操作方法について、専門スタッフから詳しい説明を行います。
                    <br />
                    映像コンテンツの更新方法やシステム管理、日常的なメンテナンスについても丁寧にレクチャーいたします。
                    <br />
                    導入後の運用サポート体制も万全で、万が一のトラブルにも迅速に対応し、長期的に安心して運用できるようサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
