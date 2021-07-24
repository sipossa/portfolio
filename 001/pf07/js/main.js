$(document).ready(function(){
//제이쿼리 시작
    
    $(window).resize(function(){
        $("nav>ul>li").removeAttr("style");
    });
    
    $(".s-menu>li").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on");
        }
    });
    
    $("nav>ul>li").mouseenter(function(){
        if($(window).width() > 768){
            $(this).find("ul").show();
        }
    });
    $("nav>ul>li").mouseleave(function(){
        if($(window).width() > 768){
            $(this).find("ul").hide();
        }
    });
    
    $("nav>ul>li").click(function(){
        if($(window).width() < 769){
            $(".s-menu").hide();
            $(this).find("ul").stop().slideDown();
        }
            });

    $(".down-bt").hover(function(){
        if($(window).width() > 768){
            $(".down-hover").addClass("on")}},function(){if($(window).width() > 768){
            $(".down-hover").removeClass("on")}
            });
    $(".down-bt").click(function(){
        if($(window).width() < 769){
            $(this).addClass("on");
        }
    });
    
    $("#sec1-main").addClass("on");
    if($(window).width() > 768){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec1-main").offset().top +1200){
            $("#sec1-main").removeClass("on");}
        else {$("#sec1-main").addClass("on");}
        });
    }
    if($(window).width() < 769){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec1-main").offset().top +2000){
            $("#sec1-main").removeClass("on");}
        else {$("#sec1-main").addClass("on");}
        });
    }

    $(".sec1bt-l").hover(function(){
        if($(window).width() > 768){
            $("#google>div>img").attr("src","img/google-w.png");}},function(){
        if($(window).width() > 768)     {$("#google>div>img").attr("src","img/google.png");
        }});

    $(".sec1bt-r").hover(function(){
        if($(window).width() > 768){
                $("#apple>div>img").attr("src","img/apple-w.png");}},function(){
            if($(window).width() > 768){
                $("#apple>div>img").attr("src","img/apple.png");
        }});
            
    $("#sec2-img>div").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on");
        }});
    $(".sec2-bottom").hover(function(){
        if($(window).width() > 768){
        $(this).addClass("on");}},function(){
        if($(window).width() > 768){
        $(this).removeClass("on");
        }
    });
    
    if($(window).width() > 768){
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView:3,
            loop:true,
    //      grabCursor: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 2500,
            },
            speed:500,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        });
    }
    
    if($(window).width() < 769){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView:1,
            loop:true,
    //      grabCursor: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 2500,
            },
            speed:500,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        });
    }
    
    $(".sec3-button").hover(function(){
        if($(window).width() > 768){
        $(this).addClass("on");}},function(){
        if($(window).width() > 768){
        $(this).removeClass("on")
    }});
    
    
    $(".sec4-button").hover(function(){
        if($(window).width() > 768){
        $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on")}
    });
    
    $(".sec5-button").hover(function(){
        if($(window).width() > 768){
        $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on")}
    });
    
    if($(window).width() > 768){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec4-connect").offset().top -600){
            $("#sec4-connect").addClass("on");}
        else {$("#sec4-connect").removeClass("on");}
        });
    }
    if($(window).width() < 769){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec4-connect").offset().top -100){
            $("#sec4-connect").addClass("on");}
        else {$("#sec4-connect").removeClass("on");}
        });
    }
    
    if($(window).width() > 768){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec5-soho").offset().top -600){
            $("#sec5-soho").addClass("on");}
        else {$("#sec5-soho").removeClass("on",{duration:0});}
        });
    }
    if($(window).width() < 769){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#sec5-soho").offset().top -100){
            $("#sec5-soho").addClass("on");}
        else {$("#sec5-soho").removeClass("on",{duration:0});}
        });
    }


    $(".bannerbt-l").hover(function(){
        if($(window).width() > 768){
            $("#goole-b>div>img").attr("src","img/google-w.png");}},function(){
        if($(window).width() > 768){
            $("#goole-b>div>img").attr("src","img/google.png");
        }});

    $(".bannerbt-r").hover(function(){
        if($(window).width() > 768){
            $("#apple-b>div>img").attr("src","img/apple-w.png");}},function(){
        if($(window).width() > 768){
            $("#apple-b>div>img").attr("src","img/apple.png");
        }});
    
    $(".banner1-text>ul>li").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on");
        }
    });

    $(".t-story").hover(function(){
        if($(window).width() > 768){
        $("#t-storyt-i>img").attr("src","img/footer-td.png");}},function(){
        if($(window).width() > 768){
        $("#t-storyt-i>img").attr("src","img/footer-t.png");
        }});
    
    $("#footer-box>ol>li").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on");
        }
    });
    
    $("#footer-box>ul>li").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on");
        }
    });
    
//        모바일 메뉴
    $(".bar").click(function(){
        if($(window).width() < 769){
            $(this).toggleClass("on");
            $("nav").toggleClass("on");
            $(".bar-back").toggleClass("on");
            }
        });
            
            
            

//제이쿼리 끝
});