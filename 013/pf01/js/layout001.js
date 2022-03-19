$(function(){


//-------헤더 온 ----------------
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on')
        }else{
            $('#header').removeClass('on') 
        }
       
    });

//-----메인비주얼 동영상----------- 
$("#m01").YTPlayer({
    videoURL:'RXDExEpil50',
    containment:'#main_visual',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false, 
    quality:'highres',
});



//--------메인슬라이더----------
    // $('.main_slider').slick({
    //    arrows:false,
    //    autoplay:false,
    //    pauseOnHover:false,
       
    
    // }); 

//----------제품슬라이드----------
    $('.slider01').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        //dots:true, 
    });


//----------탭메뉴 온---------------
    $('.tab_manu li').on('click', function(){ 
        var $this= $(this); 
        var idx=$(this).index(); 
       $('.customer>div').eq(idx).addClass('on').siblings().removeClass('on');
       $this.addClass('on').siblings().removeClass('on'); 

    });


//-----------제품 온 아이콘----------
    $('#content01 .xi-angle-left-thin').on('click', function(){
        $('.slider01').slick('slickPrev');
    });
    $('#content01 .xi-angle-right-thin').on('click', function(){
        $('.slider01').slick('slickNext'); 
    });


//---------빨리 움직이는 브랜드 슬라이드-----------

    $('.slider02').slick({
        /*arrow:false가 자동으로 생성된 버튼 없애는거*/ 
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        autoplaySpeed:800, 
        //dots:true,
    });
    

    $('.slider03').slick({
        arrows:false,
        centerMode: true,
        centerPadding:"235px", 
        autoplay:false,
        autoplaySpeed:1000,

    });


    $('#content04 .xi-angle-left-thin').on('click', function(){
        $('.slider03').slick('slickPrev');
    });
    $('#content04 .xi-angle-right-thin').on('click', function(){
        $('.slider03').slick('slickNext'); 
    });


});