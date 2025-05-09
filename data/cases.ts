export type Case = {
  id: string;
  title: string;
  description: string;
  image: string[];
  category: string;
};

export const caseData: Case[] = [
  {
    id: "case-1",
    title: "商業施設や店舗のウィンドウディスプレイ",
    description:
      "高級ブランド店やショッピングモールでは、ガラスのウィンドウに透明フィルム型LEDビジョンを設置することで、商品展示や広告をダイナミックに行うことができます。\nディスプレイと商品が一体化することで、視覚的な演出効果が高まり、より洗練されたブランドイメージを創出します。",
    image: ["/images/cases/01-0.jpg", "/images/cases/01-1.jpg"],
    category: "小売",
  },
  {
    id: "case-2",
    title: "ビルやオフィスのファサードディスプレイ",
    description:
      "商業ビルやオフィスビルの外壁にも活用され、空間デザインを損なうことなく、外部に向けて広告や情報を発信することができます。\n透明フィルム型LEDビジョンは、外観の美しさを保ちながら、ディスプレイ効果を最大化できるため、建築デザインにも調和します。",
    image: ["/images/cases/02-0.jpg", "/images/cases/02-1.jpg"],
    category: "小売",
  },
  {
    id: "case-3",
    title: "公共交通機関の案内板",
    description:
      "透明フィルム型LEDビジョンは、駅や空港、バス停などの公共交通機関の案内板としても利用されます。\n透明なフィルムによる視認性の確保と、高輝度表示によって、日中でも視認性が高く、利用者にとって有益な情報提供ができます。",
    image: ["/images/cases/03-0.jpg", "/images/cases/03-1.jpg"],
    category: "小売",
  },
  {
    id: "case-4",
    title: "展示会での空間演出",
    description:
      "展示会やイベントでは、透明フィルム型LEDビジョンを活用して来場者の注意を引くことができます。\nブースのガラス面に映像を映し出すことで、視覚的にインパクトを与え、ブランドイメージの強化や注目を集めることが可能です。",
    image: ["/images/cases/04-0.jpg", "/images/cases/04-1.jpg"],
    category: "小売",
  },
  {
    id: "case-5",
    title: "カーディーラー",
    description:
      "通り沿いの店舗が多いため大型のシースルーサイネージや店内でのイメージ映像に多く利用されています。",
    image: ["/images/cases/05-0.jpg", "/images/cases/05-1.jpg"],
    category: "イベント",
  },
  {
    id: "case-6",
    title: "飲食店・小売店",
    description:
      "1階店舗ではスタンドサイネージ、2階以上にある店舗ではキューブ型サイネージのご利用がおすすめです。",
    image: ["/images/cases/06-0.jpg", "/images/cases/06-1.jpg"],
    category: "イベント",
  },
  {
    id: "case-7",
    title: "ホテル・サービス業",
    description:
      "多言語表示でのサービスや案内の表示に使われたり、受付付近でのイメージ映像などに多く利用されています。",
    image: ["/images/cases/07-0.jpg", "/images/cases/07-1.jpg"],
    category: "イベント",
  },
  {
    id: "case-8",
    title: "マンション・不動産",
    description:
      "不動産業では、物件情報の掲載に活用されています。\nマンションなどでは住民への掲示板として利用される例もあります。",
    image: ["/images/cases/08-0.jpg", "/images/cases/08-1.jpg"],
    category: "イベント",
  },
  {
    id: "case-9",
    title: "レジャー施設",
    description:
      "大ビジョンでの演出はもちろん、球場・スタジアムなどでは、スポンサーのPRなどとして利用されています。",
    image: ["/images/cases/09-0.jpg", "/images/cases/09-1.jpg"],
    category: "イベント",
  },
  {
    id: "case-10",
    title: "イベント会場・結婚式場",
    description:
      "LEDビジョンは、雰囲気作りや演出に最適です。\n大型ビジョンからイーゼル型のサイネージまで幅広く利用されてます。",
    image: ["/images/cases/10-0.jpg", "/images/cases/10-1.jpg"],
    category: "イベント",
  },
];
