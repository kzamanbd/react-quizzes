import AuthRoute from 'components/AuthRoute';
import GuestRoute from 'components/GuestRoute';
import Navbar from 'components/Navbar';
import { AuthProvider } from 'contexts/AuthContext';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<AuthRoute>
								<Home />
							</AuthRoute>
						}
					/>

					<Route
						path="/login"
						element={
							<GuestRoute>
								<Login />
							</GuestRoute>
						}
					/>
					<Route
						path="/register"
						element={
							<GuestRoute>
								<Register />
							</GuestRoute>
						}
					/>
					<Route
						path="*"
						element={
							<main className="main">
								<div className="container">
									<p>Page not found!</p>
								</div>
							</main>
						}
					/>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
