let items1=['apple','mango'];
let items2=['avocado', 'banana'];

//CONCAT

let total=items1.concat(items2);
console.log(total);

//POP

let del=items1.pop();
console.log(items1);

//UNSHIFT

let un=items2.unshift('litchi');
console.log(items2);

//SHIFT 

let shft=items2.shift();
console.log(items2);

//SLICE

let items3=['rasberry', 'cherry'];
console.log(items3.slice(0,2));
console.log(items2.slice());

//SPLICE

console.log(items3.splice(0,1,'KIWI'));
console.log(items3);
console.log(items3.splice(1)); //IT WILL ACT AS SLICE AND REMOVE ALL ELEMENTS FROM 1 TO (SIZE-1) AND CHANGES ORIGNAL ARRAY.
console.log(items3.length);
