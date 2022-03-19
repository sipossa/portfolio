$(function(){
    //---------------------------------------
$('#top_banner i').on('click',function(){
    // $('#top_banner').hide();
    $('#top_banner').slideUp();
});
// function topBannerClose(){
//    $('#top_banner').hide();
// }

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    // centerMode:true,
    // centerPadding:"100px",
    pauseOnFocus:false,
    pauseOnHover:false,
});

$('.pr_slider figure').eq(7).addClass('on')
$('.pr_slider').on('afterChange',function(e,s,c){
    //  c= 1,2,....
   $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
   $('#product03 .slide_bar>span').css({left:c*100})
});

$('.pic').slick({
    arrows:false,
    autoplay:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    asNavFor:'.pic',
});

$('.pr_slider02').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnFocus:false,
    pauseOnHover:false,
});

$('#product04 i.xi-arrow-left').on('click',function(){
 $('.pr_slider02').slick('slickPrev')
});

$('#product04 i.xi-arrow-right').on('click',function(){
    $('.pr_slider02').slick('slickNext')
   });


$('#link select').on('change',function(){
    var link=$(this).val();
    if(link) window.open(link)
});


$('.tab_menu li').on('click',function(){
    var idx=$(this).index();
    // $('.tab_cont>div').eq(idx).show().siblings().hide();
    $('.tab_cont>div').eq(idx).addClass('on').siblings().removeClass('on');
});



$('.tab_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:4,
    centerMode:true,

});


//---------------------------------------
});