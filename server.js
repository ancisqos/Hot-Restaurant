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
var PORT = 9001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static('public'));

//Set up data, users, waitlist
// =============================================================
var customers = [];
   //if customers.length === 5, add to waitlist

var waitlist = [];

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/:endpoint?', function (req, res) {
  switch (req.params.endpoint) {
    case 'tables':
      return res.json(customers);
      break
    case 'waitlist':
      return res.json(waitlist);
      break
    default:
      res.send(404, 'Not found');
      break
  }
});

// Takes in JSON input for customers and waitlist
// =============================================================
// app.post("/api/new", function(req, res){
// 	var 
// })

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(err) {
	if (err) {
		return.console.error(err)
	}

  console.log("App listening on PORT " + PORT);
});
