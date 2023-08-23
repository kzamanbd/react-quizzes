import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
	currentUser: {
		id?: string;
		name?: string;
		email?: string;
	};
}

const initialState: AuthState = {
	currentUser: {}
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		}
	}
});

export const { updateCurrentUser } = authSlice.actions;
export default authSlice.reducer;
