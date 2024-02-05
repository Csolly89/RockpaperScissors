import Button from "react-bootstrap/Button";

export default function GameButton({ handleClick, selection }) {
    return (
        <div style={{margin:'.5rem'}}>
        <Button style={{padding:'auto'}} onClick={() => handleClick(selection)} variant="light">
            {selection}
        </Button>
        </div>
    );
}
