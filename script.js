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





// function getUserChoice() {
//     let choice = prompt("Do you select rock, paper, or scissors?").toLowerCase();
//     console.log(choice);

//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//         return choice;
//     }

//     else {
//         alert("That's not a choice. Please select rock, paper, or scissors!");
//         return getUserChoice();
//     }
// }


// const userChoice = getUserChoice();
// console.log(`The User selects ${userChoice}.`);

// The user has selected. Their selection is stored in the variable userChoice.



const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice(gameChoices) {
    let randomChoice = Math.floor(Math.random() * gameChoices.length);

    // gameChoices.length method displays the total number of words in the array; Math.random chooses a number greater than or equal to 0, but less than 1; Math.floor rounds a number down to the nearest integer.

    // console.log(`There are ${gameChoices.length} available choices.`);
    // console.log(randomChoice);

    return gameChoices[randomChoice];

    // let getComputerChoiceResult = gameChoices[randomChoice];
    // return getComputerChoiceResult;    ----> Do not store the result in a variable that can't be accessed outside the function.
}

// console.log(getComputerChoice(gameChoices));
// let computerChoice = getComputerChoice(gameChoices); // Store the function result here in global scope.
// console.log(computerChoice);

// console.log(`The Computer selects ${computerChoice}.`)

// The computer has selected. Its selection is stored in the variable named computerChoice.
let wins = 0;
let losses = 0;


function resetGame() {
    let outputDiv = document.querySelector('#roundResults');
    outputDiv.innerHTML = '';
    wins = 0;
    losses = 0;
}

function playRound(userChoice, getComputerChoice) {
    let computerChoice = getComputerChoice;
    let userSelected = userChoice;

    let userSelectedStatement = document.createElement('p');
    userSelectedStatement.textContent = `The user selects ${userSelected}.`;
    let outputDiv = document.querySelector('#roundResults');
    outputDiv.appendChild(userSelectedStatement);

    let computerSelected = document.createElement('p');
    computerSelected.textContent = `The computer selects ${computerChoice}.`;
    outputDiv.appendChild(computerSelected);

    let resultStatement = document.createElement('p');

    if (userChoice === computerChoice) {
        resultStatement.textContent = `Draw.`;
        outputDiv.appendChild(resultStatement);
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        resultStatement.textContent = `You win.`;
        outputDiv.appendChild(resultStatement);
        wins += 1;
        console.log(`You won ${wins} times.`);
    } else {
        resultStatement.textContent = `You lose.`;
        outputDiv.appendChild(resultStatement);
        losses += 1;
        console.log(losses);
    }


    if (wins >= 5) {
        let winGameStatement = document.createElement('p');
        winGameStatement.textContent = `You've won the game!!!!!!`;
        outputDiv.appendChild(winGameStatement);
        resetGame();
    }
}


let threeButtons = document.querySelector('#allButtons')

threeButtons.addEventListener('click', function (buttonSelected) {
    let target = buttonSelected.target;
    let userChoice = target.id;

    switch (target.id) {
        case 'rockButton':
            console.log('Rock button was clicked');
            userChoice = "rock";
            break;
        case 'paperButton':
            console.log('Paper button was clicked');
            userChoice = "paper";
            break;
        case 'scissorsButton':
            console.log('Scissors button was clicked');
            userChoice = "scissors";
            break;
    }

    playRound(userChoice, getComputerChoice(gameChoices));
});








// let scissorsBtn = document.querySelector('#scissorsButton');
// let rockBtn = document.querySelector('#rockButton');
// let paperBtn = document.querySelector('#paperButton');

// console.log(scissorsBtn);

// scissorsBtn.addEventListener('click', function (scissorClick) {
//     alert(scissorClick.type);
// });


// function playGame(numberOfRounds) {
//     if (numberOfRounds <= 0) {
//         return;
//     }

//     else {
//         playRounds();
//         playGame(numberOfRounds - 1);
//     }
// }

// playGame(1); // Calling playGame function, replacing numberOfRounds parameter with 5.