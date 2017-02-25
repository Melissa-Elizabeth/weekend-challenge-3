console.log('Hiiiiiiiii');

$(document).ready(function(){


$('#equalsButton').on('click', equalsClicked); // event operator when = button is clicked

function equalsClicked() {
  var mathObject = {                // creating the object
    x: $('#numX').val(),
    y: $('#numY').val(),
    type: $('.mathSymbols').val()
  };
  console.log(mathObject);
  console.log(mathObject.type);

  if(mathObject.type === 'add') {
  $('.daAnswer').append(parseFloat(mathObject.x + mathObject.y)); // still concatenating
}
else if (mathObject.type === 'sub') {
  $('.daAnswer').append(mathObject.x - mathObject.y);
}
else if (mathObject.type === 'mult') {
  $('.daAnswer').append(mathObject.x * mathObject.y);
}
else if (mathObject.type === 'div') {
  $('.daAnswer').append(mathObject.x / mathObject.y);
}
}

$( '#clearButton' ).on( 'click', function() {     // clearing the form
  $('#numX').val('');
  $('#numY').val('');
  $('.daAnswer').empty();

});


});  // end of doc ready
