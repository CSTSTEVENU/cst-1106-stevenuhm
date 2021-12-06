
add = function() {
  x = parseInt($('#input1').val()); // get input value
  y = parseInt($('#input2').val());
  z = x + y
  $('#result').html(z); // html(input) is a setter
  tmp = $('#history').html(); // allocate history html
  // set result in history element
  $('#history').html(tmp + x + ' + ' + y + ' = ' + z + '<br>');
}

subtraction = function() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x - y
  $('#result').html(z);
  tmp = $('#history').html();
  $('#history').html(tmp + x + ' - ' + y + ' = ' + z + '<br>');
}

multiplication = function() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x * y
  $('#result').html(z);
  tmp = $('#history').html();
  $('#history').html(tmp + x + ' * ' + y + ' = ' + z + '<br>');
}

division = function() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x / y
  $('#result').html(z);
  tmp = $('#history').html();
  $('#history').html(tmp + x + ' / ' + y + ' = ' + z + '<br>');
}

showhistory = function() {
  $("#history").show();
  //$('#history').attr('style', '');
}

hidehistory = function() {
  $("#history").hide();
  //$('#history').attr('style', 'display:none');
}


setup = function() {
  $('#add').click(add);
  $('#subtraction').click(subtraction);
  $('#multiplication').click(multiplication);
  $('#division').click(division);
  $('#showhistory').click(showhistory);
  $('#hidehistory').click(hidehistory);
}

// Document ready event
$(document).ready(setup);
