import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'utils/axios';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [error, setError] = useState(null);

	const login = async (username, password) => {
		const { data } = await axios.post('/api/auth/login', { username, password });
		return data;
	};

	const register = async (email, password) => {
		const { data } = await axios.post('/auth/register', { email, password });
		return data;
	};

	const logout = async () => {
		const { data } = await axios.post('/auth/logout');
		return data;
	};

	const getCurrentUser = async () => {
		const { data } = await axios.get('/api/current-user');
		return data;
	};

	const value = {
		error,
		login,
		register,
		logout,
		currentUser,
		loading
	};

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const user = await getCurrentUser();
				setCurrentUser(user);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<AuthContext.Provider value={value}>
			{loading ? <div className="flex items-center justify-center h-screen">Loading</div> : children}
		</AuthContext.Provider>
	);
};
