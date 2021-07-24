$(function(){
    // 스크롤이벤트
    $(window).on('scroll',function(){
        var wst=$(window).scrollTop();
        $('.section').each(function(){
            var this_top=$(this).offset().top;
            if(wst>this_top-300) {
                $(this).addClass('on');
            }
            if(wst<500) {
                $('.section').removeClass('on');
            }
        })
    });

    // 메인 슬라이드 
    $('.main-slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    $(".main-slide figure").eq(1).addClass("on");
    $(".main-slide").on("afterChange", function(slick,event,currnetSlide){
        $(".main-slide figure").eq(currnetSlide+1).addClass("on").siblings().removeClass("on");
    });
    
   

    // 멤버쉽,로그인
    $('.choice>a').on('click',function(){
        var idx=$(this).index();
        
        $('#choice-box>div').eq(idx).show().siblings().hide();
    });
    $('#choice-box .xi-close-min').click(function(){
        $('#choice-box>div').hide();
    });
    
    // steady seller 슬라이드
    $('.best-slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        draggable: false,
        dots:true,
    });
    $("#section02 .best-slide .visual").eq(1).addClass("on");
    $('.best-slide').on("afterChange", function(slick,event,currnetSlide){
        $("#section02 .best-slide .visual").eq(currnetSlide+1).addClass("on").siblings().removeClass("on");
    });
    $('.slick-next').on("click",function(){
        $('.best-slide').slick("slickNext");
    });

    // media slide
   
    $('.mitem01').slick({
        fade: true,
        arrows:false,
        draggable: false,
        pauseOnHover:false,
        pauseOnFocus:false,
        asNavFor:'.m-slide',
    });
    $('.mitem02').slick({
        arrows:false,
        draggable: false,
        pauseOnHover:false,
        pauseOnFocus:false,
        asNavFor:'.m-slide',
    });
    $('.mitem03').slick({
        arrows:false,
        draggable: false,
        pauseOnHover:false,
        pauseOnFocus:false,
        vertical:true,
        asNavFor:'.m-slide',
    });
    $('.mitem04').slick({
        arrows:false,
        fade: true,
        autoplay:true,
        autoplaySpeed:3000,
        draggable: false,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:500,
        asNavFor:'.m-slide',
    });
    $('#section09 .xi-angle-left-thin').on("click",function(){
        $('.m-slide').slick('slickPrev');
	});
    $('#section09 .xi-angle-right-thin').on("click",function(){
        $('.m-slide').slick('slickNext');
    });

    //모바일 메뉴 버튼 
    $('.mopen').on('click',function(){
        $(this).toggleClass('on')
        $('header nav .menu').toggleClass('on')
        $('header nav h1').toggleClass('on')
    });
    $('header nav .menu>li>a').on('click',function(){
        if($('header nav .menu').hasClass('on')){
           $(this).toggleClass('on');
           $(this).parent().siblings().find('a').removeClass('on')
        }
    });
    $(window).on('resize',function(){
        $('header nav .menu').removeClass('on');
        $('header nav .menu>li').removeClass('style')
    });
})