// Create web server
// Load modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Load comments.json
var comments = require('./comments.json');

// Set up body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set up web server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Post comments
app.post('/comments', function(req, res) {
  var newComment = {
    id: comments.length + 1
    }
});