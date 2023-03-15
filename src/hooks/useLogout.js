import axios from 'utils/axios';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();

	const logout = async () => {
		// remove token from storage
		await axios.get('/api/auth/logout', { withCredentials: true });
		// remove user from storage
		localStorage.removeItem('user');
		// dispatch logout action
		dispatch({ type: 'LOGOUT' });
	};

	return { logout };
};
