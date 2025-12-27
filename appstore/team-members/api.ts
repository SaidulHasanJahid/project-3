import { apiSlice } from "@/appstore/api-slice";

export const employeeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    employees: build.query<any, void>({
      query: () => "/public/employees?page=1&limit=20",
    }),
  }),
});

export const { useEmployeesQuery } = employeeApi;