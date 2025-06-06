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
    description: `高級ブランド店やアパレルショップなどでは、<strong>ガラスのウィンドウ</strong>に透明フィルム型LEDビジョンを設置することで、商品展示と連動した<strong>インパクトある映像演出</strong>や<strong>広告表示</strong>が可能になります。<br />
                  ディスプレイ映像とリアルな商品が一体化して見える演出により、<strong>視覚的なインパクトを最大化</strong>し、より洗練されたブランドイメージや購買意欲を高める効果が期待できます。`,
    image: [
      "/images/cases/retail-store01.webp",
      "/images/cases/retail-store02.webp",
    ],
    category: "小売",
  },
  {
    id: "shopping-mall",
    title: "ショッピングモール",
    description: `<strong>エントランスの大型ガラス面</strong>に設置することで、<strong>季節ごとのキャンペーン告知</strong>や<strong>イベント情報</strong>を効果的に発信でき、来館者の注目を集めることができます。<br />
                  また、<strong>館内の吹き抜けガラス</strong>や<strong>エスカレーター周辺の透明壁面</strong>などにも応用でき、動線に沿った広告展開や空間を活かしたブランディング演出も可能になります。`,
    image: [
      "/images/cases/shopping-mall01.webp",
      "/images/cases/shopping-mall02.webp",
    ],
    category: "小売",
  },
  {
    id: "office",
    title: "ビルやオフィス",
    description: `商業ビルやオフィスビルの外壁にも<strong>ファサードディスプレイ</strong>として活用され、空間デザインを損なうことなく、外部に向けて広告や情報を発信することができます。<br />
                  外観の美しさを保ちながらディスプレイ効果を最大化できるため、ビルなどの<strong>建築デザインにも調和</strong>します。`,
    image: ["/images/cases/office01.webp", "/images/cases/office02.webp"],
    category: "小売",
  },
  {
    id: "traffic",
    title: "公共交通機関の案内板",
    description: `透明フィルム型LEDビジョンは、<strong>駅</strong>や<strong>空港</strong>、<strong>バス停</strong>などの<strong>公共交通機関の案内板</strong>としても利用されます。<br />
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
      `通り沿いの店舗が多いためガラス面を活用し、店内の開放感を損なうことなくダイナミックな映像広告を実現。<br />
       <strong>新車のプロモーション</strong>や<strong>キャンペーン告知</strong>など、<strong>季節ごとの訴求に柔軟に対応</strong>できます。<br />
       昼夜問わず<strong>高い視認性とインパクト</strong>を両立し、ブランドイメージの向上や集客強化にも貢献します。`,
    image: ["/images/cases/car-dealer01.webp", "/images/cases/car-dealer02.webp"],
    category: "イベント",
  },
  {
    id: "restaurant",
    title: "飲食店・小売店",
    description:
      `1階にある店舗には、歩行者の目線に合わせて情報を訴求できる<strong>スタンド型サイネージ</strong>をおすすめしております。<br />
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
      `<strong>ホテルのエントランス</strong>や<strong>ロビーのガラス面</strong>に設置することで、高級感を保ちながら最新の映像演出を実現しています。<br />
      宿泊プランやレストランフェア、季節のイベント情報を視認性高く発信でき、訪問客の期待感を高めます。<br />
      <strong>多言語表示でのサービスや案内の表示</strong>に使われたり、<strong>受付付近でのイメージ映像</strong>などに多く利用されています。`,
    image: ["/images/cases/service01.webp", "/images/cases/service02.webp"],
    category: "イベント",
  },
  {
    id: "real-estate",
    title: "マンション・不動産",
    description:
      `不動産業では、店舗のガラス壁面に物件情報の掲載をすることで、物件の魅力やエリア情報を視覚的にアピールが可能です。<br />
      これにより<strong>通行人への訴求力が向上</strong>し、<strong>興味喚起から来場促進へとスムーズにつなげられます</strong>。<br />
      また、マンションなどでは<strong>住民への掲示板</strong>として利用されている例もあります。`,
    image: ["/images/cases/real-estate02.webp", "/images/cases/real-estate01.webp"],
    category: "イベント",
  },
  {
    id: "leisure",
    title: "レジャー施設",
    description:
      `球場、スタジアム、テーマパーク、水族館、スポーツ施設などのエントランスや施設内動線に設置することで、<strong>ワクワク感を演出</strong>しながら<strong>リアルタイムのイベント情報</strong>や<strong>注意喚起</strong>を発信することが可能です。<br />
      透明LEDビジョンならではの躍動感と、施設コンセプトに合った柔軟な表現力で、来場者の体験価値を高めます。<br />
      また、大ビジョンでの演出はもちろん、<strong>球場・スタジアム</strong>などでは<strong>スポンサーのPR</strong>などとして利用されています。`,
    image: ["/images/cases/leisure01.webp", "/images/cases/leisure02.webp"],
    category: "イベント",
  },
  {
    id: "events",
    title: "イベント会場・結婚式場",
    description:
      `会場のガラス面やロビー装飾に活用することで、<strong>ウェルカム演出</strong>や<strong>タイムスケジュール表示</strong>、<strong>ブランドロゴの投影</strong>などが可能になります。<br />
      特別な空間の演出に動きと華やかさを加え、ゲストの印象に残る空間づくりをサポートします。<br />
      透明フィルム型LEDビジョンは、<strong>雰囲気作り</strong>や<strong>豪華な演出</strong>に最適です。`,
    image: ["/images/cases/events01.webp", "/images/cases/events02.webp"],
    category: "イベント",
  },
];
