import Button from "react-bootstrap/Button";

function Lava({ resetGameVictor}) {
	return (
		<div>
			<Button style={{marginBottom:'1rem'}} onClick={resetGameVictor} variant="danger">Lava</Button>
		</div>
	);
}

export default Lava;
