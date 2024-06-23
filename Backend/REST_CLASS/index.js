const  express=require("express");
const app=express();
const path=require("path");
const {v4 :uuidv4}=require('uuid');
const methodOveride=require("method-override");


const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(methodOveride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//create index route
let posts=[
    {
        id:uuidv4(),
        username:"shruti",
        content:"I love coding",
    },
    {
        id:uuidv4(),
        username:"shru",
        content:"I love dsa",
    },
    {
        id:uuidv4(),
        username:"sh",
        content:"I love web development",
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});   
})

app.get("/posts/new",(req,res)=>{   // form comes
    res.render("new.ejs");
});
app.post("/posts/new",(req,res)=>{        //on submission data added 
    let {username,content}=req.body; 
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");   // here redirect to index route default get request
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});   
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;
    console.log(post);
    // res.send("Patch working well");
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!=p.id);
     res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})