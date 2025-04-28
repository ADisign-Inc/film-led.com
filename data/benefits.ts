export interface Benefit {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  videoType: string;
  description: string;
}

export const benefitData: Benefit[] = [
  {
    id: "visual-impact",
    title: "視覚的インパクトで集客力・訴求力向上",
    mediaType: "video",
    videoType: "sideways",
    mediaUrl: "/videos/03.mp4",
    description:
      "ガラス面やウィンドウに直接取り付けることで、空間デザインをそのまま活かしたまま、動的で鮮やかな映像を表示可能です。高級感のある施設や店舗でも、ブランドイメージを維持しながら目を引くディスプレイが実現します。動的なコンテンツやインタラクティブな演出が、通行人や来客の目を引きます。視覚的に印象に残りやすく、集客効果が高まります。また、遠くからでも目を引くため、屋外や大規模施設でも効果的です。",
  },
  {
    id: "flexibility",
    title: "自由度が高く、施工も簡単",
    mediaType: "video",
    videoType: "sideways",
    mediaUrl: "/videos/04.mp4",
    description:
      "比較的簡単な施工で、スピーディーに設置が可能です。店舗やオフィスなど、限られたスペースにも簡単に導入でき、配置変更や移設も柔軟に対応できます。短期間で効果的な運用を開始できます。",
  },
  {
    id: "technology",
    title: "最新技術で次世代の広告表現",
    mediaType: "video",
    videoType: "sideways",
    mediaUrl: "/videos/05.mp4",
    description:
      "透明LEDフィルムは最新のディスプレイ技術を駆使しており、通常のLEDディスプレイでは実現できない「透明性」と「高解像度」を両立させます。これにより、視覚的な美しさと機能性を兼ね備えた未来的な広告手法を提供します。",
  },
  // {
  //   id: "cost-performance",
  //   title: "優れたコストパフォーマンス",
  //   image: "/images/about/01.jpg",
  //   videoType: "sideways",
  //   description:
  //     "初期投資を抑えたい場合、レンタルプランを選択することができます。短期間のキャンペーンやイベントでも導入可能で、リスクを抑えつつ最新技術を試せます。さらに、レンタル期間後の移設や再契約も柔軟に対応可能です。",
  // },
  {
    id: "maintenance",
    title: "簡便なメンテナンス",
    mediaType: "video",
    videoType: "lengthwise",
    mediaUrl: "/videos/construction/01.mp4",
    description:
      "透明LEDフィルムは耐久性が高く、メンテナンスが簡単で長期的に安定した運用が可能です。定期的な清掃やコンテンツ更新も簡単に行えるため、管理が楽で安心です。",
  },
];
