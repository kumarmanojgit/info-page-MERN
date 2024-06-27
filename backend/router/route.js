const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).send("hello world");
// });

// alternate methode
router.route("/").get((req, res) => {
  res.status(200).send("welocome to the new world");
});

// router.get("/register", (req, res) => {
//   res.status(200).send("welocome to register page");
// });

// alternate methode
router.route("/register").get((req, res) => {
  res.status(200).send("welcome to new register page");
});

module.exports = router;
