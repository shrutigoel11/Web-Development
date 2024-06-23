let student_marks=[99,98,100,99];
console.log(student_marks);
console.log(student_marks.length);
console.log(student_marks[3]);
student_marks[0]=100;
console.log(student_marks[0]);

//LOOPING OVER AN ARRAY

for(let i=0; i< 4; i++){
    console.log("value at index " ,i,"is:", student_marks[i]);
}

//FOR - OF LOOP
let sum= 0;
for(let i in student_marks){
sum += student_marks[i];
console.log("Sum of array: ",sum);
}
console.log("Sum of array: ",sum);

//upper and lower cases
let city=["pune" ,"Modinagar"];

for(let c of city)
{
    console.log(c.toUpperCase());
    console.log(c.toLowerCase());
}
