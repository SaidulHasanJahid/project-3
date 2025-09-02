// import Home from "@/@modules/home";

// export default async function HomePage() {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   // Fetch categories
//   const resCategories = await fetch(`${baseUrl}/category`, { cache: "no-store" });
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

  let categoriesItem: any[] = [];
  let bannerItem: any[] = [];
  let productsItem: any[] = [];

  // Fetch categories
  try {
    console.log("Fetching categories from:", `${baseUrl}/category`);
    const resCategories = await fetch(`${baseUrl}/category`, { cache: "no-store" });

    if (resCategories.ok) {
      const jsonCategories = await resCategories.json();
      categoriesItem = jsonCategories.data || [];
    } else {
      console.error("Failed to fetch categories. Status:", resCategories.status);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  // Fetch banners
  try {
    console.log("Fetching banners from:", `${baseUrl}/banner`);
    const resBanner = await fetch(`${baseUrl}/banner`, { cache: "no-store" });

    if (resBanner.ok) {
      const jsonBanner = await resBanner.json();
      bannerItem = (jsonBanner.data || []).map((item: any) => ({
        ...item,
        image: `${baseUrl}/${item.image}`,
      }));
    } else {
      console.error("Failed to fetch banner. Status:", resBanner.status);
    }
  } catch (error) {
    console.error("Error fetching banners:", error);
  }

  // Fetch products
  try {
    console.log("Fetching products from:", `${baseUrl}/products`);
    const resProduct = await fetch(`${baseUrl}/products`, { cache: "no-store" });

    if (resProduct.ok) {
      const jsonProduct = await resProduct.json();
      productsItem = jsonProduct.data || [];
    } else {
      console.error("Failed to fetch products. Status:", resProduct.status);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

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
