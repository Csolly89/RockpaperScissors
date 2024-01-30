import Button from "react-bootstrap/Button";

function Lava({ resetGameVictor}) {
	return (
		<div>
			<Button onClick={resetGameVictor} variant="danger">Lava</Button>
		</div>
	);
}

export default Lava;
