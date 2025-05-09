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
    url: "#",
    title: "岩田屋本館 ジミーチュウ 様",
    description: "ショーウィンドウ",
    image: "/images/archives/00001.jpg",
    date: "2025-04-10",
    category: ["施工", "ショーウィンドウ", "百貨店"],
    slug: "00001",
  },
];
