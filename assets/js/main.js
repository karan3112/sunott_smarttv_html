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