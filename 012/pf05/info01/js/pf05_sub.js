$(function(){
// ---------------------------------------------
$('.sns').on('click', function(){
    $('.header, .sns ul').toggleClass('active')
}) 

$('.logo').hide();

$('.pr_slider').slick({
    arrows:false,
    dots:true,
    infinite:false,
});
// ---------------------------------------------
});