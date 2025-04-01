import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { X, Check } from "lucide-react";

export default function AboutPage() {
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
        <section className="container max-w-6xl py-10 md:py-40">
          <h2>
            About
            <span>透明フィルムLEDビジョンとは？</span>
          </h2>

          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              現状の課題と解決策
            </h2>

            <div className="text-black grid gap-8 md:grid-cols-3">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  伝えたい情報が埋もれていませんか？
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <p>
                      店舗や商業施設で、ディスプレイやポスターを活用しても視認性が悪く、通行人に気づかれにくい。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <p>
                      従来のデジタルサイネージでは、設置場所に制約があり、効果的な位置に配置できない。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <p>
                      内装や空間デザインの美観を損なうことで、ブランド価値が低下してしまう。
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  従来のデジタルサイネージの限界とは？
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <p>
                      一般的な液晶ディスプレイやLEDビジョンは、場所を取るため設置が難しい。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <p>
                      既存のインテリアやガラス面と調和せず、視界を遮ってしまう。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <p>高額な導入コストや維持費がかかる。</p>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  透過フィルム デジタルサイネージなら解決！
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      透明なフィルムに映像を映し出し、空間を活かしたPRが可能。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      窓やガラス面に直接貼り付けられ、場所を取らずに設置可能。
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p>
                      美しいデザインと高い視認性で、商業施設・イベントなどの集客力を向上。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Explanation */}
        <section id="features" className="py-16 md:py-24 bg-background/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              デジタルサイネージとは？
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-white p-6 md:p-12 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  透明なのに高輝度表示！最新テクノロジーの仕組み
                </h3>
                <div className="space-y-4">
                  <p>
                    透過フィルムに映像を投影する技術を採用。高輝度・高解像度で鮮やかな映像を表示しながら、視界を遮らない革新的なディスプレイです。
                  </p>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/placeholder.svg?height=250&width=400"
                      alt="透過フィルム技術"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-white p-6 md:p-12 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  空間を活かす！ガラス面に設置できる斬新なディスプレイ
                </h3>
                <div className="space-y-4">
                  <p>
                    ガラスをそのままディスプレイとして活用。壁や窓を塞がずに情報発信が可能で、空間デザインを損なわず、洗練された演出を実現します。
                  </p>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/placeholder.svg?height=250&width=400"
                      alt="ガラス面設置例"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Explanation */}
        <section id="features" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              透過フィルム デジタルサイネージとは？
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  透明なのに高輝度表示！最新テクノロジーの仕組み
                </h3>
                <div className="space-y-4">
                  <p>
                    透過フィルムに映像を投影する技術を採用。高輝度・高解像度で鮮やかな映像を表示しながら、視界を遮らない革新的なディスプレイです。
                  </p>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/placeholder.svg?height=250&width=400"
                      alt="透過フィルム技術"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  空間を活かす！ガラス面に設置できる斬新なディスプレイ
                </h3>
                <div className="space-y-4">
                  <p>
                    ガラスをそのままディスプレイとして活用。壁や窓を塞がずに情報発信が可能で、空間デザインを損なわず、洗練された演出を実現します。
                  </p>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/placeholder.svg?height=250&width=400"
                      alt="ガラス面設置例"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              導入するメリット
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M2 9V5c0-1.1.9-2 2-2h4"></path>
                    <path d="M2 13v4c0 1.1.9 2 2 2h4"></path>
                    <path d="M22 9V5c0-1.1-.9-2-2-2h-4"></path>
                    <path d="M22 13v4c0 1.1-.9 2-2 2h-4"></path>
                    <rect x="9" y="1" width="6" height="22" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  空間デザインを損なわず、訴求力を向上
                </h3>
                <p className="text-muted-foreground">
                  高級感のある店舗や施設のブランドイメージを維持。シンプルなデザインでも、動的な映像で目を引きます。
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  目を引く演出で集客力UP
                </h3>
                <p className="text-muted-foreground">
                  ダイナミックな映像で、遠くからでも注目を集める。インタラクティブなコンテンツと組み合わせることで、より高い訴求力を実現。
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  設置自由度が高く、施工も簡単
                </h3>
                <p className="text-muted-foreground">
                  大掛かりな工事不要で、短期間で設置可能。レンタルプランなら低コストで試験運用も可能です。
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  レンタルプランで手軽に導入可能
                </h3>
                <p className="text-muted-foreground">
                  期間限定のイベントやキャンペーンに最適。初期費用を抑えて導入できるため、リスクが少ないです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              選ばれる理由・他商材との比較
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border p-4 text-left">比較項目</th>
                    <th className="border p-4 text-center bg-blue-100">
                      透過フィルムデジタルサイネージ
                    </th>
                    <th className="border p-4 text-center">
                      従来のデジタルサイネージ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-medium">設置スペース</td>
                    <td className="border p-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                      <span className="block mt-1">
                        既存のガラス面に設置可能
                      </span>
                    </td>
                    <td className="border p-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                      <span className="block mt-1">専用スペースが必要</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-medium">視界の確保</td>
                    <td className="border p-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                      <span className="block mt-1">透明で視界を遮らない</span>
                    </td>
                    <td className="border p-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                      <span className="block mt-1">不透明で視界を遮る</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-medium">設置工事</td>
                    <td className="border p-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                      <span className="block mt-1">簡易な施工で設置可能</span>
                    </td>
                    <td className="border p-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                      <span className="block mt-1">大掛かりな工事が必要</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-medium">コスト</td>
                    <td className="border p-4 text-center bg-blue-50">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                      <span className="block mt-1">
                        レンタルプランあり、低コスト
                      </span>
                    </td>
                    <td className="border p-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                      <span className="block mt-1">高額な初期投資が必要</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
