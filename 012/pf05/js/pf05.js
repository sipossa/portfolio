$(function(){
// ---------------------------------------------

var fp= $('.fullpage');
fp.fullpage({
    anchors:['s01','s02','s03','s04'],
    css3:false,
    afterLoad: function(origin, destination, direction){
        var idx= destination.index;
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        if (idx > 0) {
            $('.header').addClass('on');
            $('.header h1').addClass('on');
        } else {
            $('.header').removeClass('on')
            $('.header h1').removeClass('on');
        };
        if (idx == 1 || idx == 3 || idx == 4) {
            $('nav').addClass('cc')
        } else {
            $('nav').removeClass('cc')
        };
    },
});

$('.sns').on('click', function(){
    $('.header, .sns ul').toggleClass('active')
})

var pr01= $('.product_slider01').slick({
    arrows:false,
    asNavFor:'.product_slider02',
    fade:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    autoplay:true,
});

$('.left_con .dots_box ul li').eq(0).addClass('on')
pr01.on('afterChange', function(e,s,c){
    $('.left_con .dots_box ul li').eq(c).addClass('on').siblings().removeClass('on');
});

$('.play').hide();
$('.pause').show();
$('.play').on('click', function(){
    pr01.slick('slickPlay');
    $(this).hide();
    $('.pause').show();
})

$('.pause').on('click', function(){
    pr01.slick('slickPause');
    $(this).hide()
    $('.play').show();
})

var pr02= $('.product_slider02').slick({
    arrows:false,
    asNavFor:'.product_slider01',
    fade:true,
});

$('.txt_slider figcaption').eq(0).addClass('on')
pr01.on('afterChange', function(e,s,c){
    $('.txt_slider figcaption').eq(c).addClass('on').siblings().removeClass('on');
});

$('.sc04_slider').slick({
    arrows:false,
    slidesToShow:2,
    infinite:false,
});




// ---------------------------------------------
});