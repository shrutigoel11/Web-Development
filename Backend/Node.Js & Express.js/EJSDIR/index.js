const express=require("express");
const path=require("path");
const app=express();

const port=8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine","ejs"); // to set template engine
app.set("views",path.join(__dirname,"views"));  // use view from parent directory


app.get("/",(req,res)=>{
    res.render("home.ejs");   // render respone in html cum js file-->ejs
});
app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal:num});   // render respone in html cum js file-->ejs
});
// app.get("/ig/:username",(req,res)=>{
//     const followers=["shruti","shradha"];
//     let {username}=req.params;
//     res.render("instagram.ejs",{followers,username});
// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const followers=["shruti","shradha"];
    const instaData=require("./data.json"); 
    const data=instaData[username];
    if (data){
        res.render("instagram.ejs",{data,followers});
    }
    else{
        res.render("error.ejs");
    }
})




app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

