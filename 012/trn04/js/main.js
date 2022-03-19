$(function(){
// -------------------------------------------------
$('#pop_up').draggable();

$('#pop_up a').on('click', function(){
    $(this).parent().fadeOut();

    return false;
});

$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();

    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    sct > 500 ? $('#to_top').fadeIn() : $('#to_top').fadeOut();
    sct > sTop ? $('#solution').addClass('on') : $('#solution').removeClass('on');
    sct > pTop ? $('#product').addClass('on') : $('#product').removeClass('on');
});

$('#header .search').on('click', function(){
    $('#header .search_form').stop().slideToggle()
})

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    fade:true,
    speed:1500,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});

$('.pr_slider figure').eq(4).addClass('on');
$('.pr_slider').on('afterChange', function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});

$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    centerMode:true,
    centerPadding:'5rem',
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,
});

$('.family_link .link>a').on('click', function(e){
    // e.preventDefault();
    $(this).prev().stop().slideToggle();
    $(this).find('i').toggleClass('on');
    return false;
});

$('#to_top a').on('click', e => {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1000, 'swing');
});

let sTop = $('#solution').offset().top - 200;
let pTop = $('#product').offset().top - 200;















// -------------------------------------------------
});