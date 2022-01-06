// require express

const express = require("express");

//instance of express

const app = express();

// require dotenv

require("dotenv").config();

// Connect to DB

const connectDB = require("./Config/connectDB");
connectDB();

// express json middleware

app.use(express.json());

// routes
const router = require("./Routes/contact");
app.use("/api/contact", router);

// create server

const port = process.env.PORT;

app.listen(port, (error) => {
  error
    ? console.error(" Server is not Running !!!")
    : console.log(`Server is Running on Port ${port}...`);
});
