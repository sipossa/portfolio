$(function(){
//----------------------------------------
//스크롤할때 헤더변경 addClass
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0) {
        $('#header').addClass('on');
    }else{
        $('#header').removeClass('on');
        
    }
   
});



//메인슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //<<위로 움직이는 슬라이드  vertical:true,
    //<<흐려졌다 나오기 fade:true,

});


//제품슬라이드
$(".pr_slider").slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 5,
    dots:true,
});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev')
});
$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext')
});




//--------------------------------------------

})