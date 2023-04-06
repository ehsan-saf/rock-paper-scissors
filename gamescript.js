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
            winStatus = -1;
            break;

            case 'paper':
            winStatus = 1;
            break;
        }
}

// print a message for one round
printMessage(winStatus, playerChoice, computerSelection);

// return a win status
return winStatus;
}

// Create a function that prints proper messages
function printMessage(status, playerChoice, computerChoice) {
    
    let message = '';

    if(status === 1) {
        message = `You Won! ${playerChoice} beats ${computerChoice}`;
      }
      else if(status === -1) {
        message = `You lost! ${computerChoice} beats ${playerChoice}`;
      }
      else{
          message = `Even ! both choices are ${playerChoice}`;
      }
    
      console.log(message);
}


//Create a function called game that plays the game 5 times 
function game(){

// variable for storing computer score
let computerScore = 0;

// variable for storing player score
let playerScore = 0;

// variable for storing computer choice
let comChoice = '';

// variable for storing player choice
let playerChoice = '';

// variable for storing each round result
let roundResult = 0;

// for loops that runs 5 times
for (let i = 0; i < 5; i++) {

    // get computer choice
    comChoice = getComputerChoice();

   // get user input
   playerChoice = prompt('Please type your choice ( rock , paper , scissors )'); 

   // play the round
   roundResult = playRound(playerChoice, comChoice);

   // decide which side to give score 
   // if the return value is 1, add 1 score to the player
   // else if it's -1, add 1 score to the computer
   if(roundResult === 1) {
    playerScore++;
   }
   else if(roundResult === -1) {
    computerScore++;
   }  
}
    finalWinner(playerScore, computerScore);
}

// create a function for finalWinner with two parameters
function finalWinner(playerScore, computerScore) {
 // decide which side is the winner 
    // or if it's a tie and show it in the console
    if(playerScore > computerScore) {
        console.log(`You won the game by a 
        score of ${playerScore} to ${computerScore}`);
    }
    else if(computerScore > playerScore) {
        console.log(`You lost the game by a
         score of ${playerScore} to ${computerScore}`);
    }
    else {
        console.log(`It's a tie,
         your score is ${playerScore} and 
         the computer score is ${computerScore}`);
    }
}