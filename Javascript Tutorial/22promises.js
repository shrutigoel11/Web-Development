// let promise=new Promise((resolve,reject)=>{

// });


function getdata(dataID,nextgetdata){
    return new Promise((resolve,reject)=>{
        {
            setTimeout(()=>{
                console.log("data",dataID);
                resolve("success");//when our work is done mark resolve()
                //reject("error";)
                if(nextgetdata){
                    nextgetdata();
                }
            },4000);}
    })
}
let result=getdata(115);
result.then((res)=>{
console.log("Fulfilled",res);
});
// result.catch((err)=>{
// console.log("Rejected",err);
// });

// let result=getdata(15); on console write result -->promise state pending & after printing write result now -->promise state will be fulfilled
//.catch in fulfilled & .then in reject