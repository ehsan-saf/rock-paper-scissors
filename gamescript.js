// A list of possible game options
const gameOptions = ['rock', 'paper', 'scissors'];

// Create getComputerChoice function
function getComputerChoice(){

 // Randomly choose one of the options and store it in a variable
 let randomChoice = gameOptions[Math.floor(Math.random() * 3)];

 // Return the variable 
 return randomChoice;
}

// Create playRound function with two parameters
function playRound(playerSelection, computerSelection) {

// convert player choice to lowercase and store it in a variable
let playerChoice = playerSelection.toLowerCase();

// Create a variable that saves game result
let winStatus = 0;

// create a switch statement to evaluate the choice against computer 
switch(playerChoice) {
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
            winStatus: -1;
            break;

            case 'paper':
            winStatus: 1;
            break;
        }
}

// return a proper message
return Winstatus;
}

// Create a function that prints proper messages
function printMessage(status, playerChoice, computerChoice) {
    if(status === 1) {
        message = `You Won! ${playerChoice} beats ${computerChoice}`;
      }
      else if(status === -1) {
        message = `You lost! ${computerChoice} beats ${playerChoice}`;
      }
      else{
          message = `Even ! both choices are ${playerChoice}`;
      }

}