$(function(){
//-------------------------------------------------

$('.mopen').on('click',function(){
    $('nav').toggleClass('on')
    $('.header .right').toggleClass('on')
});


$(window).on("scroll", function(){
    if($(window).scrollTop() > 0) {
        $('header').addClass('on')
    }else {
        $('header').removeClass('on') //스크롤이0보다 많을때, on<스크롤할때만나타나라 
    }
    
});
//var sct=$(window).scrollTop(); //var let const 
//sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on'); // 삼항조건식 =같음




$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,

});

//-------------------------------------------------
})