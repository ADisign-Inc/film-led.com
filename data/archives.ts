export type ArchiveContent = {
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

export type Archive = {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string[];
  slug: string;
};

export const archiveData: Archive[] = [
  {
    id: "1",
    url: "/about-film-led",
    title: "岩田屋本館 ジミーチュウ 様",
    description: "ショーウィンドウ",
    image: "/images/blog/0001.jpg",
    date: "2024-03-20",
    category: ["導入", "ショーウィンドウ"],
    slug: "what-is-led-vision",
  },
];
