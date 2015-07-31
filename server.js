var express = require('express');

var path = require('path');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.listen(8000, function() {
	console.log('LISTENING ON 8000');
})