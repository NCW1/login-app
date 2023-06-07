import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import NavbarComponent from "./components/Navbar";
import useLocalStorage from "use-local-storage";

export default function App() {
	const [token, setToken] = useLocalStorage("token", null);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<BrowserRouter>
				<NavbarComponent />
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Login />} path="/login" />
					<Route
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
						path="/dashboard"
					/>
					<Route
						element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						}
						path="/profile"
					/>
				</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}
