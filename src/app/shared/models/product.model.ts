export interface Product {
  id: number;
  imageUrl: string;
  altText?: string;
  name: string;
  quantity: number;
  price: number;
  buttonIcon?: string;
  productUrl?: string;
}
