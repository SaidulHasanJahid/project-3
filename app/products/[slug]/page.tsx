import ProductDetails from "@/@modules/products/product-details";

// app/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/web/products/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return <div>product not found</div>;
  }

  const productData = await res.json();
  const product = productData.data;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
