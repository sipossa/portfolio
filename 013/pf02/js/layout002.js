$(function(){

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on')
        }else{
            $('#header').removeClass('on')
        }
       
    });






    $("#m01").YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=M9FJoH7HUQA', 
        containment:'#main_visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false, 
    });



    $('.content').slick({
        arrows:false,
        //autoplay:true,
        slidesToShow: 3,

        autoplay:true,
        //dots:true, 

    });


    $('#section01 .xi-angle-left-thin').on('click', function(){
        $('.content').slick('slickPrev');
    });
    $('#section01 .xi-angle-right-thin').on('click', function(){
        $('.content').slick('slickNext'); 
    });









    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/oPY_zOWFr7s',
        containment:'self',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    });

    $('#section02 i.xi-pause').on('click', function(){
        $('#mv01').YTPPause();
    });
    $('#section02 i.xi-play').on('click', function(){
        $('#mv01').YTPPlay();
    });
    $('#section02 i.xi-tv').on('click', function(){
        $('#mv01').YTPFullscreen();
    });






    $('.tab_content').slick({ 
        arrows:false,
        autoplay:false,
        slidesToShow: 1,
        dots:true, 
        fade:true, 
        cssEase: 'linear'
    });









    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:3000,
        fade:true,
        speed:1000,
});




    // $('.tab_menu li').on('click', function(){ 
    //     var $this= $(this); 
    //     var idx=$(this).index(); 
    //    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    //    $this.addClass('on').siblings().removeClass('on'); 

    // });





    $('#toTop').on('click', function(){
        $('html, body').animate({scrollTop:0},600)
    });
    



    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        if(sct>400) {
            $('#toTop').fadeIn()
        }else{
            $('#toTop').fadeOut()
        }
        //sct>400 ? $('#toTop').fadIn()  :  $('#toTop').fadeOut();
        $('#scroll_banner').css({top:300+sct});
    
    });


});

