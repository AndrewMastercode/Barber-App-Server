const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/UserSchema");

const route = express.Router();

route.post("/create", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  let user = {};
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.password = password;

  let UserModel = new User(user);
  await UserModel.save()
    .then((UserModel) => res.json(UserModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});

route.get("/UserLogin", async (req, res) => {
  //const { email, password } = req.body;
  const { email, password } = req.query;
  console.log("email : ", email);
  console.log("pass : ", password);
  const user = await User.findOne({ email });

  if (user != null) {
    if (user.password === password) {
      console.log("password and email match for customer ");
      return res
        .status(200)
        .json({ status: true, message: "found" });
    } else {
      console.log("not found");
      res.status(200).json({
        status: false,
        message: "not found",
        //role: "admin",
      });
    }
  } else {
    console.log("not found");
    res.status(200).json({
      status: false,
      message: "not found",
      //role: "admin",
    });
  }
});
//sign up code end

module.exports = route;
