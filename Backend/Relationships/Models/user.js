const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log("Connection successful");

    const UserSchema = new Schema({
      username: String,
      addresses: [{
        location: String,
        city: String
      }]
    });

    const User = mongoose.model("User", UserSchema);

    // Function to add users
    const addUsers = async () => {
      const user1 = new User({
        username: "Shruti Goel",
        addresses: [{
          location: "580/7/1, Bhartiya Colony",
          city: "Muzaffarnagar"
        }]
      });

      // Save the user to the database
      try {
        await user1.save();
        console.log("User added successfully:", user1);
      } catch (error) {
        console.error("Error adding user:", error);
      }
    };

    // Call the function to add users
    await addUsers();
  } catch (err) {
    console.error("Connection error:", err);
  }
}

main();
