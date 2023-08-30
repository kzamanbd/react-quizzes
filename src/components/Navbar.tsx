import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const { currentUser } = useSelector((state: RootState) => state.auth);

	const logoutHandler = () => {
		console.log('Logout');
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
					<>
						<span role="button">{currentUser.name}</span>
						<span role="button" className="material-icons-outlined" title="Logout" onClick={logoutHandler}>
							logout
						</span>
					</>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</nav>
	);
}
