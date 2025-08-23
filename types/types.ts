export interface GalleryType {
  image_src: string;
}


export interface ProductType {
  slug:string | number ;
  category_id:any;
  id:any;
  sku: string;                 
  name: string;              
  image?: string;         
  productGallery?: string[];   
  price?: number | string;   
  oldPrice?: number | string;  
  discount?: number;           
  size?: string[];             
  colors?: string[];          
  stock?: number;              
  product_type?: string;       
  rating?: number | string; 
  reviews?: number;           
  description?: string;       
  details?: string;            
  policy?: string;             
  tags?: string[];            
  category?: string;         
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
