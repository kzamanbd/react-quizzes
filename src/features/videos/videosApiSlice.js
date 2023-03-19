import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiOptions } from 'utils/config';

export const videosApiSlice = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery(baseApiOptions),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: (page) => `/api/videos?page=${page}`
		})
	})
});

export const { useGetVideosQuery } = videosApiSlice;
