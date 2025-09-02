import { apiSlice } from "@/appstore/api-slice";

export const FeatureProductApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    featureProductData: build.query<any, void>({
      query: () => "/web/products/featured",
    }),
  }),

  
});

export const { useFeatureProductDataQuery } = FeatureProductApi;
