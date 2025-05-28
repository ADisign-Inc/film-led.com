import { mainData } from "./main";

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
}

export const productFeaturesData: ProductFeature[] = [
  {
    id: "01",
    title: "COB (Chip on board)",
    description:
      "COBとは「Chip On Board」の略で、LED RGB発光素子を透明PETフィルムに直接搭載する技術のことを言います。\nLEDが小さく薄いピッチでも<strong>高い透明度を維持</strong>することができます。\nCOB技術は、狭ピッチ化に貢献し、高精細なディスプレイを実現するための重要な要素の一つです。\n\n<strong>※ 最小ピッチ：3.75mm</strong>",
  },
  {
    id: "02",
    title: "高い透明性と可視性",
    description:
      "<strong>50~92%の透明度</strong>で、コンテンツを送出している時も光の透過が可能です。\nディスプレイを点灯してない状態では、<strong>設置面の反対側がそのまま見える高い透明度</strong>を持ちます。\nまた、店舗などではコンテンツ映像と同時にお店の内部または製品を見せることができ、ショッピングモールや展示会場などで有用に使うことができます。",
  },
  {
    id: "03",
    title: "優れた熱放出と安定性",
    description: `${mainData.keyWords}は、<strong>従来のIC内蔵型LEDより発熱が少なく</strong>、LEDフィルムの表面温度が周辺温度と比べて2°C程度高いため、室内での使用に適しています。\nまた、損傷しやすい敏感な部品の外部露出を最小化し、過酷な環境でも高い安定性を保つため、長期間の使用にも向いています。`,
  },
  {
    id: "04",
    title: "柔軟性",
    description:
      "透明なフィルムの上に直接LED素子を搭載しており、光学透明粘着剤や水など柔軟な材料を使用して設置を行います。\nそのため、<strong>曲面での設置に非常に有効</strong>です。\n\n※ 輸送中は衝撃によってPCBが損傷する恐れがあるため、平面状態を維持する必要があります。",
  },
  {
    id: "05",
    title: "素早い施工と管理",
    description:
      "フィルムの表面に粘着層があり、設置のための専用器具は不要です。\nガラス面であれば取り付けたいところへ直接取り付けることができます。\nまた、脱着も容易で、メンテナンス管理も優れています。\nまた、設置環境に合わせて粘着強度を調節することも可能です。",
  },
  {
    id: "06",
    title: "多様な活用シーンへの対応力",
    description:
      "ショーウィンドウや商業施設、イベント会場、企業受付、展示ブースなど、さまざまな用途に柔軟に対応可能です。\n高い<strong>デザイン性</strong>と<strong>情報発信力</strong>を両立し、インテリアと調和しながらも<strong>高い広告効果を発揮</strong>します。\n屋内外問わず幅広く活用されており、次世代型ディスプレイとして現在注目を集めています。",
  },
];
