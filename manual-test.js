let choices = ["rock", "paper", "scissors"]

var selections = {};

//COMPUTER'S CHOICE
function getComputerChoice() {
    let computerChoice = '';
    num = 2
    selections.computerChoice = choices[num]
    console.log(`computer's num: ` + num);
    console.log(`computer's choice: ` + selections.computerChoice);
}

//HUMAN'S CHOICE
function getHumanChoice() {
    let humanChoice = '';
    num = 0 
    selections.humanChoice = choices[num]
    console.log(`human's num: ` + num);
    console.log(`human's choice: ` + selections.humanChoice);
}

function playRound(humanChoice, computerChoice) {
    // var totalScore = computerScore + humanScore
    var computerScore = 0;
    var humanScore = 0;

    for (let totalScore = 0; totalScore < 5; totalScore = computerScore + humanScore) {
        if (totalScore > 0) {
            let round = 0;
            round+=1;
            console.log(`ROUND ` + round);
        }

        //RUN CHOICES
        getComputerChoice();
        getHumanChoice();

        //COMPUTER'S SCORING
        if ((selections.computerChoice == "rock") && (selections.humanChoice == "scissors")) {
            computerScore+=1;
        } else if ((selections.computerChoice == "paper") && (selections.humanChoice == "rock")) {
            computerScore+=1;
        } else if ((selections.computerChoice == "scissors") && (selections.humanChoice == "paper")) {
            computerScore+=1;
        }
        console.log(`c's choice: ` + selections.computerChoice);
        console.log(`computer score: ` + computerScore);

        //HUMAN'S SCORING
        if ((selections.humanChoice == "rock") && (selections.computerChoice == "scissors")) {
            humanScore+=1; 
        } else if ((selections.humanChoice == "paper") && (selections.computerChoice == "rock")) {
            humanScore+=1;
        } else if ((selections.humanChoice == "scissors") && (selections.computerChoice == "paper")) {
            humanScore+=1;
        }
        console.log(`h's choice: ` + selections.humanChoice);
        console.log(`human score: ` + humanScore);
    }
}
playRound();


// var totalScore = computerScore + humanScore
// var computerScore = 0
// function getComputerScore() {
//     for (totalScore = 0; totalScore < 5; totalScore++) {
//         if ((computerChoice == "rock") && (humanChoice == "scissors")) {
//             computerScore+=1;
//         } else if ((computerChoice == "paper") && (humanChoice == "rock")) {
//             computerScore+=1;
//         } else if ((computerChoice == "scissors") && (humanChoice == "paper")) {
//             computerScore+=1;
//         }
//     }
//     console.log(`c's choice: ` + computerChoice);
//     console.log(`computer score: ` + computerScore);
// }
// getComputerScore();

// var humanScore = 0
// function getHumanScore() {
//     for (totalScore = 0; totalScore < 5; totalScore++) {
//         if ((humanChoice == "rock") && (computerChoice == "scissors")) {
//             humanScore+=1; 
//         } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
//             humanScore+=1;
//         } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
//             humanScore+=1;
//         }
//     }
//     console.log(`h's choice: ` + humanChoice);
//     console.log(`human score: ` + humanScore);
// }
// getHumanScore();
