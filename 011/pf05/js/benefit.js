$(function(){
    //--------------------------
    $('.top_banner i').on('click', function(){
        $('.top_banner ').slideUp(); 
        
    });
    
    $('.popup_close').on('click', function(){
        $(this).parent().hide();
    });
    
    //--메뉴
    $('.gnb>ul>li>a') .on('click',function(e){
        if($('.gnb').hasClass('on')) { 
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth02').stop().slideUp();
            
    
        }
        
    });
       
        
    
    $("#utc").YTPlayer({
        videoURL:'https://youtu.be/QMNB-oG2yOk',
        containment:'#main_visual',
        autoPlay: true,
        mute:true,
        useOnMobile: true,
        loop: true,
        startAt:0, 
        opacity:1,
        showControls:false,
    
    }); 
    
    $('.best_tap>li').on('click', function(){
        var $this= $(this);
        var idx= $(this).index();
        //console.log($this,idx);
        //$('.tab_content>div').eq(idx).Show().siblings().hide();
        $('.best_tap_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });
    
    $('.content01 .click01 li').on('click', function(){
        var idx= $(this).index();
        $(".tab_content>div").eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    //-----------------------------------------------------------------------------

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on'); 
         $('.header_search').fadeToggle();
    });
    $('.mopen').on('click', function(){
      $(this).toggleClass('on');
    });
    $(window).on('resize', function(){
        $('.depth02').removeAttr('style') 
    });
    
    
    //로그인
    $('.header_top ul .login').on('click', function(){
        $(this).toggleClass('on');
    });
    $(window).on('resize', function(){
        $('.row').removeAttr('style');
        $('.header_top ul .login').removeClass('on');
    });
    

    var t_slid = $('.best_tap_content .m_slider');

	var slickOptions = {
		infinite: true,
		slidesToShow:2,
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

        $('.best_tap_content .m_slider').removeAttr('style');
        
    });
    //--------------------------
    })