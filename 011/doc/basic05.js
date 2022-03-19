$(function(){
//------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner ').hide(); 
    //$('#top_banner ').slideUp(); >천천히 올라감
});
//function topBannerClose(){
//    $('#top_banner i').hide();
//}

$('.main_slider').slick({
    arrows:false,//버튼없애기
    autoplay:true,//자동으로돌아라
    autoplaySpeed:2000,//슬라이드속도 1000=1초
    pauseOnHover:false,//마우스오버시 멈춰라
    pauseOnFocus:false,

});

$('.pic').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    asNavFor:'.pic', //슬라이드 두개 같이 돌아가게
});






$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px"<양옆에 이미지 나오는 크기
    pauseOnHover:false,//마우스오버시 멈춰라
    pauseOnFocus:false,

});



$('.pr_slider figure').eq(7).addClass('on');
$('.pr_slider').on('afterChange', function(e,s,c){
    //c = 0,1,2,3...
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $("#product03 .slide_bar>span").css({left:c*100})
})


$('.pr_slider02').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px"<양옆에 이미지 나오는 크기
    pauseOnHover:false,//마우스오버시 멈춰라
    pauseOnFocus:false,
});

$('#product04 i.xi-arrow-left').on('click', function(){
    $('.pr_slider02').slick('slickPrev');
});
$('#product04 i.xi-arrow-right').on('click', function(){
    $('.pr_slider02').slick('slickNext');
});



//footer 링크사이트 
$('#link select').on('change', function(){
    var link=$(this).val();
    if(link) window.open(link)
});




//탭메뉴슬라이더

$('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    //$('.tab_con>div').eq(idx).show().siblings().hide();
    $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
});


$('.tab_slider').slick({
    arrows:false,
    slidesToShow:4,
    centerMode:true,
    autoplay:true,
});


//------------------------------------------------------
});