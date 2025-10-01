
import Home from "@/@modules/home";

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("🌍 Base URL:", baseUrl);

  // Helper function for safe fetch
  const fetchData = async (endpoint: string) => {
    try {
      const res = await fetch(`${baseUrl}${endpoint}`, { cache: "no-store" });
      const text = await res.text(); // প্রথমে raw response ধরব

      try {
        return JSON.parse(text); // JSON এ parse করার চেষ্টা
      } catch (err) {
        console.error("Raw Response:", text);
        return { data: [] }; // fallback
      }
    } catch (error) {
      console.error(`🔥 Failed to fetch ${endpoint}:`, error);
      return { data: [] };
    }
  };

  // Fetch categories
  const jsonCategories = await fetchData("/category");
  const categoriesItem = jsonCategories?.data || [];

  // Fetch banners
  const jsonBanner = await fetchData("/banner");
  let bannerItem = jsonBanner?.data || [];

  // Fix banner image URLs
  bannerItem = bannerItem.map((item: any) => ({
    ...item,
    image: `${baseUrl}/${item.image}`,
  }));

  // Fetch products
  const jsonProduct = await fetchData("/products");
  const productsItem = jsonProduct?.data || [];

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
