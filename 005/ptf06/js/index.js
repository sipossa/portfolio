$(function(){


    //모바일 버튼

    $(".header-btn").on("click", function(){
        $("header").toggleClass("on");
        $(this).toggleClass("on");
    })

    //서치 클릭

    $("#header .xi-search").on("click", function(){
        $("#search_main").slideToggle(100);
    })

    //메인 슬라이드
    $(".main-slide").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        fade:true,
        pauseOnHover:false,
    })


    // 카테고리 슬라이드
    $("#kategorie>div").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000,
        fade:true,
        // pauseOnHover:false,
    })

    $(".xi-angle-left-thin").on("click", function(){
        $("#kategorie>div").slick("slickPrev")
    })

    $(".xi-angle-right-thin").on("click", function(){
        $("#kategorie>div").slick("slickNext")
    })


    //카테고리 모바일 버튼
    $("#kategorie>div figure").on("click", function(){
        $(this).toggleClass("on");
    })


    //콘텐츠 슬라이드
    $(".contents-wrap").slick({
        arrows:false,
        // dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        // fade:true,
        pauseOnHover:false,
        slidesToShow:7,
        centerMode:true,
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:3,
            }
          
        }]
    })
})