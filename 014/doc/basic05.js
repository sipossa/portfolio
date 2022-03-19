$(function(){
//---------------------------------------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
});
    
//function topPannerClose(){
//   $('#top_banner').hide();
//} 이런다른방법임! 


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});



//-----------메인 밑에 슬라이드 5개보여주는거--------------------------------//

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true, --------------> 슬라이드 센터모드 
    //centerPadding:"80px",
    pauseOnHover:false,
    pauseOnFocus:false,
});

//----------------->가운데꺼 커지는 효과
$('.pr_slider figure').eq(7).addClass('on')
$('.pr_slider').on('afterChange', function(e,s,c){
    // c = 1,2....
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $('#product03 .slide_bar>span').css({left:c*100})
});



//----------------------제품 02 지그재그한거 슬라이드----------------------//
$('.pic').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    asNavFor:'.pic',
});

//----------------------제품 04  화살표 슬라이드----------------------//
$('.pr_slider02').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true, --------------> 슬라이드 센터모드 
    //centerPadding:"80px",
    pauseOnHover:false,
    pauseOnFocus:false,
});
    
$('#product04 .container .con i.xi-arrow-left').on('click', function(){  //----->버튼
    $('.pr_slider02').slick('slickPrev')
});

$('#product04 .container .con i.xi-arrow-right').on('click', function(){
    $('.pr_slider02').slick('slickNext')
});


//----------------탭슬라이드----------------//
$('.tab_maeu li').on('click', function(){
    var idx=$(this).index();
    //$('.tab_con>div').eq(idx).show().siblings().hide();      
    $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on'); 
});                                                             //----->까지는 클릭하면 내용바뀜



                                          //------------>부터는 슬라이드 돌림. html에선 figure에 이미지넣엇음 
$('.tab_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow:4,
    //centerMode:true,                   ----------->슬라이드 양옆에 살짝씩 걸침//
    pauseOnHover:false,
    pauseOnFocus:false,
    
});







//--------------푸터 링크탭에서 새창열기--------------//
$('#link select').on('change', function(){
    var link=$(this).val();
    if(link) {window.open(link)}
});








//---------------------------------------------------------------------------------------
});