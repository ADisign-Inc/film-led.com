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
    mediaUrl: "/videos/film03.mp4",
    description:
      "ガラス面やウィンドウに直接取り付けることで、空間デザインをそのまま活かしたまま、動的で鮮やかな映像を表示可能です。\n高級感のある施設や店舗も、ブランドイメージを維持しながら目を引くディスプレイが実現します。\n動的なコンテンツやインタラクティブな演出が、通行人や来客の印象に残りやすく、集客効果が高まります。",
  },
  {
    id: "flexibility",
    title: "自由度が高く、施工も簡単",
    mediaType: "video",
    videoType: "sideways",
    mediaUrl: "/videos/film04.mp4",
    description:
      "比較的簡単な施工で、スピーディーに設置が可能です。\n店舗やオフィスなど、限られたスペースにも簡単に導入でき、配置変更や移設も柔軟に対応可能です。\n短期間で効果的な運用を開始できます。",
  },
  {
    id: "technology",
    title: "最新技術で次世代の広告表現",
    mediaType: "video",
    videoType: "sideways",
    mediaUrl: "/videos/film05.mp4",
    description:
      "透明LEDフィルムは最新のディスプレイ技術を駆使しており、通常のLEDディスプレイでは実現できない「透明性」と「高解像度」を両立させます。\nこれにより、視覚的な美しさと機能性を兼ね備えた未来的な広告手法を提供します。",
  },
  {
    id: "maintenance",
    title: "簡便なメンテナンス",
    mediaType: "video",
    videoType: "lengthwise",
    mediaUrl: "/videos/construction/01.mp4",
    description:
      "透明LEDフィルムは耐久性が高く、メンテナンスが簡単で長期的に安定した運用が可能です。\n定期的な清掃やコンテンツ更新も簡単に行えるため、管理が楽で安心です。",
  },
];
