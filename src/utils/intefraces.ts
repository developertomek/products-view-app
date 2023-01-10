export interface IProduct {
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  id: number | string;
  thumbnail: string;
  stock: number;
}
export interface IApiResponse {
  data: IProduct[] | string[];
  total: number;
}

export interface IApiParams extends IFilter {
  page: number;
}

export interface IFilter {
  categories: string[];
  brands: string[];
}
