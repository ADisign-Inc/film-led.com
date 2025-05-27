import { mainData } from "./main";

export type Blog = {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string[];
  slug: string;
  isVisible: boolean;
};

export const blogData: Blog[] = [
  {
    id: "0001",
    url: "/about-film-led",
    title: `【最先端LED】${mainData.keyWords}とは？\n技術的な仕組みや特徴を徹底解説`,
    description: `店舗や施設のガラス面を広告メディアに変える「${mainData.keyWords}」とは？仕組み・特徴・導入メリット・他商品との違いをわかりやすく解説。集客・空間演出に革新をもたらす最先端ディスプレイ技術をご紹介します。`,
    image: "/images/blog/0001.jpg",
    date: "2025-04-20",
    category: ["ガイド", "LEDビジョン"],
    slug: "0001",
    isVisible: true,
  },
  {
    id: "0002",
    url: "/difference-film-led",
    title: "【徹底比較】3種類の透過型LEDビジョンの違いとおすすめ製品はこれ！",
    description: `ガラス面に映像を映し出す透過型LEDビジョンの種類と違いを徹底比較。${mainData.keyWords}・IC内蔵型・バー型PCBの3タイプを解説し、施工性・透明度・消費電力の観点から最適な選び方をご紹介。省エネ・高視認性の最新サイネージ導入を検討中の方は必見です。`,
    image: "/images/blog/difference-film-led/fv.jpg",
    date: "2025-04-30",
    category: ["ガイド", "LEDビジョン"],
    slug: "0002",
    isVisible: true,
  },
  {
    id: "0003",
    url: "/film-led-advertisement",
    title: `LEDなのに“透ける”ってどういうこと？最先端${mainData.keyWords}で差がつく広告の魅せ方`,
    description:
      "店舗・イベント・展示会に最適！空間を邪魔せず視線を奪う、次世代ディスプレイの正体とは？",
    image: "/images/blog/film-led-advertisement/fv.jpg",
    date: "2025-05-28",
    category: ["ガイド", "LEDビジョン"],
    slug: "0003",
    isVisible: true,
  },
  {
    id: "0004",
    url: "/",
    title: "",
    description: "",
    image: "/images/blog/",
    date: "2025-05-20",
    category: ["ガイド", "LEDビジョン"],
    slug: "0004",
    isVisible: false,
  },
];
