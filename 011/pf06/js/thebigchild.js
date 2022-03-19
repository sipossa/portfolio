$(function(){
//-----------------------------------------

    //검색버튼
    $("nav .xi-search").on("click", function(){
        $("header .search").slideToggle();
    });   

    $("#search_top").on("submit", function(){
        let seachVal=$("#searchInput").val();                
        if(!seachVal) alert("검색어를 입력하세요!");
    })

AOS.init();


//헤더
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0) {
        $('.header').addClass('on');
    }else{
        $('.header').removeClass('on');
        
    }
   
});

//메인슬라이더
$('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2600,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        
});



$('.main_slider figure .bar').eq(1).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    //console.log(c);
    $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
})


//접종

$('.con04_slide').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    speed:1500,
    pauseOnHover:false,
    pauseOnFocus:false,

    
});



//스크롤탑
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0}, 600)
});

$(window).on('scroll', function(){
var sct=$(window).scrollTop();
if(sct>3000) {
    $('#toTop').fadeIn()
}else{
    $('#toTop').fadeOut()
}
});

//반응형

$('.mopen').on('click', function(){ 
    $('.gnb').toggleClass('on'); 
    $('.top_nav').toggleClass('on');
    $(this).toggleClass('on');
});


$('.depth01>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
    
});


$(window).on('resize', function(){
    $('.depth02').removeAttr('style')
});

//-----------------------------------------------------
})



