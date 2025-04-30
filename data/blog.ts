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
    url: "/about-film-led",
    title: "LEDビジョンとは？",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0001.jpg",
    date: "2024-03-20",
    category: "ガイド",
    slug: "what-is-led-vision",
  },
  {
    id: "2",
    url: "/difference-transparent-led",
    title: "透過型LEDビジョンの製品ごと違いとは？",
    description: "用途に合わせた最適なLEDビジョンの選び方をご紹介します。",
    image: "/images/blog/0003.jpg",
    date: "2024-03-20",
    category: "ガイド",
    slug: "how-to-choose-led-vision",
  },
];
