export type BlogContent = {
  introduction: string;
  sections: {
    title: string;
    content: string;
    code?: {
      language: string;
      code: string;
    };
    image?: string;
  }[];
  conclusion: string;
};

export type Blog = {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  slug: string;
};

export const blogData: Blog[] = [
  {
    id: "1",
    url: "/aboutFilmLed",
    title: "LEDビジョンとは？",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0001.jpg",
    date: "2024-03-20",
    category: "ガイド",
    slug: "what-is-led-vision",
  },
  {
    id: "2",
    url: "/aboutFilmLed",
    title: "LEDビジョンの選び方ガイド",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0002.jpg",
    date: "2024-03-20",
    category: "ガイド",
    slug: "how-to-choose-led-vision",
  },
  {
    id: "3",
    url: "/aboutFilmLed",
    title: "シースルーLEDビジョンの活用事例",
    description:
      "実際の導入事例から、シースルーLEDビジョンの効果を解説します。",
    image: "/images/blog/0002.jpg",
    date: "2024-03-15",
    category: "活用事例",
    slug: "use-case-of-sear-led-vision",
  },
  {
    id: "4",
    url: "/aboutFilmLed",
    title: "透明フィルム型LEDビジョンの技術解説と最新トレンド",
    description:
      "透明フィルム型LEDビジョンの技術的な仕組みと最新の研究動向を詳しく解説。",
    image: "/images/blog/0003.jpg",
    date: "2024-03-20",
    category: "技術解説",
    slug: "technical-explanation-and-latest-trends-of-transparent-film-led-vision",
  },
];
