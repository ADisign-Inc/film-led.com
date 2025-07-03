import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";

import { mainData } from "../../data/main";

export const metadata: Metadata = {
  title: `会社概要`,
  description: "会社概要ページです。",
};

const data = [
  { label: "会社名", value: mainData.companyName },
  {
    label: "所在地",
    value: [
      "福岡本社\n" +
        mainData.companyAddress.postalCode +
        " " +
        mainData.companyAddress.location,
      "京都支店\n" +
        mainData.companyAddressKyoto.postalCode +
        " " +
        mainData.companyAddressKyoto.location,
      "福岡倉庫\n" +
        mainData.warehouseFukuoka.postalCode +
        " " +
        mainData.warehouseFukuoka.location,
      "埼玉倉庫\n" +
        mainData.warehouseSaitama.postalCode +
        " " +
        mainData.warehouseSaitama.location,
    ],
  },
  { label: "代表取締役", value: mainData.representative },
  { label: "TEL", value: mainData.contact.telFukuoka },
  { label: "FAX", value: mainData.contact.faxFukuoka },
  { label: "事業内容", value: mainData.businesses },
  { label: "従業員数", value: mainData.numberOfEmployees },
  { label: "関連会社", value: mainData.affiliateCompanies },
  { label: "取引銀行", value: mainData.bank },
];

export default function CompanyPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-24 sm:py-28 md:py-40">
          <h2>
            Company
            <span>会社概要</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <table className="w-full text-sm md:text-lg">
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300/50">
                    <th className="text-left py-5 md:py-8 px-2 w-1/4 xs:w-1/3">
                      {item.label}
                    </th>
                    <td className="py-5 md:py-8">
                      {typeof item.value === "string"
                        ? item.value
                        : Array.isArray(item.value)
                          ? item.value.map((line, i) => (
                              <div
                                key={i}
                                className={
                                  item.label === "所在地" &&
                                  i < item.value.length - 1
                                    ? "mb-3"
                                    : ""
                                }
                              >
                                {line.split("\n").map((part, j) => (
                                  <div key={j}>{part}</div>
                                ))}
                              </div>
                            ))
                          : item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div>
          <Link href="/">
            <Button>TOPへ戻る</Button>
          </Link>
        </div>

        <Cta />
      </main>

      <Footer />
    </div>
  );
}
