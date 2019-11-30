const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    const db = await mongoose.connect(process.env.mongooseConnectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
      console.log("Connected to database");
    return db;
  } catch (error) {
    console.log(error);
    return console.log("failed to connect to database");
  }
};

module.exports = connect;
