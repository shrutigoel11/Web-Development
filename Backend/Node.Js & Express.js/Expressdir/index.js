const express=require("express"); //step 1: require
const app=express();

let port=3000; //step 2: port -->helps in sending request 

app.listen(port,()=>{                             // listen requests
console.log(`App is listening on port ${port}`)
});

// app.use((req,res)=>{                            //handling requests-->all routes same response
//     console.log("Request received");
//     res.send("This is a basic response");
// });

//handling different response for different path

app.get("/",(req,res)=>{
    res.send("You contacted root path");
})
// app.get("/search",(req,res)=>{
//     res.send("You contacted search path");
// });
// app.get("/help",(req,res)=>{
//     res.send("You contacted help path");
// });

//path parameters

// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     res.send(`You contacted ${username}`);
// })

//Query Strings
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Query not exisrs");
    }
    res.send("You contacted root path");
})
