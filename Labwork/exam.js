page = 0 ;
received_object = null;

counter = 0
function display_inp(){

  jQuery("table").remove();
  jQuery("th").remove();
  jQuery("tr").remove();


  jQuery('#listOfThings').append("<table>");
  jQuery('#listOfThings').append("<tr><th>Number</th><th>Title</th><th>imdb rating</th></tr>");

  counter = page + 1;

  for (var j = page; j < page + 10; j++){
    to_add = ""
    to_add += "<tr>"


    to_add +="<td>";
    to_add +=counter++;
    to_add +="</td>";


    to_add +="<td>";
    to_add += received_object.items[j].title;
    to_add +="</td>";

    to_add +="<td>";
    to_add += received_object.items[j].imDbRating;
    to_add +="</td>";

    to_add +="</tr>";
    jQuery('#listOfThings').append(to_add)
  }

    jQuery('#listOfThings').append("</table>");
}

function prev_inp(){
  page -= 10;
  display_inp();
}


function next_inp(){
  page += 10;
  display_inp();
}


function first_inp(){
  page = 0;
  display_inp();
}


function last_inp(){
  page = 240;
  display_inp();
}

function button_inp(){
  page = (jQuery(this).attr("id") -1 ) * 10;
  display_inp();
}

function processing(data){
  received_object = data;


  display_inp();

  fill_in_buttons();

}

function ajax_inp(){
  movie_name_input = jQuery('#imdb_name_input').val()

  jQuery.ajax({
      url: `https://imdb-api.com/en/API/Top250Movies/k_qt5p5836={movie_name_input}`,
      type: 'GET',
      success: processing
    })

}

function fill_in_buttons(){

  for( i = 1; i <=  received_object.items.length /10 ; i++){
    jQuery("#between_").append('<button class="pages" id="' + i + '">' + i + "</button")
  }
}

function setup(){

  jQuery('#get_search_button').click(ajax_inp)

  jQuery('#Next').click(next_inp);

  jQuery('#Previous').click(prev_inp);

  jQuery('#First').click(first_inp);

  jQuery('#Last').click(last_inp);
  ajax_inp();

  jQuery("body").on('click','.pages', button_inp);

}

jQuery(document).ready(setup)
