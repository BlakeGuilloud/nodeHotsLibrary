//modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


///configuration

//config files
var db = require('./config/db');

//port
var port = process.env.PORT || 8100;

//connecting to mongoDB
// mongoose.connect(db.url);


//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override w/ the X-HTTP-Method-Override header
app.use(methodOverride('X-HTTP-Method-Override'));

//set static files location
app.use(express.static(__dirname + '/public'));

//routes
require('./app/routes')(app); //configures routes


//start app
app.listen(port);

console.log('Your current port : ', port);

//expose app
exports = module.exports = app;
