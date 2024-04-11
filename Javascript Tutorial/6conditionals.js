// CONDITIONAL STATEMENTS

let mode="dark";
let color;
if(mode==="dark"){
    color='black';
}
else if(mode==="light"){
    color='white';
}
else{
    color='none';
}
console.log(color);

const expr="mango";
switch(expr){
case "mango":console.log("Favorite");
             break;
case "avocado":console.log(" Not Favorite");
             break;
default:console.log("Error");
}