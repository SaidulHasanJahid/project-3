import Home from "@/@modules/home";

export default async function HomePage() {
  // Fetch categories
  const resCategories = await fetch("http://api.eyniyl.com/category");
  if (!resCategories.ok) {
    throw new Error("Failed to fetch categories");
  }
  const jsonCategories = await resCategories.json();
  const categoriesItem = jsonCategories.data;

  // Fetch banners
  const resBanner = await fetch("http://api.eyniyl.com/banner");
  if (!resBanner.ok) {
    throw new Error("Failed to fetch banner");
  }
  const jsonBanner = await resBanner.json();
  let bannerItem = jsonBanner.data;

  // Fetch products
  const resProduct = await fetch("http://api.eyniyl.com/products");
  if (!resProduct.ok) {
    throw new Error("Failed to fetch products");
  }
  const jsonProduct = await resProduct.json();
  const productsItem = jsonProduct.data;

  // Fix banner image URLs
  const baseUrl = "http://api.eyniyl.com/";
  bannerItem = bannerItem.map((item: any) => ({
    ...item,
    image: item.image.startsWith("http")
      ? item.image
      : baseUrl + item.image.replace(/^\/+/, ""),
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
