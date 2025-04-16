import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Cta } from "@/components/ui/Cta";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg01.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Products
            <span>製品一覧</span>
          </h2>

          <div className="max-w-3xl mx-auto"></div>

          {/* <div className="bg-white/15 text-black py-20">
            <Tabs defaultValue="rental" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="rental">レンタルプラン</TabsTrigger>
                <TabsTrigger value="purchase">購入プラン</TabsTrigger>
              </TabsList>

              <TabsContent value="rental" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="border rounded-xl p-6 bg-blue-50">
                    <h3 className="text-xl font-semibold mb-2">
                      スタンダードプラン
                    </h3>
                    <div className="text-3xl font-bold mb-4">
                      ¥50,000
                      <span className="text-base font-normal">/月〜</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {[
                        "透過フィルム（標準サイズ）",
                        "プロジェクター・コントローラー一式",
                        "基本コンテンツ制作（1点）",
                        "設置・撤去サポート",
                      ].map((item, index) => (
                        <li
                          key={`standard-${index}`}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">お問い合わせ</Button>
                  </div>

                  <div className="border rounded-xl p-6 bg-blue-100">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
                      おすすめ
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      プレミアムプラン
                    </h3>
                    <div className="text-3xl font-bold mb-4">
                      ¥80,000
                      <span className="text-base font-normal">/月〜</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>透過フィルム（大型サイズ）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>高輝度プロジェクター・コントローラー一式</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>カスタムコンテンツ制作（3点まで）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>設置・撤去サポート</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>24時間サポート対応</span>
                      </li>
                    </ul>
                    <Button className="w-full">お問い合わせ</Button>
                  </div>
                </div>
                <p className="text-center text-sm text-white">
                  ※最低契約期間は3ヶ月からとなります。詳細はお問い合わせください。
                </p>
              </TabsContent>

              <TabsContent value="purchase" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="border rounded-xl p-6 bg-blue-50">
                    <h3 className="text-xl font-semibold mb-2">
                      スタンダードプラン
                    </h3>
                    <div className="text-3xl font-bold mb-4">
                      ¥500,000
                      <span className="text-base font-normal">〜</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {[
                        "透過フィルム（標準サイズ）",
                        "プロジェクター・コントローラー一式",
                        "基本コンテンツ制作（1点）",
                        "設置サポート",
                        "1年間保証",
                      ].map((item, index) => (
                        <li
                          key={`premium-${index}`}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">お問い合わせ</Button>
                  </div>

                  <div className="border rounded-xl p-6 bg-blue-100">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
                      おすすめ
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      プレミアムプラン
                    </h3>
                    <div className="text-3xl font-bold mb-4">
                      ¥800,000
                      <span className="text-base font-normal">〜</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>透過フィルム（大型サイズ）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>高輝度プロジェクター・コントローラー一式</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>カスタムコンテンツ制作（5点まで）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>設置サポート</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>3年間保証</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>優先サポート対応</span>
                      </li>
                    </ul>
                    <Button className="w-full">お問い合わせ</Button>
                  </div>
                </div>
                <p className="text-center text-sm text-white">
                  ※カスタムサイズや特殊設置の場合は別途お見積りいたします。
                </p>
              </TabsContent>
            </Tabs>
          </div> */}
        </section>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
