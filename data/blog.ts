import { mainData } from "./main";

export type Blog = {
  id: string;
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
    slug: "about-film-led",
    title: `【最先端LED】${mainData.keyWords}とは？\n技術的な仕組みや特徴を徹底解説`,
    description: `店舗や施設のガラス面を広告メディアに変える「${mainData.keyWords}」とは？仕組み・特徴・導入メリット・他商品との違いをわかりやすく解説。集客・空間演出に革新をもたらす最先端ディスプレイ技術をご紹介します。`,
    image: "/images/blog/about-film-led/fv.webp",
    date: "2025-04-20",
    category: ["ガイド", `${mainData.keyWords}`],
    isVisible: true,
  },
  {
    id: "0002",
    slug: "difference-film-led",
    title: "【徹底比較】3種類の透過型LEDビジョンの違いとおすすめ製品はこれ！",
    description: `ガラス面に映像を映し出す透過型LEDビジョンの種類と違いを徹底比較。${mainData.keyWords}・IC内蔵型・バー型PCBの3タイプを解説し、施工性・透明度・消費電力の観点から最適な選び方をご紹介。省エネ・高視認性の最新サイネージ導入を検討中の方は必見です。`,
    image: "/images/blog/difference-film-led/fv.webp",
    date: "2025-04-30",
    category: ["比較", `${mainData.keyWords}`],
    isVisible: true,
  },
  {
    id: "0003",
    slug: "film-led-advertisement",
    title: `LEDなのに“透ける”ってどういうこと？\n最先端${mainData.keyWords}で差がつく広告の魅せ方`,
    description:
      "店舗・イベント・展示会に最適！空間を邪魔せず視線を奪う、次世代ディスプレイの正体とは？",
    image: "/images/blog/film-led-advertisement/fv.webp",
    date: "2025-05-28",
    category: ["透明LED", `${mainData.keyWords}`],
    isVisible: true,
  },
  {
    id: "0004",
    slug: "led-cob-difference",
    title: "COBとは？SMDとの違いやメリット・デメリットをわかりやすく解説",
    description:
      "LED業界で急成長中のCOB技術を徹底解説！店舗・展示会・映像制作など、空間演出を変える理由と導入のポイントをご紹介。高演色・省エネ・高密度で“映える空間”をつくる次世代技術を深掘りします。",
    image: "/images/blog/led-cob-difference/fv.webp",
    date: "2025-07-03",
    category: ["ガイド", "COB", "LEDビジョン"],
    isVisible: true,
  },
];
