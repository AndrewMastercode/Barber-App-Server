const express = require("express");
const mongoose = require("mongoose");
const services = require("../model/ServicesSchema");
const User = require("../model/UserSchema");
const route = express.Router();


route.post("/createServices", async (req, res) => {
  const { service, time, date } = req.body;
  let Service = {};
  Service.service = service;
  Service.time = time;
  Service.date = date;

  let ServiceModel = new services(Service);
  await ServiceModel.save()
    .then((ServiceModel) => res.json(ServiceModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.get("/allServices", async (req, res) => {
  services.find({}, function (err, docs) {
    if (!err) {
      res.json({
        message: "found",
        data: docs,
      });
    } else {
      throw err;
    }
  });
});

module.exports = route;