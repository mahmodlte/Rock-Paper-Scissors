const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let result;
  if (randomNum === 1) {
    result = "rock";
  } else if (randomNum === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

function getHumanChoice(userChoice) {
  let result = null;
  let choice = userChoice.toLowerCase();
  console.log(choice);

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    result = choice;
  } else {
    console.log("Wrong slection not allowed in the game");
  }

  return result;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);

    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`I win ${humanChoice} beats ${computerChoice}`);
      playerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);

      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`I win!, ${humanChoice} beats ${computerChoice}`);

      playerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);

      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`I win!, ${humanChoice} beats ${computerChoice}`);

      playerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log(` You lose!, ${computerChoice} beats ${humanChoice}`);

      computerScore++;
    } else if (humanChoice === computerChoice) {
      console.log("Tied!");
    }
    console.log(playerScore, computerScore);
  }
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      playRound(getHumanChoice(e.target.innerText), getComputerChoice());
    });
  });
}

playGame();
