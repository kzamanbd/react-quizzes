import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const videosApiSlice = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000', credentials: 'include' }),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: ({ page }) => `/api/videos?page=${page}`
		})
	})
});

export const { useGetVideosQuery } = videosApiSlice;
