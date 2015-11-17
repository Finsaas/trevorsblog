var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');

var flash = require('connect-flash');
var port = process.env.PORT || 3000; 
var mongoose = require ('mongoose');
var passport = require('passport');

var uriUtil = require('mongodb-uri');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var BlogSchema = require('./models/blog');
var blogRoutes = require('./routes/blog');

var options = {
  server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  

var mongodbUri = process.env.MONGOLAB_URI || "mongodb://localhost";

var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);






require('./config/passport')(passport); //passing passport for the configuration


// set up the express application
app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //reads cookies which is needed for authentication
app.use(bodyParser.json());//gets information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs'); //setting up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use connect-flash for flash messages stored in session


// routes--------------------------------------------------------------------------------------
require('./routes/userRoutes.js')(app, passport);



app.use(express.static('public'));

app.use('/api/blogs', blogRoutes);

app.get('/', function(req, res){
    res.readFile('index.html');
});

app.listen(port);
console.log('Magic happens at ' + port);