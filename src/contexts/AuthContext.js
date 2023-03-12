import { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'utils/axios';

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

	const [loading, setLoading] = useState(false);

	console.log('AuthContext state:', state);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const token = localStorage.getItem('token');

				if (token) {
					setLoading(true);
					const { data } = await axios.get('/api/current-user');
					dispatch({ type: 'SET_CURRENT_USER', payload: data.user });
					console.log('response', data);
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};
		fetchUserData();
	}, []);

	const value = {
		dispatch,
		...state
	};

	return <AuthContext.Provider value={value}>{loading ? <div>Loading...</div> : children}</AuthContext.Provider>;
};
