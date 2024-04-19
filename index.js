require('dotenv').config();
const express = require("express");

const app = express();


const userRouter = require('./app/routers/user.router')

app.get("/", (req, res) => {
  res.json({ message: "REST API" });
});

app.use("/users", userRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Port ${PORT}.`);
});