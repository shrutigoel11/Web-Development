// getting-started.js
const mongoose = require('mongoose');

main()
.then((res)=>{console.log("Connection successful");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Create Schema

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User=mongoose.model("User",userSchema);
// Insert One
const user1=new User({name:"Adam", email:"adam@yahoo.in",age:45});

user1.save().then((res)=>{console.log(res);})
.catch(err => console.log(err));

//Insert Many

User.insertMany([{name:"Adi", email:"adi@yahoo.in",age:45},{name:"Dam", email:"dam@yahoo.in",age:45}]).then((res)=>{console.log(res);})
.catch(err => console.log(err));

//Find/Read One

User.find({}).then((res)=>{console.log(res);})
.catch(err => console.log(err));

//Find/Read Many

User.findById({_id:"668055f39604c4dd294c1cc6"}).then((res)=>{console.log(res);})
.catch(err => console.log(err));


//Update One and Many
User.updateOne({name:"Dam"},{age:50}).then((res)=>{console.log(res);})
 .catch(err => console.log(err));

User.updateMany({age:{$gt:10}},{age:80}).then((res)=>{console.log(res);})
 .catch(err => console.log(err));

//FindAndUpdate One and By Id

User.findOneAndUpdate({name:"Adam"},{age:60}).then((res)=>{console.log(res);})
 .catch(err => console.log(err));
 User.findByIdAndUpdate({_id:"668055f39604c4dd294c1cc6"},{age:90}).then((res)=>{console.log(res);})
 .catch(err => console.log(err));

// Delete One ,Many and By id

User.deleteOne({name:"Adam"}).then((res)=>{console.log(res);})
.catch(err => console.log(err));
User.deleteMany({age:{$gte:90}}).then((res)=>{console.log(res);})
.catch(err => console.log(err));
User.findByIdAndDelete({age:{$gte:90}}).then((res)=>{console.log(res);})
.catch(err => console.log(err));
