import apiSlice from '@/features/api/apiSlice';
import authSliceReducer from '@/features/auth/authSlice';
import { videosApiSlice } from '@/features/videos/videosApiSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSliceReducer,
		videos: videosApiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware);
	},
	devTools: import.meta.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
