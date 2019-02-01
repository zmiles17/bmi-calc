const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
// const dotenv = require('dotenv');
// dotenv.config();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitcalc', { useNewUrlParser: true })
  .catch(function (err) {
    console.log(err)
  });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});