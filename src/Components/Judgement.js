function Judgement(choice, skynet) {
	if (choice === skynet) {
		return "draw";
	} else if (
		(choice === "rock" && skynet === "scissors") ||
		(choice === "paper" && skynet === "rock") ||
		(choice === "scissors" && skynet === "paper")
	) {
		return "you";
	} else {
		return "skynet";
	}
}

export default Judgement;
