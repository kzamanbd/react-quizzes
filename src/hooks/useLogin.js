import { useState } from 'react';
import axios from 'utils/axios';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (username, password) => {
		setIsLoading(true);
		setError(null);

		try {
			const { data } = await axios.post('/api/auth/login', { username, password }, { withCredentials: true });
			// save the token to local storage
			localStorage.setItem('user', JSON.stringify(data.user));
			// update the auth context
			dispatch({ type: 'SET_CURRENT_USER', payload: data.user });
			// update loading state
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			setError(error.response?.data?.message);
		}
	};

	return { login, isLoading, error };
};
