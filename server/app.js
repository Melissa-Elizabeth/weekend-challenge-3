var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var math = require('./routes/math');
var index = require('./routes/index');


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/index', index);
app.use('/math', math);

app.listen(3000);
