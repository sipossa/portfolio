$(function(){
    //------------------------------------------------------------
    
    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'footer'],
        responsiveWidth:768,
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.now').text(txt);
            
    
            destination.index==0 ? $('.top_pop').slideDown() : $('.top_pop').slideUp();
            // destination.index==0 ? $('header').fadeIn() : $('header').fadeOut();
            destination.index==0 ? $('.right_pop').fadeIn() : $('.right_pop').fadeOut();
        },
    });

    //language
    $(".language").on("click",function(){
        $(this).toggleClass("on");
        
    });
    

    //right_pop
    $('.pop01>li>a').on('click', function(){        
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.spop01').slideUp();       
        
    });


    //search
    $('header .right').on('click', function(){
        $(this).toggleClass('on');
        $('.all_menu').fadeToggle();
        if($('.right').hasClass('on')) {
            $.fn.fullpage.setAllowScrolling(false);
        }else{
            $.fn.fullpage.setAllowScrolling(true);
        }
    });
    $('header .right').on('scroll wheel' , function(){
        return false;
    })//커버나왔을때 휠이 안먹도록


    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,        
        pauseOnHover:false,
        autoplaySpeed:2500,
        asNavFor: '.tx_slider'
    
    });
    $('.tx_slider').slick({
        arrows:false,
        autoplay:true,
        vertical :true,
        pauseOnHover:false,
        autoplaySpeed:2500,
        asNavFor: '.main_slider',
        slidesToShow:1,
    });


    //focus
    $('.f_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:1500,
        slidesToShow:3,
    });

    //notice
    $('.tab_menu>ul>li').on('click',function(){
        var $this=$(this);
        var idx=$(this).index();
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });

    //sungshin link
    $('.bt_link .btn').on('click', function(){
        $('.bt_link').toggleClass('on');
    });

    //icon link
    $('.icon_link .btn').on("click", function(){
        $('.icon_link').toggleClass('on');
    });


    //footer 사이트링크
    $(".link01").on("click",function(){
        $(this).toggleClass("on");
    });




//------------------------------------------------------------


$('.mopen').on('click', function(){ 
    $('.header nav').toggleClass('on'); 
    // $('.top_pop').toggleClass('on');
    $(this).toggleClass('on');
});


$('nav .depth01>li').on('click', function(){
    if($('nav').hasClass('on')) {
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings().find('.depth03').stop().slideUp();
    }

});

$('.depth02 .row02>li').on('click', function(){
    if($('nav').hasClass('on')) {
        $('.depth03').stop().slideUp();
        $(this).find('.depth03').stop().slideToggle();
    }
})

$(window).on('resize', function(){
    $('.depth02').removeAttr('style');
    $('.depth03').removeAttr('style');
    $('nav').removeClass('on');
});




var t_slid = $('.con04 .icon_link .list');

	var slickOptions = {
		infinite: true,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:1500,
		dots:false,
		arrows:false,
	};

	$(window).on('load resize', function() {
		if($(window).width() > 768) {
			t_slid.slick('unslick');
		}else{
			t_slid.not('.slick-initialized').slick(slickOptions);
		}
	});
    $(window).on('resize', function(){

        $('.con04 .icon_link .list').removeAttr('style');
        
    });


    $('.right_pop h2').on('click', function(){
        $('.right_pop').toggleClass('on');
    });

    $(window).on('resize', function(){

        $('.right_pop').removeAttr('style');
        
    });
    //------------------------------------------------------------
    })