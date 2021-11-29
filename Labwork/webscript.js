function addition() {
  x = parseInt(jQuery('#value1').val());
  y = parseInt(jQuery('#value2').val());
  z = x + y
  jQuery('#Result').html(z);
  tmp = '<span>' + x + ' + ' + y + ' = ' + z + ' <button id="delete"> Delete </button> <br> </span>';
  jQuery('#History').append(tmp);

}

function subtraction() {
  x = parseInt(jQuery('#value1').val());
  y = parseInt(jQuery('#value2').val());
  z = x - y
  jQuery('#Result').html(z);
  tmp = '<span>' + x + ' - ' + y + ' = ' + z + ' <button id="delete"> Delete </button> <br> </span>';
  jQuery('#History').append(tmp);

}

function multiplcation() {
  x = parseInt(jQuery('#value1').val());
  y = parseInt(jQuery('#value2').val());
  z = x * y
  jQuery('#Result').html(z);
  tmp = '<span>' + x + ' * ' + y + ' = ' + z + ' <button id="delete"> Delete </button> <br> </span>';
  jQuery('#History').append(tmp);

}

function division() {
  x = parseInt(jQuery('#value1').val());
  y = parseInt(jQuery('#value2').val());
  z = x / y
  jQuery('#Result').html(z);
  tmp = '<span>' + x + ' / ' + y + ' = ' + z + ' <button id="delete"> Delete </button> <br> </span>';
  jQuery('#History').append(tmp);

}

function power() {
  x = parseInt(jQuery('#value1').val());
  y = parseInt(jQuery('#value2').val());

  z = 1;

  for(let i=1; i<=y; i+=1) {
    z *= x
  }

  jQuery('#Result').html(z);
  tmp = '<span>' + x + ' ^ ' + y + ' = ' + z + ' <button id="delete"> Delete </button> <br> </span>';
  jQuery('#History').append(tmp);

}

function show_() {
  jQuery('#History').attr('style', '');

}

function hide_() {
  jQuery('#History').attr('style', 'display:none');

}

function deleteElement() {
  jQuery(this).parent().hide();

}

function setup() {
  jQuery('#trigger_addition').click(addition);
  jQuery('#trigger_subtract').click(subtraction);
  jQuery('#trigger_muliplication').click(multiplcation);
  jQuery('#trigger_division').click(division);
  jQuery('#trigger_power').click(power);
  jQuery('#show_').click(show_);
  jQuery('#hide_').click(hide_);
  jQuery('body').on('click', '#delete', deleteElement);

}

$(document).ready(setup);
