$(function(){
//--------------------------------

$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
   // $('#top_banner').hide();//
});

$('#main_visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000, //기본이 3000 (3초)
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('#product03 .pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    //centerMode:true, //1번이 가운데로 위치하도록 (가장자리가 표시됨,container라인에 안맞음)
   //centerPadding:"100px", //기본이 60px
});

$('#product03 .pr_slider').on('afterChange', function(e,s,c){ 
    //console.log(c) //c는 숫자가 표시됨, c=1,2,3,...
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on'); //c+숫자 숫자는 slidesToShow:에서 몇개가 표시되느냐에 따라 달라짐,
    $('#product03 .slide_bar>span').css({left:c*100})//슬라이드바가 움직이도록
});

$('.pic').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    asNavFor:'.pic', //위 아래 슬라이드가 같이 움직이도록
});


$('#product04 .pr_slider02').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:2,
    slidesToScroll: 2,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('#product04 .container .con i.xi-arrow-left').on('click', function(){
    $('#product04 .pr_slider02').slick('slickPrev')
});
$('#product04 .container .con i.xi-arrow-right').on('click', function(){
    $('#product04 .pr_slider02').slick('slickNext')
});


$('#tab_slider .tab_menu li').on('click', function(){
    var idx=$(this).index();
    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on'); //div(공간)으로 잡아줌
});


$('#tab_slider .tab_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:4,
    centerMode:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('#link select').on('change', function(){
    var link=$(this).val(); //value값을 준다
    if(link) window.open(link) //창을 열어라
});
//-----------------------------------
});