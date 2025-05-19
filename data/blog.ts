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
    title: `${mainData.keyWords}とは？\n技術的な仕組みや特徴を徹底解説`,
    description: `${mainData.keyWords}の仕組み・特徴・導入メリット・活用事例までわかりやすく解説します。`,
    image: "/images/blog/0001.jpg",
    date: "2025-04-20",
    category: ["ガイド", "LEDビジョン"],
    slug: "0001",
    isVisible: true,
  },
  {
    id: "0002",
    url: "/difference-film-led",
    title: "透過型LEDビジョンの製品ごと違いとは？",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0003.jpg",
    date: "2025-04-20",
    category: ["ガイド", "LEDビジョン"],
    slug: "0002",
    isVisible: true,
  },
  {
    id: "0003",
    url: "/difference-film-led",
    title: "透過型LEDビジョンの製品ごと違いとは？",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0003.jpg",
    date: "2025-04-20",
    category: ["ガイド", "LEDビジョン"],
    slug: "0003",
    isVisible: false,
  },
];
