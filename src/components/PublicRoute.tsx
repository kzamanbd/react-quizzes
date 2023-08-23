import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/types';
import React from 'react';

const PublicRoute: React.FC<ChildrenProps> = ({ children }) => {
	const loggedIn = localStorage.getItem('loggedIn');
	return loggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
