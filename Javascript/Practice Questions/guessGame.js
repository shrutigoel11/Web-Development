let realnum=68;
let usernum=prompt("Guess a number:");

while(usernum!=realnum){  //use != not !== as prompt converts i/p in string so string compared with int value so we use single = it will compare value not datatype
    usernum=prompt(" Wrong answer! Guess another number:");
}
console.log("You gussed it right!");