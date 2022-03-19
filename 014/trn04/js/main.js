$(function(){
//---------------------------------------------------------------
$('#popup').draggable();

$('#popup a').on('click', function(){
    $(this).parent().fadeOut();
    return false;
});



$('.search').on('click', function(){
    $('.search_form').stop().slideToggle();
});




$(window).on('scroll', ()=>{ /*<()=>이게 펑션 대신쓰는거*/
    let sct=$(window).scrollTop();
    console.log(sTop,sct);
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    //if(sct > 0) {$('#header').addClass('on')}else{$('#header').removeClass('on')}
    sct > 300 ? $('#to_top').fadeIn() : $('#to_top').fadeOut();
    sct > sTop ? $('#solution').addClass('on') : $('#solution').removeClass('on');
});



$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});



$('.pr_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    centerMode:true,
    centerPadding:'100px',
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,
});

$('.pr_slider figure').eq(0).addClass('on');
$('.pr_slider').on('afterChange', function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});



$('.familylink .link>a').on('click', function(e){
    /*e.preventDefault();  <-a태그에 #!안해도 이거해놓으면 홈위로 안감*/
    $(this).prev().stop().slideToggle();
    $(this).find('i').toggleClass('on')
    return false;
});



$('#to_top a').on('click', e=>{
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000,)
});

let sTop = $('#solution').offset().top - 200;









//---------------------------------------------------------------
})