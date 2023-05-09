// A list of possible game options
const gameOptions = ['rock', 'paper', 'scissors'];

// Create getComputerChoice function
function getComputerChoice(){

 // Randomly choose one of the options and store it in a variable
 let randomChoice = gameOptions[Math.floor(Math.random() * 3)];

 // Return the variable 
 return randomChoice;
}

let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
let computerBtn;

// Create playRound function with two parameters
function playRound(playerSelection) {

   if(computerBtn !== undefined)
      computerBtn.style.backgroundColor = "#f2f7f3";

// A variable to hold the computer's choice
let computerSelection = getComputerChoice();
computerButtons.forEach(btn => {
   if(btn.getAttribute("value") === computerSelection){
        btn.style.backgroundColor = "#2596be";
        computerBtn = btn;
   }
});

// Create a variable that saves game result
let winStatus = 0;

// create a switch statement to evaluate the choice against computer 
switch(playerSelection) {
    case 'rock':
        switch(computerSelection){
            case 'paper': 
            winStatus = -1;
            break;

            case 'scissors':
            winStatus = 1;
            break;
        }
        break;

    case 'paper':
        switch(computerSelection){
            case 'rock':
            winStatus = 1;
            break;

            case 'scissors':
            winStatus = -1;
            break;
        }
        break;

    case 'scissors':
        switch(computerSelection) {
            case 'rock':
            winStatus = -1;
            break;

            case 'paper':
            winStatus = 1;
            break;
        }

}

// print a message for one round
printMessage(winStatus, playerSelection, computerSelection);

if(roundNumber !== 5){
    if(winStatus === 1) {
        playerScore++;
    }
    else if(winStatus === -1){
        computerScore++;
    }
  roundNumber++;
}
else{
    finalWinner(playerScore, computerScore);
}

}


// Create a function that prints proper messages
function printMessage(status, playerSelection, computerChoice) {
    
    let message = '';

    if(status === 1) {
        message = `You Won! ${playerSelection} beats ${computerChoice}`;
      }
      else if(status === -1) {
        message = `You lost! ${computerChoice} beats ${playerSelection}`;
      }
      else{
          message = `Even ! both choices are ${playerSelection}`;
      }
    
      const result = document.querySelector(".result");
      result.textContent = message;
}

// create a function for finalWinner
function finalWinner(playerScore, computerScore) {
 // decide which side is the final winner 
    // or if it's a tie and show it in div
    let message = "";

    if(playerScore > computerScore) {
        message = `You won the game by a 
        score of ${playerScore} to ${computerScore}`;
        body.style.backgroundColor = "#b4f3ca";
    }
    else if(computerScore > playerScore) {
        message = `You lost the game by a
        score of ${playerScore} to ${computerScore}`;
        body.style.backgroundColor = "#df6d6d";
    }
    else {
         message = `It's a tie,
         your score is ${playerScore} and 
         the computer score is ${computerScore}`;
    }

    result.textContent = message;

    optionButtons.forEach(btn => btn.style.scale = 1);
    optionButtons.forEach(btn => btn.disabled = true);
}

function resetGame() {

    computerScore = 0;
    playerScore = 0;
    roundNumber = 0;

    optionButtons.forEach(btn => btn.disabled = false);

    if(computerBtn !== undefined)
      computerBtn.style.backgroundColor = "#f2f7f3";

    resetBodyColor();

    result.textContent = "";
}

function resetBodyColor(){
    body.style.backgroundColor = "#dfdfdf"
}

const body = document.body;
const optionButtons = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const resetButton = document.querySelector(".resetButton");
const computerButtons = document.querySelectorAll("#computer")

optionButtons.forEach(btn =>
     btn.addEventListener("click", event => {
        playRound(event.target.value);
     }));
    
optionButtons.forEach(btn => 
    btn.addEventListener("mouseover", event => {
    event.target.style.scale = 1.2;
}));

optionButtons.forEach(btn => 
    btn.addEventListener("mouseleave", event => {
    event.target.style.scale = 1;
}));


resetButton.addEventListener("click", resetGame);