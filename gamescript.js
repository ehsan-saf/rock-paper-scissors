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
// convert player choice to lowercase and store it in a variable
// Create a variable that saves game result
// create a switch statement to evaluate the choice against computer 
// Check if the player has won, lost or is even
// return a proper message
