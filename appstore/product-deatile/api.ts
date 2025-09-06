// src/redux/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }), 
  endpoints: (builder) => ({
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`, 
    }),
  }),
});

export const { useGetProductBySlugQuery } = apiSlice;
