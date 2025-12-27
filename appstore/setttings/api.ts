import { apiSlice } from "@/appstore/api-slice";

export const settingApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    settig: build.query<any, void>({
      query: () =>
        "/settings",
    }),
  }),
});

export const { useSettigQuery } = settingApi;