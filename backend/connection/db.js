const mongoose = require("mongoose");

const URL =
  "mongodb+srv://mkp:Manoj%40123@cluster0.7dp1xoz.mongodb.net/INFODB?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connection successfull");
  } catch (error) {
    console.error("database caonnection fail");
    process.exit(0);
  }
};

module.exports = connectDB;
