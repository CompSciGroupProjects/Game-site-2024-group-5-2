function input(playerChoice) {
    document.getElementById("playerChoiceDisplay").innerHTML = playerChoice;

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoiceText;


    switch (computerChoice) {
        case 1:
            computerChoiceText = "rock";
            break;
        case 2:
            computerChoiceText = "paper";
            break;
        case 3:
            computerChoiceText = "scissors";
            break;
    }

    document.getElementById("computerChoiceDisplay").innerHTML = computerChoiceText;


    if (playerChoice === computerChoiceText) {
        document.getElementById("winnerDisplay").innerHTML = "TIE";
    } else if (
        (playerChoice === "rock" && computerChoiceText === "scissors") ||
        (playerChoice === "paper" && computerChoiceText === "rock") ||
        (playerChoice === "scissors" && computerChoiceText === "paper")
    ) {
        document.getElementById("winnerDisplay").innerHTML = "You WON!";
    } else {
        document.getElementById("winnerDisplay").innerHTML = "You LOST!";
    }
}