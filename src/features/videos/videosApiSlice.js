import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseOptions } from 'utils/config';

export const videosApiSlice = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery(apiBaseOptions),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: ({ page }) => `/api/videos?page=${page}`
		})
	})
});

export const { useGetVideosQuery } = videosApiSlice;
