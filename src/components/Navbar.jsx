import { useAuth } from 'contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	const logout = () => {
		// remove token from local storage
		localStorage.removeItem('token');
		console.log('Logout');
		navigate('/login');
	};
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/" className="brand">
						<img src="/images/logo-bg.png" alt="Logo" />
						<h3>LWS</h3>
					</Link>
				</li>
			</ul>
			<div className="account">
				<span role="button" className="material-icons-outlined" title="Account">
					account_circle
				</span>
				{currentUser ? (
					<span role="button" className="material-icons-outlined" title="Logout" onClick={logout}>
						logout
					</span>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</nav>
	);
}
