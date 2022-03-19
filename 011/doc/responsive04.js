$(function(){
//--------------------------------------------
$('.main_slider').slick({
    arrows:false,
    
});

$('.gnb>ul>li>a') .on('click',function(e){
    if($('.gnb').hasClass('on')) { //hasClass('on') 사이즈에상관없이 가능하게
        e.preventDefault(); //-링크걸려있는데로 가지마라
        $(this).next().stop().slideToggle();//slideToggle()부드럽게슬라이드로나옴
        $(this).parent().siblings().find('.submenu').stop().slideUp();//클릭했을때 서브메뉴 하나만 보이게
        //$('.submenu').hide();같음

    }
    
});




$('.mopen').on('click', function(){ //리스트아이콘을 클릭하면 나와라 
    $('.gnb').toggleClass('on'); 
    $('.sns').fadeToggle(); //fadeToggle();나타낫다사라져라
});





$(window).on('resize', function(){
    $('.submenu').removeAttr('style') //윈도우사이즈로 돌아갔을때 원래 스타일로 돌아와라
});
//--------------------------------------------

})