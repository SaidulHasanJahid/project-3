import ProductByCategory from "@/@modules/products-by-category";

// app/[slug]/page.tsx
export default async function CatWiseProductPage() {
  return (
    <div>
      <ProductByCategory />
    </div>
  );
}
