var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);   

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add the code below to index.js
// Import routes
let apiRoutes = require("./api/routes/ListRoutes")
// Use Api routes in the App
app.use('/api', apiRoutes)

