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
    const choices = ['steen', 'papier', 'schaar'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "steenschaar":
        case "papiersteen":
        case "schaarpapier":
            console.log("Je hebt gewonnen!");
            break;

        case "schaarsteen":
        case "steenpapier":
        case "papierschaar":
            console.log("Je hebt helaas verloren!");
            break;

        case "steensteen":
        case "papierpapier":
        case "schaarschaar":
            console.log("Je hebt gelijkgespeeld met de computer!");
            break;
    }
}

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
main();



