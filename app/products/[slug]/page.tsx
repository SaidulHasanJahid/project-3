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

            // <div className="block relative cursor-pointer">
            //     <div className="bg-white p-4 relative group/card border-none shadow-none">
            //       {/* Discount Badge */}
            //       {product.discount && (
            //         <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-sm z-10">
            //           {product.discount}%
            //         </span>
            //       )}

            //       {/* Hover Icons */}
            //       <div className="absolute -translate-y-1/2 right-3 z-20 opacity-0 group-hover/card:opacity-100 translate-x-5 group-hover/card:translate-x-0 transition-all duration-500 ease-in-out flex flex-col gap-2">
            //         <CartIconActions />
            //       </div>

            //       {/* Product Image */}
            //       <div className="overflow-hidden rounded-md flex justify-center items-center w-[300px] h-[300px] mx-auto">
            //         <Image
            //           src={`${baseUrl}/${product.thumbnail}`}
            //           alt={product.name}
            //           width={450}
            //           height={450}
            //           className="object-cover w-[300px] h-[300px] transition-transform duration-300 group-hover/card:scale-105"
            //         />
            //       </div>

            //       {/* Product Info */}
            //       <div className="text-center mt-4 space-y-1">
            //         <h3 className="text-sm text-gray-800">{product.name}</h3>
            //         <div className="font-bold text-gray-900 text-md">
            //           {product.discount_price || product.price}$
            //           {product.discount_price && (
            //             <span className="text-gray-500 font-normal line-through text-sm ml-2">
            //               {product.price}$
            //             </span>
            //           )}
            //         </div>
            //         <div className="text-sm text-yellow-500 flex justify-center items-center gap-1">
            //           <span>★</span>
            //           <span className="text-gray-600">0.0 (0)</span>
            //         </div>
            //       </div>
            //     </div>
            //   </div>