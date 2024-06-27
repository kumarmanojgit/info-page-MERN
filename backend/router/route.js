const express = require("express");
const router = express.Router();
const authcontrol = require("../controllers/controller.js");

//  first method
// router.get("/", (req, res) => {
//   res.status(200).send("hello world");
// });

// alternate methode(int this methode we can easly find delete push element )
// router.route("/").get((req, res) => {
//   res.status(200).send("welocome to the new world");
// });
router.route("/").get(authcontrol.home); // this done by controller (logical code there)

// router.get("/register", (req, res) => {
//   res.status(200).send("welocome to register page");
// });

// alternate methode
// router.route("/register").get((req, res) => {
//   res.status(200).send("welcome to new register page");
// });
router.route("/register").get(authcontrol.register);
module.exports = router;
