const express = require("express");
const app = express();
const router = require("./router/route");
const connectDB = require("./connection/db");

app.use(express.json());
app.use("/", router);

const PORT = 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
