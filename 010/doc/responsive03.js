$(function(){
//------------------------------

$('#main_visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('#content .pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:5,
    dots:true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3, //769px 보다 작을때 3개만 표시되도록
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, //600px 보다 작을때 1개만 표시되도록
            }
          },
      ]

});

$('#content .arrows i.xi-arrow-left').on('click', function(){
    $('#content .pr_slider').slick('slickPrev');
});
$('#content .arrows i.xi-arrow-right').on('click', function(){
    $('#content .pr_slider').slick('slickNext');
});

$('#header .container i.xi-bars').on('click',function(){
    $('nav').slideToggle();
}); //버튼 누르면 메뉴슬라이드가 나오도록

$(window).on('resize', function(){
    if($(window).width()>768) $('nav').removeAttr("style")
}); //pc에서 메뉴 안나오는걸 방지 , Attr: attribute

//------------------------------
})