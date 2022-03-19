$(function(){
/*-------------------------------------------------------------------------------*/
    $('.main_slider').slick({
        arrows:false,
    });



    $('.gnb>ul>li>a').on('click', function(e){
        if($('.gnb').hasClass('on')) {
            e.preventDefault();                                /*<-내가 가지고 있는 이벤트를 없애는 것. html에서 a href="#"에 #대신 주소쓰면 거기로가잖아 근데 그거 무효화시키는거임*/
            /*$('.submenu').hide();*/
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.submenu').stop().slideUp();
        }
        
    });



    $('.m_open').on('click', function(){
        $('.gnb').toggleClass('on');
        $('.sns').fadeToggle();                    /*<-toggle은 사라진다, fadetoggle은 나타났다사라진다*/
    });



    $(window).on('resize', function(){
        $('.submenu').removeAttr('style');
    });


    
/*-------------------------------------------------------------------------------*/
});