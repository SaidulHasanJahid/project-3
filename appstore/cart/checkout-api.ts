import { apiSlice } from "@/appstore/api-slice";

export const checkoutApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    saveOrder: build.mutation({
      query: (data) => ({
        url: "/web/checkout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSaveOrderMutation } = checkoutApi;
