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
  isVisible: boolean;
};

export const archiveData: Archive[] = [
  {
    id: "00001",
    clientName: "岩田屋本館 ジミーチュウ 様",
    description: `
      <span>九州初導入！${mainData.keyWords}ビジョン</span><br/>
      福岡市の中心地・天神に位置する老舗百貨店「岩田屋本館」にて、九州初となる${mainData.keyWords}ビジョンの導入を行いました。<br/>
      <br/>
      今回の設置場所は、岩田屋本館エントランスの大型ガラス面。<br/>
      建物の外観デザインを一切損なわずに、高輝度・高精細の映像演出を実現し、道行く人々の視線を自然に惹きつけます。<br/>
      導入によって集客とブランディングの両立を実現しました。<br/>
      <br/>
      さらに、透明フィルム型LEDの特長である高い透過性により、外光を遮ることなく、館内の自然な明るさを維持。日中でも高い視認性を保ったまま、ダイナミックな映像訴求が可能になります。<br/>
      <br/>
      透明LEDフィルムの柔軟性・軽量性・高い拡張性は、大型商業施設の空間演出において理想的なソリューション。<br/>
      九州エリアでも本格的に活用が進むことで、次世代型ディスプレイ広告の導入事例として大きな注目を集めています。`,
    mediaData: {
      image: [
        "/images/archives/00001/01.webp",
        "/images/archives/00001/02.webp",
        "/images/archives/00001/03.webp",
        "/images/archives/00001/04.webp",
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
      // "LEDビジョン",
      "施工",
      // "コンテンツ制作",
      "ディスプレイ広告",
      "百貨店",
    ],
    slug: "00001",
    isVisible: true,
  },
  {
    id: "00002",
    clientName: "岩田屋本館 ジミーチュウ 様",
    description: `福岡市天神にある岩田屋本館にて、${mainData.keyWords}を導入しました。`,
    mediaData: {
      image: [
        "/images/archives/00001/01.webp",
        "/images/archives/00001/02.webp",
        "/images/archives/00001/03.webp",
        "/images/archives/00001/04.webp",
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
    slug: "00002",
    isVisible: false,
  },
];
