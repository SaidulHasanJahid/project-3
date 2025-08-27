import Home from "@/@modules/home";

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch categories
  const resCategories = await fetch(`${baseUrl}/category`, { cache: "no-store" });
  if (!resCategories.ok) {
    throw new Error("Failed to fetch categories");
  }
  const jsonCategories = await resCategories.json();
  const categoriesItem = jsonCategories.data;

  // Fetch banners
  const resBanner = await fetch(`${baseUrl}/banner`, { cache: "no-store" });
  if (!resBanner.ok) {
    throw new Error("Failed to fetch banner");
  }
  const jsonBanner = await resBanner.json();
  let bannerItem = jsonBanner.data;



  // Fetch products
  const resProduct = await fetch(`${baseUrl}/products`, { cache: "no-store" });
  if (!resProduct.ok) {
    throw new Error("Failed to fetch products");
  }
  const jsonProduct = await resProduct.json();
  const productsItem = jsonProduct.data;

  // Fix banner image URLs
  bannerItem = bannerItem.map((item: any) => ({
    ...item,
    image: `${baseUrl}/${item.image}`,
  }));

  return (
    <div>
      <Home
        categoriesItem={categoriesItem}
        bannerItem={bannerItem}
        productsItem={productsItem}
      />
    </div>
  );
}
