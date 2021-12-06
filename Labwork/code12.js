function process_(data){
  console.log(data);
  temp = data.main.temp
  jQuery('#city_temperature').html(temp)

}

function AJAX_GET(){
  city_name_input = jQuery('#city_name_input').val()

  jQuery.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${city_name_input}&appid=83a2edbfd82058895386c02214670622&units=metric`,
    type:'GET',
    success: process_
  })
}

function setup(){
  jQuery('#get_temperature_button').click(AJAX_GET);
}

jQuery(document).ready(setup);
