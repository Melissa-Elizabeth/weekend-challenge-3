var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var math = require('./routes/math');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', math);


app.listen(3000);
