// require mongoose

const mongoose = require("mongoose");

// create DB funct

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mernf1CP22");
    console.log("DB Connected ...");
  } catch (error) {
    console.error("Can't connect to DB !!");
  }
};

module.exports = connectDB;
