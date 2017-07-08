// npm initialize
// npm install modules: express, 
// express boilerplate

// Your app will need to account for the following endpoints:

//`"/"` :: Home Route (*Hint*: `res.sendFile`)

//`"/tables"` :: Display users with reservations, and users on waitlist

//`"/reserve"` :: Page w/ form for making a reservation

//`"/api/tables"` :: JSON response with array of all users w/ reservations

//`"/api/waitlist"` :: JSON response with array of all users who got waitlisted

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
