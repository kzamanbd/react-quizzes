import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://express-app-8plc.onrender.com/api',
		credentials: 'include'
	}),
	endpoints: () => ({})
});

export default apiSlice;
