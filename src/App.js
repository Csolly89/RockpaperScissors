// style and hook imports
import "./App.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// local imports
import Lava from "./Components/Lava";
import Skynet from "./Components/Skynet";
import Judgement from "./Components/Judgement";

function App() {
	const [choice, setChoice] = useState("");
	const [skynet, setSkynet] = useState("");
	const [winner, setWinner] = useState("");
	// console.log(choice);

	useEffect(() => {
		if (choice) {
			console.log(choice, "choice");
			const skynetChoice = Skynet();
			const result = `${Judgement(choice, skynetChoice)}`;
			console.log(skynetChoice, "skynet");
			console.log(result);
			setSkynet(skynetChoice);
			setWinner(result);
			setChoice("");
		}
	}, [choice]);

	return (
		<div className="App">
			<header>Come with me if you want to Live</header>
			<Card id="card" className="text-center">
				<Card.Header>Rock Paper Scissors</Card.Header>
				<Card.Body>
					<Card.Title>To be determined</Card.Title>
					<Card.Text>???</Card.Text>
				</Card.Body>
				<p>Skynets choice: {skynet} </p>
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

export default App;
