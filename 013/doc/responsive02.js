$(function(){
//---------배너 슬라이드업!(아이콘을 클릭했을때)----------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(400);
});
//-----------------------------------------------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:2000,
    fade:true,
    speed:1000,

});
//-----------마지막 섹션 breakpoint는 반응형------------------------------------------
$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
      ]

});
//-----------------------------------------------------
$('#link select').on('change', function(){
    var lnk = $(this).val();
    if(lnk) window.open(lnk)
    
});

//--------------반응형 내비 아이콘-------------------------------------
$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');

});




//-----------------------------------------------------
});