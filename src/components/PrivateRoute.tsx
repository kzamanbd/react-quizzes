import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '../types';

const PrivateRoute: React.FC<ChildrenProps> = ({ children }) => {
	const loggedIn = localStorage.getItem('loggedIn');
	return loggedIn ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
