$(function(){
// -----------------------------------
let main = $('.main_slider')
let newS = $('.new_slider')
main.slick({
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.main_prev').on('click', function(){
    main.slick('slickPrev')
});
$('.main_next').on('click', function(){
    main.slick('slickNext')
});

newS.slick({
    arrows:false,
    slidesToShow:3,
    autoplay:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive:[
        {
            breakpoint:769,
            settings: {
                slidesToShow:1,
            }
        }
    ]
});

if ($(window).width() >= 768) {
    $('.new_wrapper').eq(4).addClass('on');
    newS.on('afterChange', function(e,s,c){
        $('.new_wrapper').eq(c+4).addClass('on').siblings().removeClass('on');
    });
} else {
    $('.new_wrapper').eq(1).addClass('on');
    newS.on('afterChange', function(e,s,c){
        $('.new_wrapper').eq(c+1).addClass('on').siblings().removeClass('on');
    });
};

$(window).on('resize', function(){
    if ($(window).width() >= 768) {
        $('.new_wrapper').eq(4).addClass('on');
        newS.on('afterChange', function(e,s,c){
            $('.new_wrapper').eq(c+4).addClass('on').siblings().removeClass('on');
        });
    } else {
        $('.new_wrapper').eq(1).addClass('on');
        newS.on('afterChange', function(e,s,c){
            $('.new_wrapper').eq(c+1).addClass('on').siblings().removeClass('on');
        });
    };
});

$('.new_prev').on('click', function(){
    newS.slick('slickPrev');
    $('.new_wrapper').removeClass('on');
});
$('.new_next').on('click', function(){
    newS.slick('slickNext');
    $('.new_wrapper').removeClass('on');
});


$('.notice_slider').slick({
    autoplay:true,
    arrows:false,
    vertical:true,
    responsive:[
        {
            breakpoint:769,
            settings: {
                vertical:false,
            }
        }
    ]
});

$('.up_case').on('click', function(){
    $('.notice_slider').slick('slickPrev')
});
$('.down_case').on('click', function(){
    $('.notice_slider').slick('slickNext')
});

$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $('.h_right').toggleClass('on');
    $(this).toggleClass('on');
});

$('.depth01>li>a').on('click', function(){
    if ($(window).width() < 768) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    };
});

$(window).on('resize', function(){
    $('.depth02').removeAttr('style');
});
// -----------------------------------
});