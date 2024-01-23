export default function Judgement(choice, skynet) {
	// console.log("this is button", choice, "this is skynet", skynet);
	switch (choice) {
		case "Rock":
			if (skynet === "Scissors") {
				return "Mankind";
			} else if (skynet === "Paper") {
				return "Skynet";
			} else {
				return "DRAW";
			}

		case "Paper":
			if (skynet === "Rock") {
				return "Mankind";
			} else if (skynet === "Scissors") {
				return "Skynet";
			} else {
				return "DRAW";
			}

		case "Scissors":
			if (skynet === "Paper") {
				return "Mankind";
			} else if (skynet === "Rock") {
				return "Skynet";
			} else {
				return "DRAW";
			}

		case "Lava":
		default:
			return "Mankind";
	}
}
