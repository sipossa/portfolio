$(function(){
    $('#full-wrap').fullpage({
		//options here
        anchors:['s01', 's02', 's03', 's04', 's05'],
		autoScrolling:true,
		scrollHorizontally: true,
        afterLoad: function(origin,destination){
            
            $('.section').eq(destination.index).addClass("on").siblings().removeClass("on");
            $('.menu-right li').eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });
	
    $('.xi-bars').click(function(){
        $('.popup').addClass('on')
    });
    $('.xi-close').click(function(){
        $('.popup').removeClass('on')
    });


    //slick
    $('.slider-wrap>div').slick({
        arrows:false,
        autoplay:true,
        swipe:false,
        asNavFor: '.slider-wrap>div'
    });
    $('.slider-num li').eq(0).addClass('on');
    $('.slider-wrap>div').on('afterChange',function(event,silck,currentSlide){
        $('.slider-num li').eq(currentSlide).addClass('on').siblings().removeClass('on');
    });
    $('.slider-num li').click(function(){
        var idx=$(this).index();
        $('.slider-wrap>div').slick('slickGoTo',idx);
        $(this).addClass('on').siblings().removeClass('on')
    })
})