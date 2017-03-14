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

$("#geoLoaction").on("click", function() {
  if (this.checked) {
      $('#geoResult').text('Yes'); 
  } else {
	 $('#geoResult').text('No');
  }

});

geolocate();
});

function geolocate() {
   var box = document.getElementById("geoLoaction");
   if (box.checked) {
    document.getElementById("geoResult").innerHTML = "Yes";
   } else {
    document.getElementById("geoResult").innerHTML = "No";
   }
}