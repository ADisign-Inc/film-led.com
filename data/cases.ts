export type Case = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

export const cases: Case[] = [
  {
    id: "case-1",
    title: "商業施設・スーパー",
    description:
      "複数階をまたぐような大型のLEDビジョンから、案内をするためのサイネージまで幅広く活用されています。",
    image: "/images/cases/01.jpg",
    category: "小売",
  },
  {
    id: "case-2",
    title: "カーディーラー",
    description:
      "通り沿いの店舗が多いため大型のシースルーサイネージや店内でのイメージ映像に多く利用されています。",
    image: "/images/cases/02.jpg",
    category: "イベント",
  },
  {
    id: "case-3",
    title: "飲食店・小売店",
    description:
      "1階店舗ではスタンドサイネージ、2階以上にある店舗ではキューブ型サイネージのご利用がおすすめです。",
    image: "/images/cases/03.jpg",
    category: "イベント",
  },
  {
    id: "case-4",
    title: "ホテル・サービス業",
    description:
      "多言語表示でのサービスや案内の表示に使われたり、受付付近でのイメージ映像などに多く利用されています。",
    image: "/images/cases/04.jpg",
    category: "イベント",
  },
  {
    id: "case-5",
    title: "マンション・不動産",
    description:
      "不動産業では、物件情報の掲載に活用されています。マンションなどでは住民への掲示板として利用される例もあります。",
    image: "/images/cases/05.jpg",
    category: "イベント",
  },
  {
    id: "case-6",
    title: "レジャー施設",
    description:
      "大ビジョンでの演出はもちろん、球場・スタジアムなどでは、スポンサーのPRなどとして利用されています。",
    image: "/images/cases/06.jpg",
    category: "イベント",
  },
  {
    id: "case-7",
    title: "公共機関・病院",
    description:
      "利用案内や受付での多言語表示、地域情報の共有、広告の表示など様々な活用が行われています。",
    image: "/images/cases/07.jpg",
    category: "イベント",
  },
  {
    id: "case-8",
    title: "イベント会場・結婚式場",
    description:
      "LEDビジョンは、雰囲気作りや演出に最適です。大型ビジョンからイーゼル型のサイネージまで幅広く利用されてます。",
    image: "/images/cases/08.jpg",
    category: "イベント",
  },
];
