//FOR LOOP

for(let i=1; i<=5; i++){
    console.log("Javascript course");
}

// CACLULATE SUM OF FIRST 10 NUMBERS:

let sum=0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log(sum);

//Print 1 to n
for(let i=1; i<=5; i++){
    console.log(i);
}

//While LOOP
let j=1;
while( j<=5){
    console.log(j);
    j++;
}

//DO WHILE
let m=20;
do{
    console.log(m)
}while(m<=10);

//FOR-OF

let str="Shruti";
let size=0;
for(let a of str){
    console.log(a);
    size+=1;
}
console.log("size of string:",size);

//FOR-IN

let student ={
    id:67,
    age:20,
    name:"Parag",
};
for(let val in student){
    console.log(val ,"value:",student[val]);
}