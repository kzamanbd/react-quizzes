import { useAuthContext } from 'hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

export default function GuestRoute({ children }) {
	const { currentUser } = useAuthContext();
	return currentUser ? <Navigate to="/" /> : <div>{children}</div>;
}
