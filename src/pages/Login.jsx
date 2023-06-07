import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);

	function login() {
		const isCorrectUsername = username === "ngenchangwang@gmail.com";
		const isCorrectPassword = password === "psw";

		if (isCorrectUsername && isCorrectPassword) {
			authContext.setToken("ngenchangwang");
			navigate("/dashboard");
		}
	}

	return (
		<Container>
			<h1 className="my-3">Login to your account</h1>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email Address: </Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter E-mail"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Form.Text className="text-muted">
						We&apos;ll never share your e-mail with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" onClick={login}>
					Login
				</Button>
			</Form>
		</Container>
	);
}
