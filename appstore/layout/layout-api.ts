import { apiSlice } from "@/appstore/api-slice";

export const layoutApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getMenuCategory: build.query<any, void>({
      query: () => "/category/web/menu",
    }),
  }),
});

export const { useLazyGetMenuCategoryQuery } = layoutApi;
