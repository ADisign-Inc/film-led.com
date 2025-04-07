import Link from "next/link";
import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { href: "/about", label: "透明フィルム型LEDビジョンとは？" },
  { href: "/blog", label: "LED ブログ" },
  { href: "/products", label: "サービス・料金" },
  { href: "/cases", label: "活用事例" },
  { href: "/faq", label: "FAQ" },
  { href: "/flow", label: "導入までの流れ" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* PC版ナビゲーション */}
      <nav className="hidden md:flex items-center gap-6">
        {menuItems.map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className="text-sm font-medium text-white hover:text-yellow-300 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* SP版ナビゲーション */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">メニュー</span>
        </Button>

        {/* SP版メニュー */}
        {isOpen && (
          <div className="fixed inset-0 top-20 bg-black/80 z-50">
            <nav className="container mx-auto px-5 py-8">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-yellow-200 transition-colors"
                    onClick={() => setIsOpen(false)}
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
