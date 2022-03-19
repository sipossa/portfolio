$(function(){
//-----------------------

$('#header .search').hide();
$('#header .search_icon').on('click', function(){
    $('#header .search').slideToggle();
});

$('.languge').on('click', function(){
    $('.lang_select').slideToggle();
    $('.languge i').toggleClass('on');
});


$('.search .xi-close').on('click', function(){
    $('#header .search').slideUp();
});

$(window).on("scroll", function(){
    if ($(window).scrollTop() > 100) {
    $('.gotop').addClass('on');
    } else {
    $('.gotop').removeClass('on');
    }
});

$('.gotop').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

$('.main_visual').slick({
        arrows:false,
        autoplay:true,
        fade:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
});

$('.main_visual .visual').eq(0).addClass('on');
$('.main_visual').on('afterChange',function(e,s,c){
    $('.main_visual .visual').eq(c).addClass('on').siblings().removeClass('on');
});


$('.arrow i.xi-angle-left-min').on('click', function(){
    $('.main_visual').slick('slickPrev');
});
$('.arrow i.xi-angle-right-min').on('click', function(){
    $('.main_visual').slick('slickNext');
});

$('.slider .news_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    slidesToShow:3,
    centerMode:true,

    responsive: [ 
        { breakpoint: 768,
            settings: { slidesToShow: 1, centerMode:false, }
        },
    ]
});

$('.news_slider figure').eq(4).addClass('on');
$('.news_slider').on('afterChange',function(e,s,c){
    $('.news_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});

$('.scam .icon').on('click', function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
});

$( "#datepicker" ).datepicker();

$('.family_btn').on('click', function(){
    $('.familysite').slideToggle();
    $('.family_btn i').toggleClass('on');
});

//-------------------------------------------

$('.gnb>ul>li>a').on('click', function(){
    if ($(window).width() < 769 ) {

        $(this).next().slideToggle();
        $(this).parents().siblings().find('.sub01').slideUp();

    }
});

$('.mopen').on('click', function(){
    $('#header').toggleClass('on');
});

$(window).on('resize', function(){
        $('.sub01').removeAttr('style');
    });



//--------------------------
})