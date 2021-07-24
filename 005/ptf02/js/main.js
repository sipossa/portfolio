$(function(){

    //서치
    $(".m_right .xi-search").on("click", function(){
        $(".search").toggleClass("on");
    })

    // 메인슬라이드
    $(".main_silider").slick({
        arrows:false,
        fade:true,
        autoplay:true,
    })

    // 공지사항 슬라이드
    $(".notice_left_slider").slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
    })

    $(".research_slider").slick({
        arrows:false,
        slidesToShow:1,
        asNavFor: '.research_slider_text'
    })


    // 연구성과 슬라이드
    $(".research1_right_slider").slick({
        arrows:false,
        dots:true,
    })

    $(".research_slider_text").slick({
        arrows:false,
        asNavFor: '.research_slider'
    })

    $("#research .xi-angle-left-thin").on("click", function(){
        $(".research_slider").slick("slickPrev");
        //$(".research_slider_text").slick("slickPrev");
    })

    $("#research .xi-angle-right-thin").on("click", function(){
        $(".research_slider").slick("slickNext");
        //$(".research_slider_text").slick("slickNext");
    })

    // 뉴스 슬라이드
    $("#news>div").slick({
        arrows:false,
        autoplay:true,
        vertical:true,
        pauseOnHover:false,
    })



    // -----------------------------------------------
    // 반응형 768px
    // -----------------------------------------------


    // 메인 서치
    $(".m_top .xi-search").on("click", function(){
        $(".search").toggleClass("on");
    })

    // 메인 버튼
    $(".m_top .bars").on("click", function(){
        $(".m_menu").toggleClass("on");
        $(".m_top .bars span").toggleClass("on");
    })

    // 메인 텝메뉴
    $(".m_menu_main>li").on("click", function(){
        var idx=$(this).index();
        $(".m_menu_sub ul").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    })


})