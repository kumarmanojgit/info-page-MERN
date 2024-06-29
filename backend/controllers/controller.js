const User = require("../models/usersSchema");
const home = async (req, res) => {
  try {
    res.status(200).json({ message: "welocome to the new world" });
  } catch (error) {
    console.log("error page");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExsit = await User.findOne({ email }); // already email exist or not
    if (userExist) return res.status(400).json({ msg: "email already exit" });
    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log("internal error");
  }
};

module.exports = { home, register };
