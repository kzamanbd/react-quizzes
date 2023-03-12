import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';
// initial state
const initialState = {
	isLoading: false,
	videos: [],
	error: null,
	isError: false,
	hasMore: true
};

// async thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async (query) => {
	const videos = await getVideos(query);
	return videos;
});

const videosSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				const { videos } = action.payload;
				state.videos = [...videos, ...state.videos];
				state.hasMore = true;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.videos = [];
				state.hasMore = false;
			});
	}
});

export default videosSlice.reducer;
