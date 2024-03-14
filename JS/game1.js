let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choise");
const start = document.querySelectorAll(".start");
choices.forEach((choise) => {
    choise.addEventListener("click", () =>{
        const userChoice = choise.getAttribute("id");
        playGame(userChoice);
    });
});
// this is trial commit
const drawGame = () => {
    console.log("Game Was Draw");
    start.innerText = "GAME WAS DRAW, START AGAIN!!!";
}; 
const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        console.log("You Win");
        start.innerText = "YOU WIN!!!";
    }
    else {
        computerScore++;
        console.log("Comp win");
        start.innerText = "COMP WIN!!!";
    }
};
function genComChoice() {
    const option = ["ROCK", "PAPER", "SCISSOR"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];
}

const playGame = (userChoice) => {
    console.log("user Choice ", userChoice);

    const compChoice = genComChoice();
    console.log("comp Choice ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "SCISSOR"){
            userwin = compChoice === "PAPER" ? true : false;
        }
        else if(userChoice === "PAPER"){
                userwin = compChoice === "SCISSOR" ? false : true;
        }
        else{
                userwin = compChoice === "PAPER" ? false : true;
        }
        showWinner(userwin);
    }
};