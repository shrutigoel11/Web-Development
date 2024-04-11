let arr=[1,2,3,4,5,6,7,,8,9,10];

let filtered=arr.reduce((acc,curr)=>{
    return acc>curr?acc:curr; 
})
console.log(filtered);