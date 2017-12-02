const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use apiRoutes
app.use("/api", apiRoutes);

// Configure Passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localserver", {
   useMongoClient: true
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
