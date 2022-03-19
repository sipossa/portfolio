$(function(){
    //-----------------------

    //메인슬라이드
$('.main_slider').slick({
    arrows:false, //버튼이 없어짐//
    autoplay:true,
    pauseOnHover:false,//마우스올렸을 때 멈추도록//
});

    //메인슬라이드 버튼클릭시 앞뒤슬라이드로 움직임
$('#main_visual span.left').on('click',function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual span.right').on('click',function(){
    $('.main_slider').slick('slickNext');
});

    //메인슬라이드
$('#main_visual .list li').on('click',function(){
    var idx=$(this).index();  //내가 누르는 '이것'에 이름(숫자)을 지어줌
    console.log(idx); //클릭했을 때 콘솔에 '이름(숫자)'이 나오도록
    $('.main_slider').slick('slickGoTo',idx); //클릭했을 때 해당 슬라이드가 나오도록
    $(this).addClass('on').siblings().removeClass('on');//클릭했을때 해당된거에만 클래스on붙이고 나머지는 on빼라
})   

var z=1;
    //슬라이드 돌아가거나 버튼 눌렀을 때 탭에 클래스 적용되도록
$('#main_visual .list li').eq(0).addClass('on'); //첫슬라이드시작에 클래스on적용하려면 eq(c)입력,html에 첫 li에 클래스 on주기
$('.main_slider').on('afterChange',function(e,s,c){
    console.log(c); // 클릭했을 때 콘솔에 '숫자'가 나오도록
    $('#main_visual .list li').eq(c).addClass('on').siblings().removeClass('on'); //슬라이드 돌아가면 탭에 클래스 on 자동으로 붙도록
    $('#main_visual .photo').css({transform:'rotate('+360*z+'deg)'})
    z++;
})


    //제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:3, //몇개씩 보이도록 하는지//
    dots:true, //밑에 점이 나오도록//


});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});

$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});



    //-----------------------------
})