// import { useState, useEffect } from 'react';

// function Timer({ resetGame, seconds }) {
//     const [seconds, setSeconds] = useState(10);

//     useEffect(() => {
//         let interval = null
//         if(seconds > 0) {
//             interval = setInterval(() => {
//                 setSeconds(seconds => seconds - 1)
//             }, 1000)
//         }else if (seconds === 0) {
//             resetGame('Doom');
//             setSeconds(null)
//         }
//         return() => clearInterval(interval)
//     }, [seconds])

//     return (
//         <div>
//             Judgement Day in T-minus: {seconds} seconds
//         </div>
//     );
// }

// export default Timer;

// come back to add timer that resets when state variables are === to "" in app.js