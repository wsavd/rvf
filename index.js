var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var mongoose = require('mongoose');
var Book = require('./models/book.model');
var db = 'localhost/books';
mongoose.connect(db);

var index = require('./routes/index');
var catalog = require('./routes/catalog'); 

app.use('/', index);
app.use('/catalog', catalog);

app.listen(3007, function () {
  console.log('Example app listening on port 3007!');
});