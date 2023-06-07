import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

export default function Profile() {
	const { token } = useContext(AuthContext);

	return (
		<Container>
			<h1 className="my-3">Profile</h1>
			<p>Username: {token}</p>
		</Container>
	);
}
