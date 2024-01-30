// style and hook imports
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// local imports
import Lava from "./Components/Lava";
import Skynet from "./Components/Skynet";
import Judgement from "./Components/Judgement";

function App() {
	const [state, setState] = useState({
		choice: "",
		skynet: "",
		winner: "",
		Doom: [],
		Victory: []
	});

	const handleClick = useCallback((choice) => {
		let { Doom, Victory, winner } = state;

		if(winner === 'Skynet'){
			Doom = [...Doom, 1];
		} else if (winner === 'Mankind') {
			Victory = [...Victory, 1];
		}

		// console.log(Doom, "Doom");
		// console.log(Victory, "Victory");

		setState({
			...state,
			choice,
			Doom,
			Victory
		});
	}, [state]);

	useEffect(() => {
		const { choice } = state;
		if (choice) {
			console.log(choice,'choice')
			const skynetChoice = Skynet();
			const result = `${Judgement(choice, skynetChoice)}`;
			console.log(skynetChoice, 'skynet')
			console.log(result)
			setState({
				...state,
				skynet: skynetChoice,
				winner: result,
				choice: ""
			});
		}
	}, [state.choice]);


	return (
		<div className="App">
			<header>Come with me if you want to Live</header>
			<Card id="card" className="text-center">
				<Card.Header>Rock Paper Scissors</Card.Header>
				<Card.Body>
					<Card.Title>To be determined</Card.Title>
					<Card.Text>???</Card.Text>
				</Card.Body>
				<p>Skynets choice: {state.skynet} </p>
				<Button onClick={(e) => handleClick("Rock")} variant="light">
					Rock
				</Button>
				<Button onClick={(e) => handleClick("Paper")} variant="light">
					Paper
				</Button>
				<Button onClick={(e) => handleClick("Scissors")} variant="light">
					Scissors
				</Button>
				<Lava />
				<Card.Footer className="text-muted">
					Timer to start on screen load
				</Card.Footer>
				<p>Winner is : {state.winner}</p>
			</Card>
		</div>
	);
}

export default App;
