import Link from "next/link";
import Image from "next/image";
import { mainData } from "../data/main";

export function Footer() {
  return (
    <footer className="text-gray-300 border-t border-gray-400 py-12 md:py-14 mt-20">
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
            <ul className="space-y-2 text-sm">
              <li>{mainData.companyAddress.postalCode}</li>
              <li>
                {mainData.companyAddress.prefecture}
                {mainData.companyAddress.city}
                {mainData.companyAddress.street}
              </li>
              <li>TEL: {mainData.contact.tel}</li>
            </ul>
          </div>

          <div></div>

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
                <Link
                  href="https://adisignage.com/about.html"
                  className="hover:text-white"
                  target="_blank"
                >
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

        </div>

        <div className="border-t border-gray-400/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {mainData.companyNameEn} All Rights
            Reserved.
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
