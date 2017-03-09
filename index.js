var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
process.env.SECRET_KEY = "jwt";


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
var jwt = require('./routes/jwt');

app.use('/', index);
app.use('/catalog', catalog);
app.use('/jwt', jwt);

app.listen(3008, function () {
  console.log('Example app listening on port 3008!');
});