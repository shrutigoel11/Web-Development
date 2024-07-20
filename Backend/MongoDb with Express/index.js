const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat");
const methodOverride=require('method-override');
const ExpressError=require("./ExpressError");


app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then(()=>console.log("Connected to Mongoose")).catch((err)=>console.log("Error"));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatify');
}

//Insert Data-->init.js

// let chat1=new Chat({
//     from:"Neha",
//     to:"Preeti",
//     msg:"Send me your exam sheets.",
//     created_at:new Date()
// });
// chat1.save().then((res)=>console.log(res)).catch((err)=>console.log(err));

//INDEX ROUTE
app.get("/chats",async(req,res)=>{
    try{let chats=await(Chat.find());
    res.render("index.ejs",{chats});}
    catch(err){
        next(err);
    }
})

//NEW ROUTE-->working
app.get("/chats/new",(req,res)=>{
    // throw  new ExpressError(404,"Page not found")
    res.render("new.ejs");
})

//CREATE ROUTE
app.post("/chats",async(req,res,next)=>{
    try{
        let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    await newChat.save();
    res.redirect("/chats");
    }catch(err){
        next(err);
    }

})

//Show route
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
             next(new ExpressError(404, "Chat not found"));
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});

//EDIT 

app.get("/chats/:id/edit",async(req,res)=>{
    try{
        let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});}
    catch(err){
        next(err);
    }
})

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedMsg=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true},{new:true});
    res.redirect("/chats");
})

//DELETE

app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findByIdAndDelete(id,{runValidators:true},{new:true});
    res.redirect("/chats");
})

//ROOT

app.get("/",(req,res)=>{
    console.log("Root is working");
})
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});
app.listen("8080",(req,res)=>{
    console.log("Listening on port 8080");
})