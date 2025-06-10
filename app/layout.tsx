import type React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { headers } from "next/headers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";
import "../styles/output.css";

import { ThemeProvider } from "../components/ThemeProvider";

import { GA_MEASUREMENT_ID } from "../lib/gtag";
import { mainData } from "../data/main";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("host") || "film-led.com";
  const pathname = headersList.get("x-pathname") || "";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  return {
    title: {
      default: `${mainData.keyWords}ビジョンの専門会社 | ${mainData.siteName}`,
      template: `%s | ${mainData.siteName}`,
    },
    description: `${mainData.siteName}は、${mainData.keyWords}ビジョンの専門会社です。高輝度で高品質な${mainData.keyWords}ビジョンを業界最安値でご提供しています。`,
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
          type="image/png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="HW8wae-WJ-9HvYA-j9rqu9y4W_6XSyTlrvnZeZaC6CI"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>

      <body
        className="min-h-screen bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
