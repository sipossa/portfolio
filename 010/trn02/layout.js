$(function(){
//--------------------

    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
	    //navigation:true,
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
           // console.log(txt);
            $('.now').text(txt);
            destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut(); //if문
            destination.index==0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
            // =0 : 0이다.
            // ==0 : 0과 같다면 (if문)
        },
    });

    $('.b_slider').slick({
        arrows:false,
        asNavFor:'.b_slider',
        autoplay:true,
        speed:4000,
    });

    $('.brand_name>li').on('click', function(){
       // $(this).addClass('on').siblings().removeClass('on');
        let idx=$(this).index();
        $('.b_slider').slick('slickGoTo', idx);
    });

    $('.b_slider').on('afterChange', function(e,s,c){
        $('.brand_name>li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.all_open').on('click', function(){
        $(this).toggleClass('on');
        $('.all_menu').slideToggle();
        if($('.all_open').hasClass('on')) {
            $.fn.fullpage.setAllowScrolling(false);
        }else {
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    $('.all_menu a').on('click', function(){
        $('.all_menu').slideToggle();
        $.fn.fullpage.setAllowScrolling(true);
        $('.all_open').removeClass('on');
    })

    

//---------------------
})