//initialize buttons 
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const resultDisplay = document.querySelector("result")
//initializing scores
let humanScore = 0;
let comScore = 0;
let score = 0;
const totalScore = 5;
const scoreDisplay = document.getElementById("scpre");
const humanScoreDisplay = document.querySelector("player-score");
const computerScoreDisplay = document.querySelector("computer-score");

//add Event Listeners
rockBtn.addEventListener("click", () => {
  playRound('rock')
})
paperBtn.addEventListener("click", () => {
  playRound('paper')
})
scissorBtn.addEventListener("click", () => {
  playRound('scissors')
})

//creating a playRound function
function playRound(humanChoice) {
  const choice = ["Rock", "Paper", "Scissors"];
  const computerChoice = choice[Math.floor(Math.random() * choice.length)]

  //compare choice made by human vs computer
  if (humanChoice === computerChoice) {
    resultDisplay.textContent = "It's a tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ){
    resultDisplay.textContent = "Human wins ^_^"
    humanScore++
  } else {
    resultDisplay.textContent = "You lose. :("
    comScore++
  }
  //calculate the score
  if (score < totalScore){
    scoreDisplay.textContent = `Score: ${score}`;
    score++;
  }
  else {
    endsGame(); //ends the game
  }

  //update the text of the human abd computer scores
  humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${comScore}`;
}

//reset game
function endsGame() {
  const rpsContainer = document.getElementById("rps-game")
  //hide the choices to clear game area
  const choice = document.getElementById("options");
  const scoreRes = document.getElementById("results");
  const gameInfo = document.getElementById('game-info');
  if (choice) {
    choice.style.display = "none"
  } if (scoreRes) {
    scoreRes.style.display = "none"
  } if (gameInfo) {
    gameInfo.style.display = 'none'
  }

const gameConclusion = document.createElement("div");
gameConclusion.setAttribute('id', 'game-conclusion')
  let finalMsg = "";

  if (humanScore > comScore){
    finalMsg = "Congrats, the human won ^_^"
  } else if (humanScore < comScore) {
    finalMsg = "Try better next timw, the AI won"
  } else {
    finalMsg = "This ends in a draw!"
  }
  gameConclusion.innerHTML = `
  <h2>Game over</h2>
  <p>${finalMsg}</p>
  <p>Final Score - You: ${humanScore} | Computer: ${comScore}</p>
  <button id ="reset-btn">Reset Game?</button>`;

  //add gameConclusion to rpsConatainer
  rpsContainer.appendChild(gameConclusion);
  //enable the reset button
  document.getElementById("reset-btn").addEventListener("click", resetGame);
}

//create a reset game function
function resetGame() {
  humanScore = 0;
  comScore = 0;
  humanScoreDisplay.textContent = "Player Score: 0";
  computerScoreDisplay.textContent = `Computer Score: ${comScore}`;
  scoreDisplay.textContent = "Score: 0"

  const choice = document.getElementById("options");
  const scoreRes = document.getElementById("results")
  const gameInfo = document.getElementById('game-info');
  if (choice) {
    choice.style.display = ""
  } if (scoreRes) {
    scoreRes.style.display = ""
  } if (gameInfo) {
    gameInfo.style.display = ""
  }

  const gameConclusion = document.getElementById("game-conclusion");
  if (gameConclusion){
    gameConclusion.remove();
  }

  document.getElementById("options").style.display = "";
  resultDisplay.textContent = "Choose your item!"
}