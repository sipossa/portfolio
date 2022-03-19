$(function(){

$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(400); //속도기본값:400, 1초:1000
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,//클릭할때 멈추는
    fade:true, //사라지는 효과
    speed:1000,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    //아래부분이 반응형으로 max-width:768px일때 변경되는 부분
    responsive: [
        {
          breakpoint: 768, //max-width값 넣기
          settings: {
            slidesToShow: 1,
          }
        },
        
      ]
});

$('#link select').on('change', function(){
    var lnk = $(this).val(); //lnk는 임의로 정해준 이름
    if(lnk) {window.open(lnk)}  //이렇게 적어줘야 family site 클릭했을 때 창이 안뜸
    
});

$('#header .mopen').on('click', function(){
    $('#header .container nav').toggleClass('on');
    $(this).toggleClass('on');
});



})