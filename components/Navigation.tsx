import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mainData } from "../data/main";

const menuItems = [
  { href: "/blog/about-film-led", label: "透明LEDフィルムとは？" },
  { href: "/cases", label: "活用事例" },
  { href: "/archives", label: "導入実績" },
  { href: "/products", label: "製品情報" },
  { href: "/products", label: "コンテンツ制作" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "ブログ" },
  { href: mainData.contact.url, label: "お問い合わせ" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* PC */}
      <nav className="hidden lg:flex items-center gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className="text-base font-semibold text-white hover:text-yellow-300 transition-colors"
            {...(item.href === "{mainData.contact.urll}"
              ? { target: "_blank" }
              : {})}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* SP */}
      <div className="lg:hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer p-2 bg-transparent text-white hover:bg-white/10 hover:text-white border border-transparent hover:border-yellow-300 z-50"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          <span className="sr-only">メニュー</span>
        </div>

        {/* SP メニュー */}
        {isOpen && (
          <div className="fixed inset-0 top-16 bg-black/90 z-40">
            <nav className="container mx-auto px-5 py-8">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-yellow-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                    {...(item.href === "{mainData.contact.urll}"
                      ? { target: "_blank" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
