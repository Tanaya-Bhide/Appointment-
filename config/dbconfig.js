const mangoose = require("mongoose");
mangoose.set('strictQuery', true);
const connection = mangoose.connection;
connection.on("connected", () => console.log("MANGODB IS CONNECTED"));
connection.on("error", (error) => {
  console.log("error in mangodb connection", error);
});
 
module.exports = mangoose;
