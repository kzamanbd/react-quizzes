import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return { currentUser: action.payload };
		case 'LOGOUT':
			return { currentUser: null };
		default:
			return state;
	}
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		currentUser: null
	});

	console.log('AuthContext state:', state);

	useEffect(() => {
		const currentUser = JSON.parse(localStorage.getItem('user'));

		if (currentUser) {
			dispatch({ type: 'SET_CURRENT_USER', payload: currentUser });
		}
	}, []);

	const value = {
		...state,
		dispatch
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
