export default function Judgement(choice, skynet) {
	// console.log("this is button", choice, "this is skynet", skynet);
	const winConditions = {
		Rock: "Paper",
		Paper: "Scissors",
		Scissors: "Rock",
	};

	if (choice === skynet) {
		return "DRAW";
	} else if (winConditions[choice] === skynet) {
		return "Mankind";
	} else {
		return "Skynet";
	}
}
