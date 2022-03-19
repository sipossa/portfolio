$(function(){
    //-----------------------

    $('.main_slider').on('init reinit afterChange', function(e,s,c){
        console.log(c,s.slideCount);
        var i= (c?c:0); //맨처음 숫자가 1이 나오도록 하기 위해서
        $('.snum').text(i+1 + "/" + s.slideCount);
    });


    var mS=$('.main_slider').slick({
        autoplay:true,
        fade:true,
        arrows:false,
        pauseOnHover:false,

    });

 

    $('.main_slider figure').eq(0).addClass('animation_active');
    $('#main_visual .sbar').addClass('animation_active');
    $('#main_visual .sbar2 span').css({height:100})
    mS.on('beforeChange', function(e,s,c,n){
    $('#main_visual .sbar').removeClass('animation_active');
});
    mS.on('afterChange', function(e,s,c){
        $('.main_slider figure').eq(c).addClass('animation_active')
        .siblings().removeClass('animation_active');
        $('#main_visual .btn li').eq(c).addClass('animation_active')
        .siblings().removeClass('animation_active');
        //console.log(c,s.slideCount);//slick슬라이드가 몇개인지 찍어라
        $('.snum').text(c+1 + "/" + s.slideCount); //text:글자가 나오게 해라
        //‘현재 넘버 / 전체 개수’ 이렇게 표시해라 
        $('#main_visual .sbar').addClass('animation_active');
        $('#main_visual .sbar2 span').css({height:100*(c+1)});
    });

    $('#main_visual .btn li').on('click', function(){
        var idx=$(this).index();
        mS.slick('slickGoTo', idx);
    });
    //-----------------------------
})