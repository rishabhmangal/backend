const mongoose = require("mongoose");

const empcrud = mongoose.model("empcrud", {
  uname: String,
  pass: String,
  email: String,
  city: String,
});

module.exports = empcrud;
