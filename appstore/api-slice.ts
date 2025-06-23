import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the apiSlice using TypeScript
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    prepareHeaders: (headers, { getState }) => {
      // Add any custom headers here, e.g., authentication tokens
      const token = (getState() as any).auth.token; // Adjust based on your state structure
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  // Keep unused data for a specified period or set it to 0 to remove immediately.
  // keepUnusedDataFor: 0,

  endpoints: () => ({}),
});

// Export the types of the API's reducer and actions
export type ApiSlice = typeof apiSlice;
