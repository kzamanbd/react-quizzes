import { useAuthContext } from 'hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
	const { currentUser } = useAuthContext();
	return currentUser ? <div>{children}</div> : <Navigate to="/login" />;
}
