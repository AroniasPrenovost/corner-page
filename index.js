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

// Change icon interior on hover 
document.getElementById("icon").onmouseover = function() {
    document.getElementById("rot3").innerHTML = "____<br>_____<br>___";
}

document.getElementById("icon").onmouseleave = function() {
    document.getElementById("rot3").innerHTML = "___<br>___<br>___";
}

// Menu hover animation
$('#icon').hover(function(){
    $('#content-panel').animate({marginLeft: '10%', width:'86%'}, 500)
}, function(){
    $('#content-panel').animate({width: '92%', marginLeft: '4%'}, 500)
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var icon = document.getElementById("icon");

/*
// Get the button that opens the modal
var cPanel = document.getElementById("content-panel");
*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
icon.onclick = function() {
// if modal is visible, hide up/down arrows and remove content
$('#content-panel').fadeOut();
$('#lower_right').fadeOut();
$('#lower_left').fadeOut();
$('#content-panel').animate({width: '92%', marginLeft: '4%'}, 500);
$('.container-fluid').animate({paddingTop: '6%', paddingLeft: '6%'}, 500);
$('.nav.navbar-nav').animate({marginRight: '6%'}, 500);
//  $('.container-fluid').animate({paddingLeft: '6%'}, 500);
icon.style.display = "none";
// $('#content-panel').animate({marginLeft: '91%', width:'5%'}, 1000);
setTimeout(function(){
    $('.modal-body').animate({width: '90%'}, 350); 
    modal.style.display = "block";
    modal.style.height = "80vh";
document.body.style.overflow = 'hidden'; // hide scroll bar 
}, 120);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $('.modal-body').animate({width: '40%'}, 500); 
    $('.container-fluid').animate({paddingTop: '0%', paddingLeft: '0%'}, 500);
    $('.nav.navbar-nav').animate({marginRight: '0%'}, 500);
    icon.style.display = "block";
    $('#content-panel').fadeIn();
    $('#lower_left').fadeIn();
    $('#lower_right').fadeIn();
document.body.style.overflow = 'visible'; // restore scroll bar 
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        icon.style.display = "block";
    }
}
