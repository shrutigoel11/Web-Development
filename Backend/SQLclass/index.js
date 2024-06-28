const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require('method-override');
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//create connection

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'data_vault',
    password:'15@srmRenu'
});

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ]  ;
};

// let q="INSERT INTO user(id,username,email,password) VALUES ?";
// let data=[];
// for(let i=1;i<=100;i++){
//   data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data], (err, result)=>{
//         console.log(result);
//     })
// }
// catch(err){
//     console.log(err);
// }

//CLOSE connection 
// connection.end();


//HOME ROUTE
app.get("/",(req,res)=>{
  let q=`SELECT count(*) FROM user`;
  try{
        connection.query(q, (err, result)=>{
            let count=(result[0]["count(*)"]);
            res.render("home.ejs",{count});
        })
    }
    catch(err){
        res.send("error occured");
    }
});


//SHOW ROUTE
app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  try{
        connection.query(q, (err, users)=>{
            // console.log(result);
            res.render("show.ejs",{users});
        })
    }
    catch(err){
        res.send("error occured");
    }
});
//edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user where id='${id}'`;
  try{
        connection.query(q, (err, users)=>{
          let user=users[0]
            console.log(users);
            res.render("edit.ejs",{user});
        })
    }
    catch(err){
        res.send("error occured");
    }
});

//update route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formpass, username:newuser}=req.body;
    let q=`SELECT * FROM user where id='${id}'`;
    
  try{
    //get user
        connection.query(q, (err, users)=>{
          let user=users[0];
          //check for correct password
          if(formpass!=user.password){
            res.send("Incorrect Password");
          }
          else{
            //query for update
            let q2=`UPDATE  user SET username='${newuser}' WHERE id='${id}'`;
            connection.query(q2, (err, result)=>{
                try{
                  res.redirect("/user");
                }catch(err){
                  res.send("Error");
                }
            });
          }
        })
    }
    catch(err){
        res.send("error occured");
    }
});
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080",()=>{
  console.log("Listening on port 8080");
})
// console.log(getRandomUser());