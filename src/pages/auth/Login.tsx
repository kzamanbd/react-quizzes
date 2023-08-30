import { useLoginMutation } from '@/features/auth/authApi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	const [login, { isLoading }] = useLoginMutation();
	const navigate = useNavigate();

	const [email, setEmail] = useState('kzamanbn@gmail.com');
	const [password, setPassword] = useState('password');

	const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');

		try {
			await login({ username: email, password }).unwrap();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<main className="main">
			<div className="container">
				<h1>Login to your account</h1>
				<div className="column">
					<div className="illustration">
						<img src="/images/login.svg" alt="Login" />
					</div>
					<form className="login form" onSubmit={formSubmitHandler}>
						<div className="textInput">
							<input
								type="email"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
							/>
							<span className="material-icons-outlined"> alternate_email </span>
						</div>

						<div className="textInput">
							<input
								type="password"
								placeholder="Enter password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
							/>
							<span className="material-icons-outlined"> lock </span>
						</div>

						<button className="button">
							<span>{isLoading ? 'Loading...' : 'Login'}</span>
						</button>

						<div className="info">
							Don't have an account? <Link to="/register">Register</Link> instead.
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
