import apiSlice from '@/features/api/apiSlice';

export const videosApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: (data) => `/videos?page=${data.page}&limit=${data.limit}`
		})
	})
});

export const { useGetVideosQuery } = videosApiSlice;
