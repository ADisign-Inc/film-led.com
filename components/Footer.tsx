import Link from "next/link";
import Image from "next/image";
import { mainData } from "../data/main";

const FooterItems = [
  { href: "/blog/about-film-led", label: `${mainData.keyWords}とは？` },
  { href: "/cases", label: "活用事例" },
  { href: "/archives", label: "導入実績" },
  { href: "/products", label: "製品情報" },
  { href: "/contents", label: "コンテンツ制作" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/blog", label: "ブログ" },
];

const FooterItems02 = [
  { href: "/faq", label: "FAQ" },
  { href: "/company", label: "会社概要" },
  { href: mainData.contact.url, label: "お問い合わせ" },
];

const FooterItems03 = [
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  { href: "#", label: "利用規約" },
  { href: "#", label: "特定商取引法に基づく表記" },
];

export function Footer() {
  return (
    <footer className="text-gray-300 border-t border-gray-400 py-5 md:py-14 mt-20">
      <div className="container">
        <div className="grid md:gap-8 md:grid-cols-4">
          <div className="mb-8 md:mb-0">
            <div className="w-40 mb-5">
              <Link href="/">
                <img
                  src="/images/logo-dark.svg"
                  alt="Logo"
                  className="w-full h-auto"
                />
              </Link>
            </div>

            <ul className="space-y-2 text-sm">
              <li>{mainData.companyAddress.postalCode}</li>
              <li>
                {mainData.companyAddress.prefecture}
                {mainData.companyAddress.city}
                {mainData.companyAddress.street}
              </li>
              <li>TEL: {mainData.contact.tel}</li>
              <li className="text-lg">{mainData.companyName}</li>
            </ul>
          </div>

          <div></div>

          <div>
            {/* <p className="text-lg font-semibold mb-4 text-white">サービス</p> */}
            <ul className="space-y-2 text-sm">
              {FooterItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* <p className="text-lg font-semibold mb-4 text-white">会社情報</p> */}
            <ul className="space-y-2 text-sm">
              {FooterItems02.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400/50 mt-8 pt-3 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[10px] sm:text-xs text-gray-400">
            © {new Date().getFullYear()} {mainData.companyNameEn} All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            {FooterItems03.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] sm:text-xs hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
