import products from "@/@mock-data/product.json";
import ProductDetails from "@/@modules/home/product-details";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}
