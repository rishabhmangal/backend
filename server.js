const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const empcrud = require("./model");

app.use(cors());
//use below when using from third party apps like React, angular etc
//app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

userdata = [];

app.post("/adduser", (req, res) => {
  // var data = req.body;
  // console.log(data);
  // userdata.push(data);
  // res.send(data);
  const users = new empcrud({
    ...req.body,
  });
  console.log(users);
  users.save().then(() => res.send(users));
});

app.post("/loginvalid", (req, res) => {
  var data = req.body;
  console.log(data);
  var valid = false;
  if (data.uname === "admin" && data.pass === "pass123") {
    valid = true;
  }
  res.send(valid);
});
app.get("/loaduser", (req, res) => {
  res.send(userdata);
});

const startServer = async () => {
  await mongoose.connect("mongodb+srv://amar:amar123@cluster0.rle5i.mongodb.net/mmcdb?retryWrites=true&w=majority&appName=Cluster0");
  app.listen(4000, () => {
    console.log("server is ready");
  });
};

startServer();
