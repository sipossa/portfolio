$(function(){
// ------------------------------------------
$('#main').fullpage({
    anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
    // navigation: true,
    afterLoad: function(origin, destination, direction){
        let idx = destination.index;
        let txt = $('.navbar>li').eq(idx).find('a').text();
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('.navbar>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.now').text(txt);
        idx == 0 ? $('.header').animate({top:0}, 500) : $('.header').animate({top:-100}, 500);
        idx > 0 ? $('.wheel').fadeOut() : $('.wheel').fadeIn();
    },
});

$('.b_slider').slick({
    arrows:false,
    asNavFor:'.b_slider',
    autoplay:true,
});

$('.brand_name li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
    let idx=$(this).index();
    $('.b_slider').slick('slickGoTo', idx);
});

$('.brand_name li').eq(0).addClass('on')
$('.b_slider').on('afterChange', function(e,s,c){
    $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
});

$('.all_open').on('click', function(){
    $(this).toggleClass('on');
    $('.all_menu').slideToggle();
    if ($(this).hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    } else {
        $.fn.fullpage.setAllowScrolling(true);
    };
});

$('.all_menu a').on('click', function(){
    $('.all_menu').slideUp();
    $.fn.fullpage.setAllowScrolling(true);
    $('.all_open').removeClass('on');
});





// ------------------------------------------
});