const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use apiRoutes
app.use(routes);

// Configure Passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//

mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/boxdb", {
	  useMongoClient: true
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



//app.post("/submit", function(req, res){
	//db.User
	//.create(req.body)
	//.then(function(dbUser) {
	//	res.json(dbUser);
	//})
	//.catch(function(err) {
	//	res.json(err);
	//});
//});






app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
