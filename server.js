// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// bring in handlebars and use it as the app engine.
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// bring in our routes from controllers folder
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// set and listen to port
var PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});



