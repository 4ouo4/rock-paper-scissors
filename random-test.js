let choices = ["rock", "paper", "scissors"]

var selections = {};

//COMPUTER'S CHOICE
function getComputerChoice() {
    let computerChoice = '';
    num = Math.floor(Math.random() * 3)
    selections.computerChoice = choices[num]
    console.log(`computer's num: ` + num);
    console.log(`computer's choice: ` + selections.computerChoice);
}

//HUMAN'S CHOICE
function getHumanChoice() {
    let humanChoice = '';
    num = Math.floor(Math.random() * 3)
    selections.humanChoice = choices[num]
    console.log(`human's num: ` + num);
    console.log(`human's choice: ` + selections.humanChoice);
}

function playRound(humanChoice, computerChoice) {
    // var totalScore = computerScore + humanScore
    var computerScore = 0;
    var humanScore = 0;

    for (let totalScore = 0; totalScore < 5; totalScore = computerScore + humanScore) {

        //RUN CHOICES
        getComputerChoice();
        getHumanChoice();

        //COMPUTER'S SCORING
        if ((selections.computerChoice == "rock") && (selections.humanChoice == "scissors")) {
            computerScore+=1;
            console.log(`computer wins! >:D ${selections.computerChoice} beats ${selections.humanChoice}!`);
        } else if ((selections.computerChoice == "paper") && (selections.humanChoice == "rock")) {
            computerScore+=1;
            console.log(`computer wins! >:D ${selections.computerChoice} beats ${selections.humanChoice}!`);
        } else if ((selections.computerChoice == "scissors") && (selections.humanChoice == "paper")) {
            computerScore+=1;
            console.log(`computer wins! >:D ${selections.computerChoice} beats ${selections.humanChoice}!`);
        }
        console.log(`c's choice: ` + selections.computerChoice);
        console.log(`computer score: ` + computerScore);

        //HUMAN'S SCORING
        if ((selections.humanChoice == "rock") && (selections.computerChoice == "scissors")) {
            humanScore+=1; 
            console.log(`you win!~ ^u^ ${selections.humanChoice} beats ${selections.computerChoice}!`);
        } else if ((selections.humanChoice == "paper") && (selections.computerChoice == "rock")) {
            humanScore+=1;
            console.log(`you win!~ ^u^ ${selections.humanChoice} beats ${selections.computerChoice}!`);
        } else if ((selections.humanChoice == "scissors") && (selections.computerChoice == "paper")) {
            humanScore+=1;
            console.log(`you win!~ ^u^ ${selections.humanChoice} beats ${selections.computerChoice}!`);
        } else {
            console.log(`oooh~ a draw~ QwQ`);
        }
        console.log(`h's choice: ` + selections.humanChoice);
        console.log(`human score: ` + humanScore);
    }
}
playRound();