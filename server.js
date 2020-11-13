const express = require("express");
//import dataBase configure file to connect
const connectDB = require("./DBConfig/Connection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("", require("./routes/User.route"));
app.use("", require("./routes/Service.routes"));


app.get("/", (req, res) => {
  res.json({
    message:
      "",
  });
});

const Port = process.env.Port || 3001;

app.listen(Port, () => console.log("Server started"));
