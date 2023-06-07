import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavbarComponent() {
	const { token, setToken } = useContext(AuthContext);

	const handleLogout = () => {
		setToken(null);
	};

	return (
		<Navbar bg="dark" variant="dark" expand="md" className="px-5 py-3">
			<Navbar.Brand as={Link} to="/">
				Login App
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/" exact>
						Home
					</Nav.Link>
					{!token && (
						<Nav.Link as={NavLink} to="/login">
							Login
						</Nav.Link>
					)}
					{token && (
						<>
							<Nav.Link as={NavLink} to="/dashboard">
								Dashboard
							</Nav.Link>
							<Nav.Link as={NavLink} to="/profile">
								Profile
							</Nav.Link>
						</>
					)}
				</Nav>
				{token && (
					<Button
						variant="danger"
						onClick={handleLogout}
						className="ms-3"
					>
						Logout
					</Button>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}
