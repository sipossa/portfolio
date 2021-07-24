$(function(){
    var mSlider=$('.main-slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        fade:true,
        pauseOnHover:false,
        dots:true,
    });
    var msItem=$('.main-slider figure');
    msItem.eq(0).addClass('on')
    mSlider.on('afterChange',function(e,s,c){
        console.log(c);
        msItem.eq(c).addClass('on').siblings().removeClass('on')

    });

    $(window).on('scroll',function(){
        var wst=$(window).scrollTop();
        if(wst>0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on')
        }
        
    });

    var spSlider=$('.specialty-slider').slick({
        arrows:false,
        autoplay:true,
        
        pauseOnHover:false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });

    $(window).on('scroll',function(){
        var wst=$(window).scrollTop();
        
        $('.section').each(function(){
            var this_top=$(this).offset().top;
            if(wst>this_top-200) {
                $(this).addClass('on');
            }
            if(wst<500) {
                $('.section').removeClass('on');
            }
            if(wst>500) {
                $('.xi-arrow-top').fadeIn();
            }else{
                $('.xi-arrow-top').fadeOut()
            }
        
        })
    });

    $('#link').on('change',function(){
        var link=$(this).val();
        console.log(link);
        if(link) window.open(link);
    })
    $('.xi-arrow-top').on('click',function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    $("#popup").draggable();

    if(!$.cookie("ddays")) $("#popup").show();
    $(".close").on("click", function(){
        if($("#daycheck").is(":checked")) $.cookie('ddays', 'Y', { expires: 1 });
        $("#popup").hide();
    });
     
})