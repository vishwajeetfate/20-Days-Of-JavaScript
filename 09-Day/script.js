function playRPS(playerChoice) {
  // Array of possible computer choices
  const computerChoices = ["rock", "paper", "scissors"];
  
  // Generate a random choice for the computer
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // set the class of the player-hand element to match the playerChoice
  document.getElementById("player-hand").className = playerChoice;
  // set the class of the computer-hand element to match the computerChoice
  document.getElementById("computer-hand").className = computerChoice;
  
  // Determine the outcome of the game
  let result;
  if (playerChoice === computerChoice) {
    result = "Tie! Both players chose " + playerChoice + ".";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "You win! Rock beats scissors.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You win! Paper beats rock.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "You win! Scissors beats paper.";
  } else {
    result = "You lose! " + computerChoice + " beats " + playerChoice + ".";
  }

  // display the outcome
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
}
