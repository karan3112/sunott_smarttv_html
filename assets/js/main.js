$(function() {
$('nav#menu').mmenu();



$('.menu_hit').hover(function(){  
     if($('#menu').hasClass('mmenu-opened'))
      { 
	 // $('#menu').addClass('mmenu-opened');  
	     
      }else{
		 
        $(this).trigger("click");
       // $('.gloabl_serach_update .search_inn input[type=search]').focus();
      }  
}); 


$('.modal').on('shown.bs.modal', function() {
  //Make sure the modal and backdrop are siblings (changes the DOM)
  $(this).before($('.modal-backdrop'));
  //Make sure the z-index is higher than the backdrop
  $(this).css("z-index", parseInt($('.modal-backdrop').css('z-index')) + 1);
});



$('.body_setting').click(function(){
	  //$("#settingModal input:first").trigger('focus');
	  #('#settingModal').focus();
	  $('#geoLoaction').focus();
});
/*$('.search_cta').click(function(){
	 $('#myModal').modal('show');
});*/

/*$('.call_search_update').click(function(){
      //body-overlay
      if($('body').hasClass('searchbox-open'))
      {
        $('body').removeClass('searchbox-open');
      }else{
        $('body').addClass('searchbox-open');
        $('.gloabl_serach_update .search_inn input[type=search]').focus();
      }
      return false;
    });
});*/


});



/*$(window).scroll(function() {
    if (  document.documentElement.clientHeight + 
          $(document).scrollTop() >= document.body.offsetHeight )
    { 
	  $('html, body').animate({scrollTop:0}, 'slow');
    }
});*/


