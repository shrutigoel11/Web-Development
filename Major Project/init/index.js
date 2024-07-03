const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

(async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");
    await initDB();
    console.log("data was initialized");
  } catch (err) {
    console.error(err);
  }
})();

async function initDB() {
  try {
    await Listing.insertMany(initData.data);
  } catch (err) {
    console.error("Error initializing data:", err);
  }
}