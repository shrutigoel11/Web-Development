let array=[250,645,300,900,50];
let offer;
let i=0;
for(let val of array){
    console.log(`value at index ${i} is ${array[i]}`);
offer=array[i]/10;
array[i]-=offer;
console.log(`value after offer is ${array[i]}`);
i++;
}