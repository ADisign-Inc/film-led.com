export type Case = {
  id: string;
  title: string;
  description: string;
  image: string[];
  category: string;
  link?: {
    url: string;
    text: string;
  };
};

export const caseData: Case[] = [
  {
    id: "retail-store",
    title: "小売店",
    description: `高級ブランド店やアパレルショップなどでは、<strong>ガラスのウィンドウに透明フィルム型LEDビジョンを設置</strong>することで、商品展示と連動した<strong>インパクトある映像演出</strong>や<strong>広告表示</strong>が可能になります。<br />
                  ディスプレイ映像とリアルな商品が一体化して見える演出により、<strong>視覚的なインパクトを最大化</strong>し、より洗練されたプランドイメージや購買意欲を高める効果が期待できます。`,
    image: [
      "/images/cases/retail-store01.webp",
      "/images/cases/retail-store02.webp",
    ],
    category: "小売",
  },
  {
    id: "shopping-mall",
    title: "ショッピングモール",
    description: `たとえば、エントランスの大型ガラス面に設置することで、季節ごとのキャンペーン告知やイベント情報を効果的に発信でき、来館者の注目を集めることができます。<br />
                  また、外光を遮ることなく透過性を保つため、自然な明るさを維持したまま視認性の高い演出が可能です。<br />
                  さらに、館内の吹き抜けガラスやエスカレーター周辺の透明壁面などにも応用でき、動線に沿った広告展開やブランディング演出にも対応します。`,
    image: [
      "/images/cases/shopping-mall01.webp",
      "/images/cases/shopping-mall02.webp",
    ],
    category: "小売",
  },
  {
    id: "office",
    title: "ビルやオフィス",
    description: `商業ビルやオフィスビルの外壁にもファサードディスプレイとして活用され、空間デザインを損なうことなく、外部に向けて広告や情報を発信することができます。<br />
                  透明フィルム型LEDビジョンは、外観の美しさを保ちながら、ディスプレイ効果を最大化できるため、建築デザインにも調和します。`,
    image: ["/images/cases/office01.webp", "/images/cases/office02.webp"],
    category: "小売",
  },
  {
    id: "traffic",
    title: "公共交通機関の案内板",
    description: `透明フィルム型LEDビジョンは、駅や空港、バス停などの公共交通機関の案内板としても利用されます。<br />
                  透明なフィルムによる視認性の確保と、高輝度表示によって、日中でも視認性が高く、利用者にとって有益な情報提供ができます。`,
    image: ["/images/cases/traffic01.webp", "/images/cases/traffic02.webp"],
    category: "小売",
  },
  {
    id: "exhibition",
    title: "展示会での空間演出",
    description: `展示会やイベントでは、透明フィルム型LEDビジョンを活用することで、<strong>来場者の視線を自然に集める</strong>効果的な<strong>空間演出</strong>が可能です。<br />
                  ブースのガラス面やパーテーションに映像を映し出すことで、<strong>立体感や奥行きを演出</strong>し、<strong>遠くからでも視覚的に強いインパクト</strong>を与えることができます。<br />
                  結果、<strong>ブランドイメージの訴求力を高め</strong>、ブースへの<strong>集客効果を向上</strong>させるなど、販促・PR活動に大きく貢献します。`,
    image: [
      "/images/cases/exhibition01.webp",
      "/images/cases/exhibition02.webp",
    ],
    category: "小売",
  },
  {
    id: "car-dealer",
    title: "カーディーラー",
    description:
      "通り沿いの店舗が多いため大型のシースルーサイネージや店内でのイメージ映像に多く利用されています。",
    image: ["/images/cases/car-dealer01.webp", "/images/cases/car-dealer02.webp"],
    category: "イベント",
  },
  {
    id: "restaurant",
    title: "飲食店・小売店",
    description: `1階にある店舗には、歩行者の目線に合わせて情報を訴求できる<strong>スタンド型サイネージ</strong>がおすすめです。<br />
                  店頭でメニューやキャンペーン情報を表示し、<strong>通行客の目を引く効果的な販促ツール</strong>として活用できます。<br />
                  また、2階以上にある店舗には、遠くからでも視認しやすい<strong>キューブ型サイネージ</strong>がおすすめです。<br />
                  <strong>立体的な映像表示によって存在感を高め、階上店舗への誘導効果を向上</strong>させることが可能です。`,
    image: [
      "/images/products/stand-signage01.webp",
      "/images/products/stand-signage02.webp",
    ],
    category: "イベント",
    link: {
      url: "https://adisignage.com/product_3.html",
      text: "LEDスタンドサイネージ",
    },
  },
  {
    id: "service",
    title: "ホテル・サービス業",
    description:
      "多言語表示でのサービスや案内の表示に使われたり、受付付近でのイメージ映像などに多く利用されています。",
    image: ["/images/cases/service01.webp", "/images/cases/service02.webp"],
    category: "イベント",
  },
  {
    id: "real-estate",
    title: "マンション・不動産",
    description:
      "不動産業では、物件情報の掲載に活用されています。\nマンションなどでは住民への掲示板として利用される例もあります。",
    image: ["/images/cases/real-estate01.webp", "/images/cases/real-estate02.webp"],
    category: "イベント",
  },
  {
    id: "leisure",
    title: "レジャー施設",
    description:
      "大ビジョンでの演出はもちろん、球場・スタジアムなどでは、スポンサーのPRなどとして利用されています。",
    image: ["/images/cases/leisure01.webp", "/images/cases/leisure02.webp"],
    category: "イベント",
  },
  {
    id: "events",
    title: "イベント会場・結婚式場",
    description:
      "LEDビジョンは、雰囲気作りや演出に最適です。\n大型ビジョンからイーゼル型のサイネージまで幅広く利用されてます。",
    image: ["/images/cases/events01.webp", "/images/cases/events02.webp"],
    category: "イベント",
  },
];
