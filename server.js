const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thePostMan");
app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, ()=>{
  console.log(`🙉 ==> Server now listening to you... ON PORT ${PORT}!!`)
});
