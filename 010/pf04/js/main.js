$(function(){


    $('.fullpg').fullpage({
        anchors:['#01', '#02', '#03', '#04', '#05', '#06', '#07'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Limited Edition', 'Best Sellers', 'New Prouct', 'Product Type', 'Collection', 'SNS', 'Info'],
        keyboardScrolling:true,
        responsiveWidth:769,
       

    });


    $('header h1').on('click', function(){
        $.fn.fullpage.moveTo(1);
    }); //로고클릭시 첫페이지에 가도록

    $('header .open i.xi-bars').on('click', function(){
        $('header .menu').addClass('on');
    });
    $('header .menu .xi-close').on('click', function(){
        $('header .menu').removeClass('on');
    });

    $('.video .more h2').on('click', function(){
        $('.video .more').toggleClass('on');
    });

    

    $('.movie').YTPlayer({
        videoURL:'https://youtu.be/6genllKMf4Y',
        containment:'body',
        autoPlay:true, 
        mute:true, 
        loop:true,
        useOnMobile:false,
        startAt:0, 
        opacity:1,
        showControls:false,
        quality:'highres',
    });

    $('.video_btn i.xi-play').on('click',function(){
        $('.movie').YTPPlay();
    });
    $('.video_btn i.xi-pause').on('click',function(){
        $('.movie').YTPPause();
    });
    $('.video_btn i.xi-volume-up').on('click',function(){
        $('.movie').YTPUnmute();
    });
    $('.video_btn i.xi-volume-off').on('click',function(){
        $('.movie').YTPMute();
    });

    $('.best_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:6000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
        fade:true,
        dots:true,

        responsive: [ 
            { breakpoint: 768,
                settings: { dots:false, }
            },
        ]

    });



    $('.best_video01').YTPlayer({
        videoURL:'https://youtu.be/1n9dsTyK_ds',
        containment:'.mv01',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,



    });

    $('.best_video02').YTPlayer({
        videoURL:'https://youtu.be/YLM9EMPG4kk',
        containment:'.mv02',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.best_video03').YTPlayer({
        videoURL:'https://youtu.be/nVb788xe7TA',
        containment:'.mv03',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });


    $('.tabmenu>li').on('click', function(){

        var idx= $(this).index();
        //console.log(idx);
        $(this).addClass('on').siblings().removeClass('on');
        $('.tabcontent_list').eq(idx).addClass('on').siblings().removeClass('on');
        
    });


    $('.tab_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:4,

        responsive: [ 
            { breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
        ]
    });



    //section04 - product type

    $('.type_prd .xi-angle-left').on('click',function(){
        $('.tab_slider').slick('slickPrev');
    });
    $('.type_prd .xi-angle-right').on('click',function(){
        $('.tab_slider').slick('slickNext');
    });


    $('.type_prd .search i.xi-filter').on('click', function(){
        $('.type_prd .filter').addClass('on');
    });

    $('.type_prd .filter .filter_list .sub>li').on('click',function(){
        var idx= $(this).index();
        console.log(idx);
        $(this).toggleClass('on').siblings().removeClass('on');
       $(this).parent().siblings().removeClass('on');
    });

    $('.type_prd .filter .btn').on('click', function(){
        $('.type_prd .filter').removeClass('on');
    })


    $('.collection .content .col').on('click', function(){
        $(this).next('.col_des').addClass('on').siblings().removeClass('on');
    });

    
   //-----------------------------------------

   $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
    
   });



   $('header .menu01>li>a').on('click', function(){
        if ($(window).width() < 769 ) {
        $(this).next().slideToggle();
        $(this).parents().siblings().find('.menu02').slideUp();
        }
    });

    



    $(window).resize(function() {
        if($(window).width() < 768) {

        

    } });

})