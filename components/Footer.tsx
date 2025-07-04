import Link from "next/link";
import Image from "next/image";
import { mainData } from "../data/main";

const FooterItems = [
  { href: "/blog/about-film-led", label: `${mainData.keyWords}とは？` },
  { href: "/cases", label: "活用事例" },
  { href: "/archives", label: "導入実績" },
  { href: "/products", label: "製品情報" },
];

const FooterItems02 = [
  { href: "/contents", label: "コンテンツ制作" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/blog", label: "ブログ" },
  { href: "/faq", label: "FAQ" },
];

const FooterItems03 = [
  { href: "/company", label: "会社概要" },
  { href: mainData.contact.url, label: "お問い合わせ" },
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  // { href: "#", label: "利用規約" },
  // { href: "#", label: "特定商取引法に基づく表記" },
];

export function Footer() {
  return (
    <footer className="text-gray-300 border-t border-gray-400 py-8 md:py-14 mt-20 md:mt-40 [&_li]:text-xs [&_li]:sm:text-sm">
      <div className="container max-w-7xl mx-auto">
        <div className="md:flex gap-x-10 md:justify-between">
          <div className="mb-12 md:mb-0">
            <div className="w-32 md:w-40 mb-3">
              <Link href="/">
                <Image
                  src="/images/logo-dark.svg"
                  alt={mainData.companyName}
                  width={160}
                  height={40}
                  className="w-full h-auto"
                />
              </Link>
            </div>

            <p className="mb-5">{mainData.companyName}</p>

            <div className="flex gap-x-10">
              <ul>
                <li className="font-bold mb-1">福岡本社</li>
                <li>{mainData.companyAddress.postalCode}</li>
                <li className="mb-1">{mainData.companyAddress.location}</li>
                <li>TEL: {mainData.contact.telFukuoka}</li>
              </ul>

              <ul>
                <li className="font-bold mb-1">京都支店</li>
                <li>{mainData.companyAddressKyoto.postalCode}</li>
                <li className="mb-1">
                  {mainData.companyAddressKyoto.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-x-10 md:gap-x-20">
            <div>
              <ul className="space-y-2">
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
              <ul className="space-y-2">
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
        </div>

        <div className="border-t border-gray-400/50 mt-8 pt-3 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[10px] sm:text-xs text-gray-300">
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
