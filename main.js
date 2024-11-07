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
