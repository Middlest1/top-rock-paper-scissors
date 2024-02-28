/* Pseudocode Start */
    // initialize values of rock, paper, and scissors and store in variable -- completed
    // prompt the user to select rock, paper, or scissors -- completed
    // check if what the user inputted is acceptable
    // if not acceptable, ask the user for new input
    // accept only text form of those 3 words but do not make input case sensitive
    // randomly select rock, paper, or scissors for the computer 'player' -- completed
    // print to console the user's selection and the computer's selection
    // compare user selection to computer selection
    // rock beats scissors
    // paper beats rock
    // scissors beats paper
    // if user input === computer input it is a draw
    // output to the user, you won, you lost, or draw
/* Pseudocode End */



let userChoice = prompt("Do you select rock, paper, or scissors?") 

console.log(`The User selects ${userChoice}.`)

// The user has selected. Their selection is stored in the variable userChoice



const gameChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(gameChoices) {
    const randomChoice = Math.floor(Math.random() * gameChoices.length);

// gameChoices.length method displays the total number of words in the array; Math.random chooses a number greater than or equal to 0, but less than 1; Math.floor rounds a number down to the nearest integer.

    console.log(`There are ${gameChoices.length} available choices.`);
    console.log(randomChoice);
    let computerChoice = gameChoices[randomChoice];
    return computerChoice;
}

console.log(`The Computer selects ${getComputerChoice(gameChoices)}.`)

// The computer has selected. Its selection is stored in the variable named computerChoice.








// function validateUserInput(userSelection) {
//     if (userSelection !== "rock" && userSelection !== "paper" && userSelection !== "scissors") {
//         return false; // Indicate invalid input
//     }
//     return true; // Indicate valid input
// }
