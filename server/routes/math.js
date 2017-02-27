var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var daAnswer = '';
var userArray = {};

var calculate = function() {

  if(userArray.symbol === 'add') {
    daAnswer = parseFloat(userArray.x) + parseFloat(userArray.y);
  } else if(userArray.symbol === 'sub') {
    daAnswer = (userArray.x) - (userArray.y);
  } else if(userArray.symbol === 'mult') {
    daAnswer = (userArray.x) * (userArray.y);
  } else if(userArray.symbol === 'div') {
    daAnswer = (userArray.x) / (userArray.y);
  }
  return daAnswer;
};

router.post('/sendObj', function(req, res){
  userArray = req.body;
  calculate(userArray);
});

router.get('/getCalc', function(req, res){
  res.send((daAnswer).toString());
});

module.exports = router;
