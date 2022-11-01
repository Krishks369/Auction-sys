const mongoose = require("mongoose");

const connectDb = async () => {
  const conn = await mongoose
    .connect(process.env.MONGODB_URL)
    .then((e) => {
      console.log(`Connected to DB 👍`.green.bold);
    })
    .catch((e) => {
      console.log(e.message.red);
    });
  return conn;
};

module.exports = connectDb;
