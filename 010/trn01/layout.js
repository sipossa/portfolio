$(function(){
//--------------------------

//방법1.
//$(window).on("scroll", function(){
 //   if ($(window).scrollTop() > 0) {
  //      $('.header').addClass('on');
   // } else {
    //    $('.header').removeClass('on');
   // }
//})

//방법2. 삼항조건식, ? 라면 : 아니면
$(window).on("scroll", function(){
    var sct=$(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') :  $('.header').removeClass('on'); 
});


$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('.mopen').on('click mouseenter', function(){
    $('nav').toggleClass('on');
    $('.right ').toggleClass('on');
});

//--------------------------
})