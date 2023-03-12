import { useAuthContext } from 'hooks/useAuthContext';
import { useLogout } from 'hooks/useLogout';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const { currentUser } = useAuthContext();
	const { logout } = useLogout();
	console.log(currentUser);

	const logoutHandler = () => {
		logout();
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
					<span role="button" className="material-icons-outlined" title="Logout" onClick={logoutHandler}>
						logout
					</span>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</nav>
	);
}
