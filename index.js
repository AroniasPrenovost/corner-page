// removes down arrow at end of scrolling 
$(document).scroll(function () {
    var y = $(this).scrollTop();   
    if (y < 900) {
        $('#lower_left').fadeIn();
    } else {
        $('#lower_left').fadeOut();
    }
});

// reveal lower right as you scroll down 
$(document).scroll(function () {
    var y = $(this).scrollTop();   
    if (y > 100) {
        $('#lower_right').fadeIn();
    } else {
        $('#lower_right').fadeOut();
    }
});