$(function(){
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });


    $(".slider-btn.prev").on("click",function(){
        $(".main-slider").slick("slickPrev");
    });
    $(".slider-btn.next").on("click",function(){
        $(".main-slider").slick("slickNext");
    });

    $(".top-banner span").on("click", function(){
        $(".topwrap").toggleClass("on");
        $(this).toggleClass("on");
    });

    $(".top-banner span").hover(function(){
        $(this).find("a").css({color:"#f00"})
    },function(){
        $(this).find("a").css({color:"#fff"})
    });


    $(".event-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow: 4,
    });

    $(".sns-slider").slick({
        arrows:false,
        //dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        //pauseOnHover:false,
        //pauseOnFocus:false,
        slidesToShow: 8,
    });   

    var mot=$("#main-slogan").offset().top;
    var mst=$("#main-store").offset().top;


    //메인 스크롤 이벤트
    $(window).on("scroll", scEvent01);
    function scEvent01(){
        var sct=$(window).scrollTop();
        if(sct>mot-500) {
            $("#main-slogan").addClass("on");
        }else{
            $("#main-slogan").removeClass("on");
        }
    }


    $(window).on("scroll", scEvent02);
    function scEvent02(){
        var sct=$(window).scrollTop();
        if(sct>mst-500) {
            $("#main-store").addClass("on");
        }else{
            $("#main-store").removeClass("on");
        }
    }

    $(".sns-slider").on("mousemove", moMove);    
    function moMove(e){
        if(e.pageX < $(this).width() / 2){
            $(".sns-slider").slick("slickPrev")
        }else{
            $(".sns-slider").slick("slickNext")
        } 
    }

    //폼테그 링크 이동

    $("#family select").on("change", goLink);
    function goLink(){
        var lnk=$(this).val();
        if(lnk){
            window.open(lnk);
        }
        
    }


});