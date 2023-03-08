export interface LoveCompanionInterface {
  data: {
    id: number;
    attributes: AttributesInterface;
  };
}

export interface Cta2data {
  id: number;
  attributes: AttributesInterface;
}
export interface AttributesInterface {
  title: string;
  body: string;
  subBody: string;
  boldText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
