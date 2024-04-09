let score= prompt("Enter your score:");
let grade;

if(score>=80 && score<=100){
   grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
 }
 else if(score>=60 && score<=69){
    grade="D";
 }
 else if(score>=50 && score<=59){
    grade="E";
 }
 else if(score>=0 && score<=49){
    grade="F";
 }
 else{
    alert("None of the above");
 }
 console.log(grade);