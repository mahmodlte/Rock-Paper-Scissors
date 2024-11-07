let playerScore = 0;
let computerScore = 0;
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

function getHumanChoice() {
  let result = null;
  let choice = prompt(
    `Enter your choice, "rock", "paper", or "scissors"`
  ).toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    result = choice;
  } else {
    console.log("Wrong slection not allowed in the game");
  }
  return result;
}
