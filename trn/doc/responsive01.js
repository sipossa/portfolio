$(function(){

$('#header i').on('click', function(){
    $('nav').toggle();
});

$(window).on('resize', function(){
    $('nav').removeAttr('style');
});



});