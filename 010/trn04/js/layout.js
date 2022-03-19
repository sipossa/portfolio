$(function(){
//--------------------

$('#popup').draggable();
$('#popup a').on('click', function(){
    $(this).parent().fadeOut();
    return false();
})

$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    sct > 300 ? $('#totop').fadeIn() : $('#totop').fadeOut();
    sct > sTop ? $('#solution').addClass('on') : $('#solution').removeClass('on');
});

$('.search').on('click', function(){
    $('.searchForm').stop().slideToggle();
});

$('.searchForm i.xi-close').on('click', function(){
    $('.searchForm').slideUp();
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
//fade 모드에서는 시작이 0, fade아닐때는 시작이 1
$('.main_slider').on('afterChange',function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});


$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:3,
    centerMode:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.pr_slider figure').eq(5).addClass('on');
$('.pr_slider').on('afterChange',function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});


$('.familylink .link>a').on('click', function(e){
    e.preventDefault(); //어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
    $(this).prev().stop().slideToggle();
    //stop(). 이벤트가 여러번 클릭해도 여러번 적용되지 않도록
    $(this).find('i').toggleClass('on');
    return false();
});

//totop
$('#totop a').on('click',e=> {
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000, function(){
        console.log('111'); //callback
    });
});

let sTop = $('#solution').offset().top;


//--------------------
})