import { apiSlice } from "@/appstore/api-slice";

export const homeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    
    getBestMonthData: build.query<any, void>({
      query: () => "/category/web/best-month",
    }),

    getBestSellingProducts: build.query<any, void>({
      query: () => "/web/products/best-selling",
    }),

    featureProductData: build.query<any, void>({
      query: () => "/web/products/featured",
    }),

    catelogueWiseProducts: build.query<any, void>({
      query: () => "/web/catalogue-with-products",
    }),
   
 
  }),

});


export const { 
  useGetBestMonthDataQuery, 
  useGetBestSellingProductsQuery, 
  useFeatureProductDataQuery, 
  useCatelogueWiseProductsQuery,
} = homeApi;
