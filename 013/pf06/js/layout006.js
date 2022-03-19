$(function(){

    var vsd=$(".visual_slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        // pauseOnHover:false,
        // pauseOnFocus:false,
        fade:true,
        speed:400,
    });

    $('.slider_tab .content').on('mouseover', function(){
        var idx=$(this).index();
        vsd.slick("slickGoTo", idx);
        $(this).addClass('on').siblings().removeClass('on');
    });



}); 