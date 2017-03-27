var body = $("html, body");
$(function() {
    $('body').bind('focusin focus', function(e) {
        e.preventDefault();
    })
    var keyboardSupport = keyboardSupport || {};

    $('.showcase_wrap:first').trigger('focus');

	

    keyboardSupport.handleLeftKey = function(event) {
        /*var selRowIds = $(".show_thumb:first");
	if (selRowIds.length == 0) {
            //$('#reject_alert').show();
            alert(1);
        } else {
        	alert(2);
           // $('#selectCodeNotificationArea').show();
        };*/
    if ($(event.currentTarget.activeElement).find('.show_thumb:first').hasClass('is-selected')) {
        $('.menu_hit').trigger("click");
        $('.menu_hit').focus();
		$('.search_bt').focus();
        return false;
    } else {

    }

    $(event.currentTarget.activeElement).parents('.showcase_wrap:first').flickity('previous');
    console.log({
        msg: "Handling key down event for LeftKey and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.handleRightKey = function(event) {

    if ($('#menu').hasClass('mmenu-opened')) {
        $('#mmenu-blocker').trigger("click");
        $('.showcase_wrap:first').trigger('focus');
        return false;
    } else {
        //$(this).trigger("click");
        // $('.gloabl_serach_update .search_inn input[type=search]').focus();
    }

    $(event.currentTarget.activeElement).parents('.showcase_wrap:first').flickity('next');
    console.log({
        msg: "Handling key down event for RightKey and Target is",
        target: event.currentTarget.activeElement
    });
	
}; 
keyboardSupport.handleUpKey = function(event) {
    var nextFocus = $(event.currentTarget.activeElement).attr('data-previous-focus');
    $('.is-selected').removeClass('is-selected');
    $(nextFocus).trigger('focus');
    $(nextFocus).flickity('select', 0);
    if (typeof $(nextFocus).offset() != 'undefined') {
        body.stop().animate({ scrollTop: $(nextFocus).offset().top }, '500', 'swing');
    }
    console.log({
        msg: "Handling key down event for UpKey and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.handleDownKey = function(event) {
    var nextFocus = $(event.currentTarget.activeElement).attr('data-next-focus');
    $('.is-selected').removeClass('is-selected');
    $(nextFocus).trigger('focus');
    $(nextFocus).flickity('select', 0);
    if (typeof $(nextFocus).offset() != 'undefined') {
        body.stop().animate({ scrollTop: $(nextFocus).offset().top }, 700);
    }
    console.log({
        msg: "Handling key down event for DownKey and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.centerElement = function(event) {
    console.log({
        msg: "Handling key down event for centerElement and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.horCenterElement = function(event) {
    console.log({
        msg: "Handling key down event for horCenterElement and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.handleReturnKey = function(event) {
    console.log({
        msg: "Handling key down event for ReturnKey and Target is",
        target: event.currentTarget.activeElement
    });
}; 
keyboardSupport.handleBackKey = function(event) {
    console.log({
        msg: "Handling key down event for BackKey and Target is",
        target: event.currentTarget.activeElement
    });
};

$(document).on('keydown', function(event) {
    //console.log(event);
    var asciiCode = event.keyCode;
    switch (asciiCode) {
        case 37:
            keyboardSupport.handleLeftKey(event);
            break;
        case 38:
            keyboardSupport.handleUpKey(event);
            break;
        case 39:
            keyboardSupport.handleRightKey(event);
            break;
        case 40:
            keyboardSupport.handleDownKey(event);
            break;
        case 13:
            keyboardSupport.handleReturnKey(event);
            break;
        case 10009:
            keyboardSupport.handleBackKey(event);
            break;
        case 27:
            keyboardSupport.handleBackKey(event)
    }
});

$('.showcase_wrap').on('focus', function(ele) {
    console.log()
})

// $('.showcase_wrap').on('select.flickity', function() {
//   console.log(['Flickity select ', $(this)]);
// });




});
