const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on("connected", () => console.log("MANGODB IS CONNECTED"));
connection.on("error", (error) => {
  console.log("error in mangodb connection", error);
});

module.exports = mongoose;
