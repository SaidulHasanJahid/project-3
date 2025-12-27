import { apiSlice } from "@/appstore/api-slice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    isfeatureoffer: build.query<any, void>({
      query: () =>
        "/catalog/categories?page=1&limit=20&isFeature=true",
    }),
  }),
});

export const { useIsfeatureofferQuery } = productApi;