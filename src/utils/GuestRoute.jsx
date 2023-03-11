import { useAuth } from 'contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function GuestRoute({ children }) {
	const { currentUser } = useAuth();
	return currentUser ? <Navigate to="/" /> : <div>{children}</div>;
}
