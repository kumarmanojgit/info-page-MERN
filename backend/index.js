const express = require("express");
const app = express();
const router = require("./router/route");
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at port :&{PORT}`);
});
