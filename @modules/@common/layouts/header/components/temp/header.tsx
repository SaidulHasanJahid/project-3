// "use client";

// import dynamic from "next/dynamic";
// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { FaChevronDown, FaSearch } from "react-icons/fa";
// const CartDropdown = dynamic(() => import("./cart-dropdown"), { ssr: false });
// import RightDrawer from "./right-drawer";
// import TopBar from "./top-bar";
// import { useLazyGetMenuCategoryQuery } from "@/appstore/layout/layout-api";
// import MenuCategories from "./components/menu-categories";

// export default function Header() {
//   const [showProductDropdown, setShowProductDropdown] = useState(false);
//   const [showPagesDropdown, setShowPagesDropdown] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [showInlineSearch, setShowInlineSearch] = useState(false);
//   const [menuCategory, setMenuCategory] = useState([]);
//   const searchRef = useRef(null);

//   const [menuTrigger, { isFetching }] = useLazyGetMenuCategoryQuery();

//   const fetchMenus = async () => {
//     try {
//       const response = await menuTrigger().unwrap();
//       setMenuCategory(response);
//     } catch (error) {
//       console.error("Error fetching banners:", error);
//     }
//   };

//   console.log(menuCategory, "menuCategory");

//   useEffect(() => {
//     function handleResize() {
//       setWindowWidth(window.innerWidth);
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         searchRef.current &&
//         !(searchRef.current as HTMLElement).contains(event.target as Node)
//       ) {
//         setShowInlineSearch(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [searchRef]);

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   const menuItems = ["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"];

//   return (
//     <header className="sticky top-0 z-50 bg-[#fff] font-sans transition-all duration-300">
//       <div className="px-[70px] mx-auto py-3">
//         <TopBar />
//       </div>

//       <div className="px-[70px] py-4">
//         <div className="flex items-center justify-between flex-wrap">
//           {windowWidth >= 1464 ? (
//             <div className="w-full flex justify-between items-center gap-6">
//               <Link href="/">
//                 <Image
//                   src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
//                   alt="Logo"
//                   width={220}
//                   height={40}
//                   className="object-contain cursor-pointer"
//                 />
//               </Link>

//               <nav className="flex gap-6 text-sm font-semibold text-[#424A4D] text-[13px] relative">
//                 {menuItems.map((item) => {
//                   const isProduct = item === "PRODUCT";
//                   const isPages = item === "PAGES";
//                   return (
//                     <div
//                       key={item}
//                       className="relative group cursor-pointer"
//                       onMouseEnter={() => {
//                         if (isProduct) setShowProductDropdown(true);
//                         if (isPages) setShowPagesDropdown(true);
//                       }}
//                       onMouseLeave={() => {
//                         if (isProduct) setShowProductDropdown(false);
//                         if (isPages) setShowPagesDropdown(false);
//                       }}
//                     >
//                       <Link href={routeMap[item] || "#"}>
//                         <span className="flex items-center gap-1">
//                           {item}
//                           {(isProduct || isPages) && (
//                             <FaChevronDown className="text-xs" />
//                           )}
//                         </span>
//                       </Link>
//                       {isProduct && (
//                         <MenuCategories
//                           isOpen={showProductDropdown}
//                           type="product"
//                           menuCategory={menuCategory}
//                         />

//                       )}
//                       {isPages && (
//                         <DropdownMenu isOpen={showPagesDropdown} type="pages" />
//                       )}
//                     </div>
//                   );
//                 })}
//               </nav>

//               <div className="flex items-center ">
//                 <div
//                   className="flex bg-[#e7e7e898] overflow-hidden rounded-l-full"
//                   style={{ height: 50 }}
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Product For"
//                     className="text-sm text-[#767678] px-4 outline-none w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] xl:w-[360px]"
//                     style={{ height: 50 }}
//                   />
//                   <select
//                     className="text-sm text-[#767678] bg-transparent px-3 border-l border-gray-300 outline-none hidden min-[500px]:block"
//                     style={{ width: 160, height: 50 }}
//                   >
//                     <option>All Categories</option>
//                     <option>Smartphone</option>
//                     <option>Laptop</option>
//                     <option>Gaming</option>
//                   </select>
//                 </div>
//                 <button
//                   className="bg-black text-white rounded-r-full px-4 flex items-center justify-center"
//                   style={{ height: 50, minWidth: 50 }}
//                 >
//                   <FaSearch />
//                 </button>
//                 <CartDropdown iconSize="xl" />
//               </div>
//             </div>
//           ) : (
//             <div className="w-full flex justify-between items-center">
//               <div className="flex items-center gap-4 w-full">
//                 <div className="lg:hidden">
//                   <RightDrawer />
//                 </div>
//                 <div className="min-[420px]:flex hidden items-center gap-4">
//                   <Image
//                     src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
//                     alt="Logo"
//                     width={180}
//                     height={40}
//                     className="object-contain cursor-pointer"
//                   />
//                 </div>
//                 {windowWidth >= 980 && (
//                   <nav className="flex gap-4 text-sm font-semibold text-[#424A4D] text-[13px]">
//                     {menuItems.map((item) => (
//                       <Link key={item} href={routeMap[item] || "#"}>
//                         {item}
//                       </Link>
//                     ))}
//                   </nav>
//                 )}
//               </div>
//               <div className="flex items-center gap-3">
//                 {windowWidth >= 980 &&
//                   windowWidth < 1464 &&
//                   !showInlineSearch && (
//                     <button
//                       onClick={() => setShowInlineSearch(true)}
//                       className="transition-all duration-300"
//                       style={{
//                         background: "none",
//                         color: "#767678",
//                         padding: "10px",
//                         fontSize: "20px",
//                       }}
//                     >
//                       <FaSearch />
//                     </button>
//                   )}
//                 <CartDropdown iconSize="lg" />
//               </div>
//             </div>
//           )}
//         </div>

