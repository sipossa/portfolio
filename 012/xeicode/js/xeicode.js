$(function(){
// -----------------------

$('a').on('click', function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 0)
    });
    
$('.category').on('click', function(){
    $('html, body').animate({scrollTop:0}, 0);
});

$('.toTop').on('click', function(){
    $('html, body').animate({scrollTop:0}, 0);
});

// -----------------------

});