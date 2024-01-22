import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Main() {
	return (
		<>
			<Card className="text-center">
				<Card.Header>Rock Paper Scissors</Card.Header>
				<Card.Body>
					<Card.Title>To be determined</Card.Title>
					<Card.Text>???</Card.Text>
					<Button variant="primary">Rock</Button>
					<Button variant="primary">Paper</Button>
					<Button variant="primary">Scissors</Button>
				</Card.Body>
				<Card.Footer className="text-muted">
					Timer to start on screen load
				</Card.Footer>
			</Card>
		</>
	);
}

export default Main;
