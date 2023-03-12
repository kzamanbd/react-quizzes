import { useLogin } from 'hooks/useLogin';
import { useState } from 'react';

export default function Login() {
	const { login, isLoading, error } = useLogin();

	const [email, setEmail] = useState('kzamanbn@gmail.com');
	const [password, setPassword] = useState('password');
	const formSubmitHandler = async (e) => {
		e.preventDefault();
		console.log('Form submitted');

		try {
			await login(email, password);
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
						{error && <div>{error}</div>}
						<div className="textInput">
							<input
								type="text"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<span className="material-icons-outlined"> alternate_email </span>
						</div>

						<div className="textInput">
							<input
								type="password"
								placeholder="Enter password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
							<span className="material-icons-outlined"> lock </span>
						</div>

						<button className="button">
							<span>{isLoading ? 'Loading...' : 'Login'}</span>
						</button>

						<div className="info">
							Don't have an account? <a href="/register">Register</a> instead.
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
