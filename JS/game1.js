let userScore = 0;
let computerScore = 0;


// const body = document.querySelectorAll(.body);
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
    msg.style.backgroundColor = "aqua";

}; 
// const no_of_moves = () => {

// }
const result = () =>{
    if(no_of_moves >= 20){
        userScore = 0;
        user_Score.innerText = userScore;
        computerScore = 0;
        comp_Score.innerText = computerScore;
    }

}
const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        user_Score.innerText = userScore;
        console.log("You Win");
        msg.innerText = "YOU WIN!!!";
         msg.style.backgroundColor = "red";
         no_of_moves++;
        // style.backgroundColor = "red";
}
    else {
        computerScore++;
        msg.style.backgroundColor = "green";
        comp_Score.innerText = computerScore;
        console.log("Comp win");
        msg.innerText = "COMP WIN!!!";
        no_of_moves++;
        
    }
};

choices.forEach((msg) => {
    msg.addEventListener("click", () => {
        const userChoice = msg.getAttribute("id");
        playGame(userScore = 0);
        playGame(computerScore = 0);
    });
});
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

