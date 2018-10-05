const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/imperfectAPI");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// const session = require("express-session");

// var sess = {
//   secret: 'keyboard cat',
//   cookie: {}
// }
// app.use(session(sess));

// Configure to use body parser for AJAX requests
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add API Routes
app.use("/api", routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/perfectlyImperfect");
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_g9n5wm06:a0u06gijgqu5tdeirjsgibamcb@ds223763.mlab.com:23763/heroku_g9n5wm06");

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});