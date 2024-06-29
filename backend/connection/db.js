const mongoose = require("mongoose");

const URL = process.env.MONGO_URL;
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
