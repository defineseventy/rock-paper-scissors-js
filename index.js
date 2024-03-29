window.onload = beginningAnimation();
let compSelect;
let playSelect;
let compScore = 0;
let playScore = 0;

let button = document.querySelectorAll(".button");
const body = document.querySelectorAll("body");
const main = document.querySelectorAll("main");
let i = 0;
let txt = 'Made using Javascript for a TOP project \n Are you brave enough to challenge the Almighty Computer? \n If you dare to take on this challenge....\n The first to reach to a score of 5, be it Human or Computer.... \n They shall gain a fabulous prize!'
let speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("game-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

/*Set game array here */
const gameArray = ['Rock', 'Paper', 'Scissors'];
function getPlayerChoice(){
  /* Use array and set it to random choice */
  
  return gameArray[~~(Math.random()*gameArray.length)]
}


