let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result> p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}


function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " " + smallUserWord + " " + " beats " + convertToWord(computerChoice) + " " + smallCompWord + " " + " You Win !!!!";
    userChoice_div.classList.add("green-glow");
    setTimeout(function () { userChoice_div.classList.remove("green-glow") }, 1000);
}




function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + " " + smallUserWord + " " + " loses to " + convertToWord(computerChoice) + " " + smallCompWord + " " + " You Lost !!!!";
}
function draw(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + " " + smallUserWord + " " + " equals " + convertToWord(computerChoice) + " " + smallCompWord + " " + " It's a Draw !!!!";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            //console.log("User Wins !!!");
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            //console.log("Computer Wins !!");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            //console.log("It's a draw !!");
            draw(userChoice, computerChoice);
            break;
    }

    //console.log("user choice =>" + userChoice);
    //console.log("computer choice =>" + computerChoice);
}


main();
function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener("click", function () {
        game("p")
    })

    scissors_div.addEventListener("click", function () {
        game("s")
    })
}



