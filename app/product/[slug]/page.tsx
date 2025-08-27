// import ProductDetails from "@/@modules/product/product-details";

// export default async function ProductDetailsPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {

//   const res = await fetch('https://api.example.com/data');
//   const data = await res.json();

//   const { slug } = await params;
//   const product = data.find((p) => p.slug === slug);
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return <ProductDetails product={product} />;
// }

import ProductDetails from "@/@modules/product/product-details";

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });
  const data = await res.json();

  const product = data.find((p: any) => p.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return <ProductDetails product={product} />;
}
