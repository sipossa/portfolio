$(function(){
  //헤더 위 팝업
    $(".tp-box").on("click",function(){
        $(".top-p").toggleClass("on");
    });
    
    //푸터 패밀리사이트
    $(".language").on("click",function(){
        $(this).toggleClass("on");
        
    });
    //메인 s01 슬라이더
    $('.s01-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        fade: true,
        pauseOnHover:false,
        pauseOnFocus:false,
        cssEase: 'linear',
        arrows:false,
    });
    //메인 s03 슬라이더
    $(".s03-text-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        asNavFor: '.s03-img-slider',
        prevArrow: "<div class='prev'></div>",
        nextArrow: "<div class='next'></div>",
    });
    $(".s03-img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.s03-text-slider'
    });
    $(".s03-vedio-slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        prevArrow: "<div class='prev'></div>",
        nextArrow: "<div class='next'></div>",
    });
        $(".s03-thank-slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        prevArrow: "<div class='prev'></div>",
        nextArrow: "<div class='next'></div>",
        vertical:true
    });
    
    //메인s03 달력//
    $(function() {
        $( "#datepicker" ).datepicker({
            inline: true,
            showOtherMonths: true,
            showMonthAfterYear: true,
            monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
        });
    });
    
    //메인s05탭메뉴//
    $(".s05-tabm>li").eq(0).addClass("on");
    $(".s05-tabcon>div").eq(0).show().siblings().hide();
    $(".s05-tabm>li").on("click",function(){
        var i =$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".s05-tabcon>div").eq(i).show().siblings().hide();
    });
    
    //푸터 패밀리사이트
    $(".f-right>div").on("click",function(){
        $(this).toggleClass("on");
    });
});