import { Navigate } from 'react-router-dom';

import React from 'react';
import { ChildrenProps } from '../types';

const PublicRoute: React.FC<ChildrenProps> = ({ children }) => {
	const loggedIn = localStorage.getItem('loggedIn');
	return loggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
