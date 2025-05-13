import { mainData } from "./main";

export type Archive = {
  id: string;
  clientName: string;
  description: string;
  mediaData: {
    image: string[];
    video: string[];
  };
  date: string;
  place: string;
  productName: string;
  category: string[];
  slug: string;
};

export const archiveData: Archive[] = [
  {
    id: "00001",
    clientName: "岩田屋本館 ジミーチュウ 様",
    description: `福岡市天神にある岩田屋本館にて、${mainData.keyWords}を導入しました。`,
    mediaData: {
      image: [
        "/images/archives/00001/01.jpg",
        "/images/archives/00001/02.jpg",
        "/images/archives/00001/03.jpg",
        "/images/archives/00001/04.jpg",
      ],
      video: [
        "/images/archives/00001/video01.mp4",
        "/images/archives/00001/video02.mp4",
      ],
    },
    date: "2025-04-10",
    place: "福岡市",
    productName: `${mainData.keyWords}`,
    category: [
      "LEDビジョン",
      "施工",
      "ショーウィンドウ",
      "ディスプレイ広告",
      "百貨店",
    ],
    slug: "00001",
  },
];
