console.log('Hiiiiiiiii');

$(document).ready(function(){

  $('#equalsButton').on('click', equalsClicked);
  function equalsClicked() {
    var mathObject = {                // creating the object
      x: $('#numX').val(),
      y: $('#numY').val(),
      symbol: $('.mathSymbols').val()
    };

    $.ajax({
      type: 'POST',
      url: '/math/sendObj',
      data: mathObject,
      success: function(data){
      },
      error: function(error){
      }
    });

    $.ajax({
      type: 'GET',
      url: '/math/getCalc',
      success: function(response) {
        $('.daAnswer').text(response);
      },
      error: function(error){
      }
    });
  }

  $( '#clearButton' ).on( 'click', function() {     // clearing the form
    $('#numX').val('');
    $('#numY').val('');
    $('.daAnswer').empty();

  });
});
