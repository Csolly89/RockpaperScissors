// style and hook imports
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// local imports
import Lava from "./Components/Lava";
import Skynet from "./Components/Skynet";
import Judgement from "./Components/Judgement";
import EndGame from "./Components/EndGame";

function App() {
	const [state, setState] = useState({
		choice: "",
		skynet: "",
		winner: "",
		Doom: [],
		Victory: []
	});

	const resetGame = (winner) => {
		let message = winner === 'Doom' ? "Game Over! Judgement Day has come!" : "We have won the Battle, but the War continues. Skynet has gone back in time for a second chance.";
		alert(message);
		setState({
			choice: "",
			skynet: "",
			winner: "",
			Doom: [],
			Victory: []
		});
	};
	
	const resetGameVictor = () => {
		let message =  "We have won the Battle, but the War continues. Skynet has gone back in time for a second chance.";
		alert(message);
		setState({
			choice: "",
			skynet: "",
			winner: "",
			Doom: [],
			Victory: []
		});
	};

	const handleClick = useCallback((choice) => {
		let { Doom, Victory, winner } = state;
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
			let Doom = state.Doom;
			let Victory = state.Victory;
			if(result === 'Skynet'){
				Doom = [...Doom, 1];
			} else if (result === 'Mankind') {
				Victory = [...Victory, 1];
			}
			if(Doom.length === 3) {
				resetGame('Doom');
			} else if(Victory.length === 3) {
				resetGame('Victory');
			} else {
				setState({
					...state,
					skynet: skynetChoice,
					winner: result,
					choice: "",
					Doom,
					Victory
				});
			}
		}
	}, [state.choice]);
	


	return (
		<div className="App">
			<header>Come with me if you want to Live</header>
			<Card id="card" className="text-center">
				<Card.Header>Rock Paper Scissors</Card.Header>
				<Card.Body>
					<Card.Title>Scoring</Card.Title>
					<Card.Text>Mankind: {state.Victory.length} | {state.Doom.length} :Skynet</Card.Text>
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
				{state.Doom.length >= 2 && <Lava resetGameVictor={resetGameVictor} />}
				<Card.Footer className="text-muted">
					Timer to start on screen load
				</Card.Footer>
				<p>Winner is : {state.winner}</p>
			</Card>
			<EndGame Doom={state.Doom} Victory={state.Victory} resetGame={resetGame} />
		</div>
	);
}

export default App;
