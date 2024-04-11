let n=prompt("Enter a number:")
let arr=[];
let sum=0;
let prod=1;
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let filtered=arr.reduce((acc,curr)=>{
    return acc+curr; 
});
 prod=arr.reduce((acc,curr)=>{
    return acc*curr; 
})

console.log(filtered);
console.log(prod);