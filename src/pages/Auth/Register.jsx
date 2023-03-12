import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'utils/axios';

export default function Register() {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [agree, setAgree] = useState(false);
	const [error, setError] = useState('');

	const formSubmitHandler = async (e) => {
		e.preventDefault();
		console.log('Form submitted');
		if (password !== confirmPassword) {
			setError('Passwords do not match');
			return;
		}
		try {
			const { data } = await axios.post('/api/auth/register', { name, email, password });
			navigate('/login');
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="main">
			<div className="container">
				<h1>Create an account</h1>
				<div className="column">
					<div className="illustration">
						<img src="/images/signup.svg" alt="Signup" />
					</div>
					<form className="signup form" onSubmit={formSubmitHandler}>
						{error && <div>{error}</div>}
						<div className="textInput">
							<input
								type="text"
								placeholder="Enter name"
								onChange={(e) => setName(e.target.value)}
								value={name}
								required
							/>
							<span className="material-icons-outlined"> person </span>
						</div>

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
								required
							/>
							<span className="material-icons-outlined"> lock </span>
						</div>

						<div className="textInput">
							<input
								type="password"
								placeholder="Confirm password"
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
							<span className="material-icons-outlined"> lock_clock </span>
						</div>

						<label>
							<input type="checkbox" onChange={(e) => setAgree(e.target.value)} value={agree} required />
							<span>I agree to the Terms & Conditions</span>
						</label>

						<button type="submit" className="button">
							<span>Join</span>
						</button>

						<div className="info">
							Already have an account? <Link to="/login">Login</Link> instead.
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
