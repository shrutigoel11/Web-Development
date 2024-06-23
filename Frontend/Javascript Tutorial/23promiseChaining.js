function async1(){
    return new Promise((resolve,reject)=>{
        {
            setTimeout(()=>{
                console.log("data 1");
                resolve("Success");
            },4000);}
    })
}
function async2(){
    return new Promise((resolve,reject)=>{
        {
            setTimeout(()=>{
                console.log("data 2");
                resolve("Success");
            },4000);}
    })
}
console.log("fetching data 1...");

//method 1 to write promise chain 

// async1().then(()=>{
//     console.log("fetching data 2...");
//     async2().then((res)=>{})
// });


//more precise way to write promise chain

async1().then(()=>{
    console.log("fetching data 2..");
    return async2();
}).then(()=>{});