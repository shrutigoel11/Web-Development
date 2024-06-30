const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>console.log("Connected to Mongoose")).catch((err)=>console.log("Error"));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatify');
}
let allchats = [
    {
        from: "Neha",
        to: "Preeti",
        msg: "Send me your exam sheets.",
        created_at: new Date()
    },
    {
        from: "Preeti",
        to: "Neha",
        msg: "Here are the exam sheets.",
        created_at: new Date()
    },
    {
        from: "John",
        to: "Alice",
        msg: "What time are we meeting tomorrow?",
        created_at: new Date()
    },
    {
        from: "Alice",
        to: "John",
        msg: "Let's meet at 10 AM.",
        created_at: new Date()
    },
    {
        from: "David",
        to: "Emma",
        msg: "Did you get the project files?",
        created_at: new Date()
    },
    {
        from: "Emma",
        to: "David",
        msg: "Yes, I have them. I will send them to you shortly.",
        created_at: new Date()
    },
    {
        from: "Sarah",
        to: "Michael",
        msg: "Can you pick up groceries on your way home?",
        created_at: new Date()
    },
    {
        from: "Michael",
        to: "Sarah",
        msg: "Sure, I'll stop by the store.",
        created_at: new Date()
    },
];

Chat.insertMany(allchats);
// Chat.deleteMany({}).then((res)=>console.log("Deleted")).catch((err)=>console.log(err));
