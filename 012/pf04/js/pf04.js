$(function(){
// ---------------------------------------------------------------
var visual = $('.main_slider');
var logo = $('.logo_menu li')

visual.slick({
    arrows:false,
    fade:true,
    autoplay:true,
    speed:500,
    autoplaySpeed:4500,
    infinite:true,
    pauseOnFocus:false,
    pauseOnHover:false,
});

logo.eq(0).addClass('on')
visual.on('afterChange', function(e,s,c){
    // console.log(c);
    logo.eq(c).addClass('on').siblings().removeClass('on');
});

logo.on('click', function(){
    var idx= $(this).index();
    // console.log(idx);
    visual.slick('slickGoTo', idx)
});

$('.h_left').on('click', function(){
    $('.gnb_wrap').toggleClass('on');
    $('.gnb').toggleClass('on');

    var sct = $(window).scrollTop()
    // console.log(sct);
    if (sct > 0) {
        $('#header').addClass('on')
    } else {
        $('#header').toggleClass('on');
    };

    if ($('.search_wrap').hasClass('on')) {
        $('html, body').addClass('noScroll')
    } else {
        $('html, body').toggleClass('noScroll');
    };

    $('.search_wrap').removeClass('on');
});

$('.gnb_close_bg').on('click', function(){
    $('.gnb_wrap, .gnb').removeClass('on');
    $('html, body').removeClass('noScroll')
})

$('.depth01>li>a').on('click', function(){
    if ($(window).width() < 769) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').stop().slideUp();
    };
});

$(window).on('resize', function(){
    if ($(window).width() > 768) {
        $('.depth02').removeAttr('style');
    }
})

$(window).on('scroll', function(){
    var sct= $(this).scrollTop()
    // console.log(sct);
    if (sct > 0) {
        $('#header').addClass('on')
    } else {
        $('#header').removeClass('on')
    };
});

$('.room_slider').on('init reInit afterChange', function(e,s,c){
    // console.log(c,s.slideCount);
    var i = (c ? c : 0);
    $('#sc01 .snum').text("0" + (i+1));
});

$('.dining_slider').on('init reInit afterChange', function(e,s,c){
    // console.log(c,s.slideCount);
    var i = (c ? c : 0);
    $('#sc02 .snum').text("0" + (i+1));
});

var room = $('.room_slider').slick({
    autoplay:true,
    arrows:false,
    asNavFor:'.r_text_slider',
    draggable:true,
    responsive:[
        {
            breakpoint:769,
            settings: {
                slidesToShow:1,
                centerMode:true,
                centerPadding:'0',
            }
        }
    ]
});

$('.r_text_slider').slick({
    arrows:false,
    fade:true,
    asNavFor:'.room_slider',
    draggable:false,
});

$('#sc01 i.xi-angle-left-thin').on('click', function(){
    $('.room_slider').slick('slickPrev');
});
$('#sc01 i.xi-angle-right-thin').on('click', function(){
    $('.room_slider').slick('slickNext');
});

$('.dining_slider').slick({
    autoplay:true,
    arrows:false,
    asNavFor:'.d_text_slider',
    draggable:true,
    responsive:[
        {
            breakpoint:1000,
            settings: {
                slidesToShow:1,
                centerMode:true,
                centerPadding:'0',
            }
        }
    ]
});

$('.d_text_slider').slick({
    arrows:false,
    fade:true,
    asNavFor:'.dining_slider',
    draggable:false,
});

$('#sc02 i.xi-angle-left-thin').on('click', function(){
    $('.dining_slider').slick('slickPrev');
});
$('#sc02 i.xi-angle-right-thin').on('click', function(){
    $('.dining_slider').slick('slickNext');
});

$('.event_slider').slick({
    arrows:false,
    slidesToShow:3,
    swipeToSlide:true,
    responsive:[
        {
            breakpoint:769,
            settings: {
                slidesToShow:2,
                centerPadding:'0',
            }
        },
        {
            breakpoint:450,
            settings: {
                slidesToShow:1,
                centerMode:true,
                centerPadding:'0.75rem',
            }
        }
    ]
});

$('#sc03 i.xi-angle-left-thin').on('click', function(){
    $('.event_slider').slick('slickPrev');
});
$('#sc03 i.xi-angle-right-thin').on('click', function(){
    $('.event_slider').slick('slickNext');
});

$('#header i.xi-search').on('click', function(){
    $('.search_wrap').toggleClass('on');
    if ($('.gnb_wrap').hasClass('on')) {
        $('html, body').addClass('noScroll')
    } else {
        $('html, body').toggleClass('noScroll');
    };
    $('.gnb_wrap, .gnb').removeClass('on');
});

$('.search_close').on('click', function(){
    $('.search_wrap').removeClass('on');
    $('html, body').removeClass('noScroll');
})

$('.search_close_bg').on('click', function(){
    $('.search_wrap').removeClass('on');
    $('html, body').removeClass('noScroll');
})

$('.h_right i.xi-user-o').on('click', function(){
    $('.login_wrap, .login').toggleClass('on');
    if ($('.gnb_wrap' && '.search_wrap').hasClass('on')) {
        $('html, body').addClass('noScroll');
    } else {
        $('html, body').toggleClass('noScroll');
    };
    $('.gnb_wrap, .gnb').removeClass('on');
    $('.search_wrap').removeClass('on');
});

$('.login_close').on('click', function(){
    $('.login_wrap, .login').removeClass('on');
    $('html, body').removeClass('noScroll');
});

$('.login_close_bg').on('click', function(){
    $('.login_wrap, .login').removeClass('on');
    $('html, body').removeClass('noScroll');
});



// ---------------------------------------------------------------
})