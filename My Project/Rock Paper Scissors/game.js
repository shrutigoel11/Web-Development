let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScoreText=document.querySelector(".usersc");
let computerScoreText=document.querySelector(".compsc");


//User Choice
for (let choice of choices) {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
}

//Computer Choice

const playgame = (userchoice) => {
//   console.log("user choice:", userchoice);

  //Generate computer choice
  const compchoice = genCompChoice();
//   console.log("computer choice:", compchoice);

  //Draw Game
  if (userchoice === compchoice) {
    //or console.log("Game was Draw")
    gameDraw();
  } 

  else {
    let userwin = true;
    if (userchoice === "rock") {
      //comp=paper/scissors
      userwin = compchoice === "paper" ? false : true;
      // userwin=compchoice==="scissors"?true:false;
    } else if (userchoice === "paper") {
      //comp=scissors/rock
      userwin = compchoice === "scissors" ? false : true;
      // userwin=compchoice==="rock"?true:false;
    } else {
      //comp=rock/paper
      userwin = compchoice === "paper" ? true : false;
      //  userwin=compchoice==="rock"?false:true  ;
    }
    //Now show Winner
    showWinner(userwin,userchoice,compchoice);
  }
};

//Generate Computer Choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

//Draw
const gameDraw = () => {
//   console.log("Game was Draw");
  msg.innerText="The game is Draw!";
  msg.style.backgroundColor="orange";
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScoreText.innerText=userScore;
// console.log("You've Won");
msg.innerText=`Congractulations!You've Won (Your ${userchoice} beats ${compchoice})`;
msg.style.backgroundColor="green";
    }
else{
    computerScore++;
    computerScoreText.innerText=computerScore;
    // console.log("You've Lost");
    msg.innerText=`Oops!You've Lost  (${compchoice} beats your ${userchoice})`;
    msg.style.backgroundColor="red";
}
}
