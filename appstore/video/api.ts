import { apiSlice } from "@/appstore/api-slice";

export const videoApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    videoSectionAbout: build.query<any, void>({
      query: () => "/public/web-videos?page=1&limit=20&type=about",
    }),

    videoSectionHome: build.query<any, void>({
      query: () => "/public/web-videos?page=1&limit=20&type=home",
    }),
  }),
});

export const {
  useVideoSectionAboutQuery,
  useVideoSectionHomeQuery,
} = videoApi;