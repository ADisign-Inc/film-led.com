import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-transparent text-gray-300 border-t border-gray-300 py-12 mt-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-5">
              <Image
                src="/images/logo-dark.svg"
                alt="Logo"
                width={160}
                height={100}
                layout="intrinsic"
              />
            </div>
            <p className="text-sm text-gray-300">
              革新的なデジタルサイネージで空間を変える。ビジネスの集客力を最大化する最先端ディスプレイをご提供します。
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-white">サービス</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  レンタルプラン
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  購入プラン
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  コンテンツ制作
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  保守サポート
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-white">会社情報</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  導入実績
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  お知らせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-white">
              お問い合わせ
            </p>
            <ul className="space-y-2 text-sm">
              <li>〒123-4567</li>
              <li>東京都〇〇区〇〇町1-2-3</li>
              <li>TEL: 03-1234-5678</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} Adisign All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-xs hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-xs hover:text-white">
              利用規約
            </Link>
            <Link href="#" className="text-xs hover:text-white">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
