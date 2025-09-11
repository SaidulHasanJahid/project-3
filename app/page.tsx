// import Home from "@/@modules/home";

// export default async function HomePage() {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   // Fetch categories
//   const resCategories = await fetch(`${baseUrl}/category`, {
//     cache: "no-store",
//   });
//   if (!resCategories.ok) {
//     throw new Error("Failed to fetch categories");
//   }
//   const jsonCategories = await resCategories.json();
//   const categoriesItem = jsonCategories.data;

//   // Fetch banners
//   const resBanner = await fetch(`${baseUrl}/banner`, { cache: "no-store" });
//   if (!resBanner.ok) {
//     throw new Error("Failed to fetch banner");
//   }
//   const jsonBanner = await resBanner.json();
//   let bannerItem = jsonBanner.data;

//   // Fetch products
//   const resProduct = await fetch(`${baseUrl}/products`, { cache: "no-store" });
//   if (!resProduct.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   const jsonProduct = await resProduct.json();
//   const productsItem = jsonProduct.data;

//   // Fix banner image URLs
//   bannerItem = bannerItem.map((item: any) => ({
//     ...item,
//     image: `${baseUrl}/${item.image}`,
//   }));

//   return (
//     <div>
//       <Home
//         categoriesItem={categoriesItem}
//         bannerItem={bannerItem}
//         productsItem={productsItem}
//       />
//     </div>
//   );
// }
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
