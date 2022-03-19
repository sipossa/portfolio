$(function(){
//-----------------------------------------------------------------
    $('.main_visual').slick({
        //arrows:false,
        autoplay:true,
        dots:true,
        prevArrow:'<div class="prev"><i class="xi-arrow-left"></div>',   /*<-arrows버튼 텍스트로 만들기. arrows는 주석처리하고하기*/
        nextArrow:'<div class="next"><i class="xi-arrow-right"></div>',
    });

    $('.main_visual figure').eq(1).addClass('on');
    $('.main_visual').on('afterChange', function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on')
        .siblings().removeClass('on');   /*<-피규어중에 몇번째놈(eq) , 시빌롱,리무브 하면 on이 붙었다 떨어졌다함*/
    });






    $('.mopen').on('click', function(){
        $('#header').toggleClass('on');
    });


    $('nav>ul>li>a').on('click', function (){
        if($('#header').hasClass('on')) {                           /*만약 #헤더가 클래스로 on을 갖고있으면*/
            $(this).next().slideToggle();                           /*this는 nav>ul>li>a에서 메뉴01,즉 하나를 지정하는것.this는 02,03도 됨 next(다음것.즉 서브메뉴)를 슬라이드토글한다*/
            $(this).parent().siblings().find('.submenu').slideUp(); /*지정한this의 부모parent의 siblings자식을 find숨긴다(섭메뉴) 슬라이드업해서.*/
        }
    });

    $(window).on('resize', function(){
        if($(window).width() > 768) {               /*만약 윈도우가 768보다 크면*/
            $('#header').removeClass('on');         /*#헤더의 on 클래스를 떼고*/
            $('.submenu').removeAttr('style')       /*.섭메뉴의 스타일을 뗀다*/
        };
    });

















//-----------------------------------------------------------------
});