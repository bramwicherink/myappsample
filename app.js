let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
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
            gewonnen(userChoice, computerChoice);
            break;

        case "schaarsteen":
        case "steenpapier":
        case "papierschaar":
            verloren(userChoice, computerChoice);
            break;

        case "steensteen":
        case "papierpapier":
        case "schaarschaar":
            gelijkspel(userChoice, computerChoice);
            break;
    }
}

function gewonnen(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord}  verslaat   ${computerChoice} ${smallCompWord}. Je hebt gewonnen!`;

    document.getElementById(userChoice).classList.add('green-glow');

}

setTimeout(function (userChoice) {
    document.getElementById(userChoice).classList.remove('green-glow')
},3000);

function verloren(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord}  verliest tegen   ${computerChoice} ${smallCompWord}. Je hebt verloren!`;
}

function gelijkspel(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord}  speelt gelijk tegen   ${computerChoice} ${smallCompWord}. Gelijkspel!`;
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



