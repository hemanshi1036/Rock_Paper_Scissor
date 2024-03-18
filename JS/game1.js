let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#userScore");
const comp_Score = document.querySelector("#computerScore");


choices.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoice = choise.getAttribute("id");
        playGame(userChoice);
    });
});
// this is trial commit
const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "GAME WAS DRAW, START AGAIN!!!";
    // msg.style.backgroundColor = "aqua";

}; 
const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        user_Score.innerText = userScore;
        console.log("You Win");
        msg.innerText = "YOU WIN!!!";
        // msg.style.backgroundColor = "red";
        body.style.backgroundColor = "red";
}
    else {
        computerScore++;
        // msg.style.backgroundColor = "green";
        comp_Score.innerText = computerScore;
        console.log("Comp win");
        msg.innerText = "COMP WIN!!!";
        
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