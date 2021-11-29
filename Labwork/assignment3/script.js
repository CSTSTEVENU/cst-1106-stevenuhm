function view_largeimg(){

  imgSrc = jQuery(this).attr('src')

  jQuery('.largeimg > img').attr('src', imgSrc)
}

function setup(){
  jQuery('body').on('click', '.smallimg > img', view_largeimg)
}

jQuery(document).ready(setup)
