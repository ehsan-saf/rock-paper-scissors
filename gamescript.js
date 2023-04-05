// A list of possible game options
const gameOptions = ['Rock', 'Paper', 'Scissors'];

// Create getComputerChoice function
function getComputerChoice(){

 // Randomly choose one of the options and store it in a variable
 let randomChoice = gameOptions[Math.floor(Math.random() * 3)];

 // Return the variable 
 return randomChoice;
}