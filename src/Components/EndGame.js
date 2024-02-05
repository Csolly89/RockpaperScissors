import { useEffect } from 'react'

function EndGame({ Doom, Victory, resetGame }) {
    useEffect(() => {
        if (Doom.length === 3) {
            resetGame('Doom');
        } else if (Victory.length === 3) {
            resetGame('Victory');
        }
    }, [Doom, Victory, resetGame]);

    return null;
}
export default EndGame;