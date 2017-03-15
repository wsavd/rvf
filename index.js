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
mongoose.Promise = global.Promise;
mongoose.connect(db);

var index = require('./routes/index');
var catalog = require('./routes/catalog'); 
var jwt = require('./routes/jwt');
var security = require('./routes/security');

app.use('/', index);
app.use('/catalog', catalog);
app.use('/jwt', jwt);
app.use('/security-api', security);

app.use(function(req,res,next){
  res.send("404");
  //res.render('404');
});

app.listen(3009, function () {
  console.log('Example app listening on port 3009!');
});