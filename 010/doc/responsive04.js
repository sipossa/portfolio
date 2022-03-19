$(function(){

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $('.header .gnb>ul>li>a').on('click', function(e){
        //if($(window).width()<769) { //화면이 769보다 작을때 작동해라
            if($('.gnb').hasClass('on')) { //gnb가 클래스on을 가질때 작동해라
            e.preventDefault();
            //$('.sub').hide();
            $(this).next().stop().slideToggle();//그냥 보이도록 show, 보였다안보였다 toggle. 부드럽게slideToggle
            //.stop() : 실행되는 애니메이션이 멈추고나서 보이도록
            $(this).parent().siblings().find('.sub').slideUp(); //누른 메뉴의 서브메뉴만 나오고 나머지는 안나오도록, 동일한 li안에 있는게 아니기 때문에 siblings로 잡아줄 수 없음, 부모의 siblings로 잡아주기
        }
       
    });

    $(window).on('resize', function(){
        $('sub').removeAttr('style'); //화면 사이즈가 작아지면 기존에 걸려있는 style을 없애줘라
    });

    $('.mopen').on('click', function(){
        $('.header .gnb').toggleClass('on');
        $('.sns').fadeToggle();
    });
})