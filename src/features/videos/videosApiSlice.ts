import apiSlice from '@/features/api/apiSlice';

export const videosApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: (page) => `/api/videos?page=${page}`
		})
	})
});

export const { useGetVideosQuery } = videosApiSlice;