//         {showInlineSearch && windowWidth >= 980 && windowWidth < 1464 && (
//           <div ref={searchRef} className="mt-3 transition-all duration-300">
//             <div
//               className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-[#e7e7e898] w-full"
//               style={{ height: 50 }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search Product For"
//                 className="px-4 text-sm text-[#444] outline-none bg-[#e7e7e898] flex-grow"
//                 style={{ height: "100%" }}
//               />
//               <select
//                 className="text-sm text-[#444] bg-transparent px-3 outline-none border-l border-gray-300 hidden min-[500px]:block"
//                 style={{ height: "100%", width: 160 }}
//               >
//                 <option>All Categories</option>
//                 <option>Smartphone</option>
//                 <option>Laptop</option>
//                 <option>Gaming</option>
//               </select>
//               <button
//                 onClick={() => setShowInlineSearch(false)}
//                 className="bg-black text-white flex items-center justify-center"
//                 style={{ height: "100%", width: 50 }}
//               >
//                 <FaSearch className="text-sm" />
//               </button>
//             </div>
//           </div>
//         )}

//         {windowWidth < 980 && (
//           <div className="w-full mt-3">
//             <div
//               className="flex items-center border border-gray-300 rounded-full overflow-hidden"
//               style={{ height: 50, backgroundColor: "#e7e7e898" }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search Product For"
//                 className="px-4 text-sm text-[#444] outline-none bg-transparent"
//                 style={{
//                   height: "100%",
//                   flexGrow: 1,
//                   minWidth: windowWidth < 500 ? "140px" : "auto",
//                 }}
//               />
//               <select
//                 className="text-sm text-[#444] bg-transparent px-3 outline-none border-l border-gray-300"
//                 style={{
//                   height: "100%",
//                   width: windowWidth < 500 ? "100px" : "160px",
//                 }}
//               >
//                 <option>All Categories</option>
//                 <option>Smartphone</option>
//                 <option>Laptop</option>
//                 <option>Gaming</option>
//               </select>
//               <button
//                 className="bg-black text-white flex items-center justify-center !ml-[-15px] "
//                 style={{ height: 50, width: 50 }}
//               >
//                 <FaSearch className="text-sm" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// const routeMap: { [key: string]: string } = {
//   HOME: "/",
//   PRODUCT: "/productpage",
//   PAGES: "#",
//   BLOG: "/blog",
//   FAQ: "/faq",
//   CONTACT: "/contact",
// };

// function DropdownMenu({
//   isOpen,
//   type,
// }: {
//   isOpen: boolean;
//   type: "product" | "pages";
// }) {
//   if (type === "product") {
//     const productData = [
//       {
//         title: "ELECTRONIC",
//         items: ["TELEVISION", "REFRIGERATOR", "WASHING MACHINE"],
//       },
//       {
//         title: "FASHION & BEAUTY",
//         items: ["ACCESSORIES", "BAGS", "CLOTHINGS"],
//       },
//       {
//         title: "ELECTRONIC",
//         items: ["TELEVISION", "REFRIGERATOR", "WASHING MACHINE"],
//       },
//       {
//         title: "FASHION & BEAUTY",
//         items: ["ACCESSORIES", "BAGS", "CLOTHINGS"],
//       },
//     ];

//     return (
//       <div
//         className={clsx(
//           "absolute md:left-[-290px] lg:left-[-300px] top-full mt-4 md:w-[100] lg:w-[100%] bg-white p-6 grid grid-cols-4 gap-4 shadow-xl rounded-md z-50 transition-all duration-300",
//           isOpen
//             ? "opacity-100 visible scale-100"
//             : "opacity-0 invisible scale-95"
//         )}
//         style={{ fontSize: "13px", color: "rgb(27,27,30)", lineHeight: "35px" }}
//       >
//         {productData.map((section, i) => (
//           <div key={i}>
//             <h3 className="font-bold text-[13px] mb-2">{section.title}</h3>
//             <ul className="space-y-1">
//               {section.items.map((item, j) => (
//                 <li key={j} className="hover:text-[#6b3d2e] cursor-pointer">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const pages = ["About Us", "Team", "Services", "404 Page"];
//   return (
//     <div
//       className={clsx(
//         "absolute left-0 top-full mt-4 w-48 bg-white p-4 shadow-xl rounded-md z-50 transition-all duration-300",
//         isOpen
//           ? "opacity-100 visible scale-100"
//           : "opacity-0 invisible scale-95"
//       )}
//       style={{ fontSize: "13px", color: "rgb(27,27,30)" }}
//     >
//       <ul className="space-y-2">
//         {pages.map((page, i) => (
//           <li key={i} className="cursor-pointer hover:text-[#6b3d2e]">
//             {page}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
