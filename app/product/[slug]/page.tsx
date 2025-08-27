import ProductDetails from "@/@modules/product/product-details";

export default async function ProductDetailsPage({ params }: any) {
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
