const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connectToMongo;
