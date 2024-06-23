let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msgContainer");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;

const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetBtn=()=>{
    turnO=true;//INITIAL STAGE 
    enable();
    count=0;
    msgContainer.classList.add('hide');
}

//PLAY GAME

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){
    //PLAYER O
        box.innerText="O";
        turnO=false;
    }
    //PLAYER X
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let iswinner=checkWinner();
    if(count==9 && !iswinner){
        gameDraw();
    }
})
});



//DISABLE BOXES

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//ENABLE BOXES


const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}

//SHOW WINNER

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBox();
}

//CHECK WINNER

const checkWinner=()=>{
    for(pattern of win){
     let pos1=boxes[pattern[0]].innerText;
     let pos2=boxes[pattern[1]].innerText;
     let pos3=boxes[pattern[2]].innerText;
     if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            console.log("WINNER","Player",pos1);
            showWinner(pos1);
        }
     }
    }
}

//CHECK FOR DRAW

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBox();
  };

newgame.addEventListener("click",resetBtn);
reset.addEventListener("click",resetBtn);