function async1(){
    return new Promise((resolve,reject)=>{
        {
            setTimeout(()=>{
                console.log("data 1",);
                resolve("Success");
            },4000);}
    })
}

// async function getInfo(){
//     await async1();
// };

//IIFE

(async function(){
    await async1();
})();