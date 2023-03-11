import { useAuth } from 'contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
	const { currentUser } = useAuth();
	return currentUser ? <div>{children}</div> : <Navigate to="/login" />;
}
