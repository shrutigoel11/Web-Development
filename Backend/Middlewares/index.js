const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    // res.send("Access Denied");
    throw new ExpressError(401,"Access Denied");
}

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})
      
app.get("/",(req,res)=>{
    res.send("Hi i am root");
})

// app.get("/err",(req,res)=>{
//     abcd=abcd;
// })
app.use((err,req,res,next)=>{
    // console.log("error 1");
    // next(err);
    res.send(err);
})
// app.use((err,req,res,next)=>{
//     console.log("error 2");
//     next(err);
// })

app.listen("8080",()=>{
    console.log("Listening on port 8080");
})