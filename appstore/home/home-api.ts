import { apiSlice } from "@/appstore/api-slice";

export const homeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getBestMonthData: build.query<any, void>({
      query: () => "/category/web/best-month",
    }),
  }),

  
});

export const { useGetBestMonthDataQuery } = homeApi;

