interface ProductPrice {
  basic: number;
  product: number;
  logistics: number;
  return: number;
}

interface ProductSize {
  name: string;
  origName: string;
  rank: number;
  optionId: number;
  wh: number;
  time1: number;
  time2: number;
  dtype: number;
  price: ProductPrice;
  saleConditions: number;
  payload: string;
}

interface ProductColor {
  name: string;
  id: number;
}

interface ProductMeta {
  tokens: unknown[];
  presetId: number;
}

export interface ProductResponse {
  id: number;
  root: number;
  kindId: number;
  brand: string;
  brandId: number;
  siteBrandId: number;
  colors: ProductColor[];
  subjectId: number;
  subjectParentId: number;
  semanticId: number[];
  name: string;
  entity: string;
  matchId: number;
  supplier: string;
  supplierId: number;
  supplierRating: number;
  supplierFlags: number;
  pics: number;
  rating: number;
  reviewRating: number;
  nmReviewRating: number;
  feedbacks: number;
  nmFeedbacks: number;
  panelPromoId: number;
  volume: number;
  weight: number;
  viewFlags: number;
  sizes: ProductSize[];
  totalQuantity: number;
  time1: number;
  time2: number;
  wh: number;
  dtype: number;
  dist: number;
  logs: string;
  meta: ProductMeta;
}