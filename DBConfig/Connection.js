const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/BarberApp";

const connectDB = async () => {
  mongoose
    .connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

module.exports = connectDB;
