export interface Product {
  model: string;
  price: string;
  pitch: string;
  maxSize: string;
  powerConsumption: {
    max: string;
    average: string;
  };
  brightness: string;
}

export const productData: Product[] = [
  {
    model: "FL-1000",
    price: "¥ 1,000,000",
    pitch: "3.75",
    maxSize: "2000 × 1000",
    powerConsumption: {
      max: "500",
      average: "300",
    },
    brightness: "5000",
  },
  {
    model: "Film-P0375",
    pitch: "3.75 × 3.75",
    maxSize: "540 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 650,000 ~",
  },
  {
    model: "Film-P0375-H",
    pitch: "3.75 × 3.75",
    maxSize: "540 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 850,000 ~",
  },
  {
    model: "Film-P0404",
    pitch: "4 × 4",
    maxSize: "576 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 620,000 ~",
  },
  {
    model: "Film-P0404-H",
    pitch: "4 × 4",
    maxSize: "576 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 800,000 ~",
  },
  {
    model: "Film-P0505",
    pitch: "5 × 5",
    maxSize: "720 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 570,000 ~",
  },
  {
    model: "Film-P0505-H",
    pitch: "5 × 5",
    maxSize: "720 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 620,000 ~",
  },
  {
    model: "Film-P0606",
    pitch: "6.25 × 6",
    maxSize: "1000 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 440,000 ~",
  },
  {
    model: "Film-P0606-H",
    pitch: "6.25 × 6",
    maxSize: "1000 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 490,000 ~",
  },
  {
    model: "Film-P0707",
    pitch: "7.5 × 7.5",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 390,000 ~",
  },
  {
    model: "Film-P0707-H",
    pitch: "7.5 × 7.5",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 430,000 ~",
  },
  {
    model: "Film-P0808",
    pitch: "8 × 8",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 350,000 ~",
  },
  {
    model: "Film-P0808-H",
    pitch: "8 × 8",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 400,000 ~",
  },
  {
    model: "Film-P1010",
    pitch: "10 × 10",
    maxSize: "1000 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 320,000 ~",
  },
  {
    model: "Film-P1010-H",
    pitch: "10 × 10",
    maxSize: "1000 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 370,000 ~",
  },
  {
    model: "Film-P1515",
    pitch: "15 × 15",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 300,000 ~",
  },
  {
    model: "Film-P1515-H",
    pitch: "15 × 15",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 350,000 ~",
  },
  {
    model: "Film-P2020",
    pitch: "20 × 20",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "150",
      average: "40~60",
    },
    brightness: "1000-1500",
    price: "¥ 250,000 ~",
  },
  {
    model: "Film-P2020-H",
    pitch: "20 × 20",
    maxSize: "1200 × 240",
    powerConsumption: {
      max: "230",
      average: "60~80",
    },
    brightness: "3500-4500",
    price: "¥ 330,000 ~",
  },
];
