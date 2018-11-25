const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const steen_div = document.getElementById("steen");
const papier_div = document.getElementById("papier");
const schaar_div = document.getElementById("schaar");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("De keuze van jou is: " + userChoice);
    console.log("De keuze van de computer is: " + computerChoice);
}

game(main());
function main() {
    steen_div.addEventListener('click', function() {
        game("steen");
    });

    papier_div.addEventListener('click', function() {
        game("papier");
    });

    schaar_div.addEventListener('click', function() {
        game("schaar");
    });
}



