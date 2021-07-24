$(function(){


    // main
    $(".main_slider").slick({
        arrows:false,
        fade:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
    })

    // 스크롤이벤트

    $(window).on("scroll", function(){
        var sct=$(window).scrollTop();
        $(".section").each(function(){
            var this_top=$(this).offset().top;
            sct>this_top-400 ? $(this).addClass("on") : $(this).removeClass("on");
        })
    })

    // event
    $(".event_wrap").slick({
        arrows:false,
        vertical:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
    })

})