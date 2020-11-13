var mongoose = require("mongoose");

const Services = new mongoose.Schema({
    service: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
 
});

// const User = mongoose.model("Admin", AdminSchema);

// module.exports = User;

module.exports = services = mongoose.model("Services", Services);
