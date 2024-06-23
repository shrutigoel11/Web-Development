const express=require("express");
const app=express();

let port=8080;

app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// get and post request
app.get("/register",(req,res)=>{
        //query string me return data
        let {user,password}=req.query;
        res.send(`Welcome to get request ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`Welcome to get request ${user}`);
    res.send("Post Request");
});

app.use((req,res)=>{
    console.log("Received");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});