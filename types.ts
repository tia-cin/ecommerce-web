export interface ProductType {
  image: string;
  name: string;
  slug: string;
  price: number;
  details: string;
  _id: number;
}

export interface Banner {
  image: string;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
}
