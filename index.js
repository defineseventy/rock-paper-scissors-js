///testing 
console.log("Hello World")

//creating a game
const game = () => {
  let humanScore = 0;
  let computerScore = 0;
  let score = 0;

  //play a game
  const playGame = () => {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    const humanOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ["Rock", "Paper", "Scissors"];

    humanOptions.forEach(choice => {
    choice.addEventListener('click', function() {
        const choiceNo = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[choiceNo]
        
        //check who wins after playing a round
        playRound(this.innerText, computerChoice)

        //if score reaches 5, then reset the game
        if (score == 5){
          resetGame(humanOptions, score)
        }
      }
    )
    })
  }
  //to play a round
  const playRound = (human, computer) => {
    const result = document.getElementById("results-msg");
    const humanScoreBoard = document.querySelector(".player-score");
    const comScoreBoard = document.querySelector(".computer-score");
  
    //so that both are case insensitive
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer){
      result.textContent = "t's a tie :|";
    }
  else if (player == "rock"){
    if (computer == "scissors"){
      result.textContent = `${player} beats ${computer}`
      humanScore++
      humanScoreBoard.textContent = humanScore;
    }
    else {
      result.textContent = `${computer} beats ${player}`;
      computerScore++;
      comScoreBoard.textContent = computerScore;
    }
  } else if (player == "scissors") {
    if (computer == "paper"){
      result.textContent = `${player} beats ${computer}`
      humanScore++
      humanScoreBoard.textContent = humanScore;
    }
    else {
      result.textContent = `${computer} beats ${player}`;
      computerScore++;
      comScoreBoard.textContent = computerScore;
    }
  } else if (player == "paper"){
    if (computer == "rock"){
      result.textContent = `${player} beats ${computer}`
      humanScore++
      humanScoreBoard.textContent = humanScore;
    }
    else {
      result.textContent = `${computer} beats ${player}`;
      computerScore++;
      comScoreBoard.textContent = computerScore;
    }
  }
}
  //to reset the game
  const resetGame = (humanOptions, score) => {
    const chooseItem = document.querySelector(".item");
    const result = document.getElementById("results-msg");
    const resetGameBtn = document.getElementById("reset-game");

    humanOptions.forEach(choice => {
      choice.style.display = "none";
    })

    chooseItem.innerText = "Game over :)";

    switch (score <= 5) {
      case (humanScore > computerScore):
        result.innerText = "You won the game ^_^";
        break;
      case (humanScore < computerScore):
        result.innerText = "You lost :(";
        break;
      default:
        result.innerText = "It's a tie.";
        break;
    }
  resetGameBtn.innerText = "Reset Game?";
  resetGameBtn.style.diplay = "flex";
  resetGameBtn.addEventListener("click", () => {
    window.location.reload();
  })
    playGame();
  }

}

game();