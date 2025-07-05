export interface GalleryType {
  image_src: string;
}

export interface ProductType {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  discount: string | null;
  category?: string;
  category_id?: number;
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  gallery_images?: GalleryType[]; // <-- now optional
}

export interface ClassesType {
  root: string;
}
export type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
};

export const products: Product[] = [/* your 12 product objects from earlier */];
