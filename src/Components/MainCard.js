// style and hook imports
import "../App.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// local imports
import Lava from "./Buttons/Lava";
import Skynet from "./Skynet";
import Judgement from "./Judgement";

function Main() {
	const [choice, setChoice] = useState("");
	const [skynet, setSkynet] = useState("");
	const [winner, setWinner] = useState("");
	// console.log(choice);

	useEffect(() => {
		const skynetChoice = { Skynet };
		setSkynet(skynetChoice);
		console.log(skynetChoice);
		const result = <Judgement choice={choice} skynet={skynet} />;
		setWinner(result);
	}, [choice]);

	return (
		<div className="main">
			<Card className="text-center">
				<Card.Header>Rock Paper Scissors</Card.Header>
				<Card.Body>
					<Card.Title>To be determined</Card.Title>
					<Card.Text>???</Card.Text>
				</Card.Body>
				<p>
					Skynets choice: <Skynet />
				</p>
				<Button onClick={(e) => setChoice("Rock")} variant="light">
					Rock
				</Button>
				<Button onClick={(e) => setChoice("Paper")} variant="light">
					Paper
				</Button>
				<Button onClick={(e) => setChoice("Scissors")} variant="light">
					Scissors
				</Button>
				<Lava />
				<Card.Footer className="text-muted">
					Timer to start on screen load
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Main;
