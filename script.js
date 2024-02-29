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




function playRounds() {

    function getUserChoice() {
        let choice = prompt("Do you select rock, paper, or scissors?").toLowerCase(); 
        console.log(choice);
    
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
    
        else {
            alert("That's not a choice. Please select rock, paper, or scissors!");
            return getUserChoice();
        }
    }
    
    
    const userChoice = getUserChoice();
    console.log(`The User selects ${userChoice}.`);
    
    // The user has selected. Their selection is stored in the variable userChoice.
    
    
    
    const gameChoices = ["rock", "paper", "scissors"];
    
    function getComputerChoice(gameChoices) {
        const randomChoice = Math.floor(Math.random() * gameChoices.length);
    
    // gameChoices.length method displays the total number of words in the array; Math.random chooses a number greater than or equal to 0, but less than 1; Math.floor rounds a number down to the nearest integer.
    
        console.log(`There are ${gameChoices.length} available choices.`);
        console.log(randomChoice);
    
        return gameChoices[randomChoice];
    
        // let getComputerChoiceResult = gameChoices[randomChoice];
        // return getComputerChoiceResult;    ----> Do not store the result in a variable that can't be accessed outside the function.
    }
    
    const computerChoice = getComputerChoice(gameChoices); // Store the function result here in global scope.
    console.log(computerChoice);
    
    console.log(`The Computer selects ${computerChoice}.`)
    
    // The computer has selected. Its selection is stored in the variable named computerChoice.
    
    
    
    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log("Draw");
        } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
            console.log("You Win");
        } else {
            console.log("You Lose");
        }
    }
    
    playRound(userChoice, computerChoice);

}


function playGame(numberOfRounds) {
  if (numberOfRounds <= 0) {
    return;
  }

  else {
    playRounds();
    playGame(numberOfRounds -1);
  }
}

playGame(5); // Calling playGame function, replacing numberOfRounds parameter with 5.