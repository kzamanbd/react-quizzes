import Navbar from 'components/Navbar';
import { AuthProvider } from 'contexts/AuthContext';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from 'utils/AuthRoute';
import GuestRoute from 'utils/GuestRoute';

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
