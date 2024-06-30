const User = require("../models/usersSchema");
const bcrypt = require("bcrypt");
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

    //method 1. using bcrypt secure our password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      //method 1. password: hash_password,
      password,
    });

    res
      .status(200)
      .json({
        message: "registration successfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.log("internal error");
  }
};
module.exports = { home, register };
