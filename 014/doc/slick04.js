$(function(){
//--------------------------------------
      $('.main_slider').on('init reInit afterChange', function(e,s,c){
        console.log(c,s.slideCount);
        var i= (c?c:0);
        $('.snum').text(i+1 + "/" + s.slideCount)
    });

    var mS=$('.main_slider').slick({            /*<-var mS는 메인슬라이드에 이름 붙여준거*/
        arrows:false,
        autoplay:true,
        fade:true,
        pauseOnHover:false,
    });

  
    $('.main_slider figure').eq(0).addClass('animation_active');
    $('#main_visual .btn li').eq(0).addClass('animation_active');
    $('#main_visual .sbar').addClass('animation_active');
    $('#main_visual .sbar2 span').css({height:100})
    mS.on ('beforeChange', function(e,s,c,n){
        $('#main_visual .sbar').removeClass('animation_active');
    });



    mS.on('afterChange', function(e,s,c){            /*<-e,s,c는 이벤트,요소(슬릭),지금돌아가는 애니메이션의 번호를 의미*/
        $('.main_slider figure').eq(c).addClass('animation_active')
        .siblings().removeClass('animation_active');              /*<-animation_active 라는 클래스를 붙였을때 숫자가 변하면 됨!*/
        $('#main_visual .btn li').eq(c).addClass('animation_active')     /*<-메인슬라이드 밑에 바*/
        .siblings().removeClass('animation_active');
        $('#main_visual .sbar').addClass('animation_active');
        $('#main_visual .sbar2 span').css({height:100*(c+1)})
    });



    $('#main_visual .btn li').on('click', function(){
        var idx=$(this).index();
        mS.slick('slickGoTo', idx)
    });










//---------------------------------------
});