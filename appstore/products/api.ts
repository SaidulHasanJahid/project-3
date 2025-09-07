import { apiSlice } from "@/appstore/api-slice";

export const productAPi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getProductByCategory: build.query({
      query: (slug) => `/web/category/${slug}`,
    }),
  }),
});

export const { useGetProductByCategoryQuery } = productAPi;
