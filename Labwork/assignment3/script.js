function view_largeimg(){
  imgSrc = $(this).attr('src')
  $('.largeimg > img').attr('src', imgSrc)
}

function setup(){
  $('body').on('click', '.smallimg > img', view_largeimg)
}

$(document).ready(setup)
