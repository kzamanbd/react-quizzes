import { configureStore } from '@reduxjs/toolkit';
import { videosApiSlice } from 'features/videos/videosApiSlice';

export const store = configureStore({
	reducer: {
		[videosApiSlice.reducerPath]: videosApiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(videosApiSlice.middleware)
});
