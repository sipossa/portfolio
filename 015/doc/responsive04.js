$(function(){
//------------------
$('.main_slider').slick({
  arrows:false,
  dots:false,
});

$('.gnb>ul>li>a').on('click', function(e){
  if ($('.gnb').hasClass('on')){

    e.preventDefault();
    // $('.submenu').hide();
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.submenu').slideUp();
  }

});

$('.mopen i').on('click', function(){
  $('.gnb').toggleClass('on');
  $('.sns').fadeToggle();
});

$(window).on('resize', function(){
  $('.submenu').removeAttr('style')
});

//------------------
})