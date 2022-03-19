$(function (){


    $('#main_visual').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
        fade:true,
        dots:true,
    });

    
    $("#mv01").YTPlayer({
        videoURL:'https://youtu.be/Owms72QRNwM',
        containment:'#content01 figure',
        autoPlay:true, 
        mute:true, 
        opacity:1,
        showControls:false, //control이 안보이게, 보이게하려면 true
    });
 

    $('.bestmenu_slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
    });


$('.tabmenu ul>li').on('click', function(){

    var idx= $(this).index();
    //console.log(idx);
    $(this).addClass('on').siblings().removeClass('on');
    $('.tab_content_menu').eq(idx).addClass('on').siblings().removeClass('on');
    
});


$('.news_slider').slick({
    arrows:false,
    autoplay:true,
    speed:2000,
    slidesToShow:3,

    responsive: [ // 반응형 웹 구현 옵션
        { 
            breakpoint: 768, //화면 사이즈 768px
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:1
            } 
        }
    ]
    
});


$('#content07 .xi-angle-left-min').on('click',function(){
    $('.news_slider').slick('slickPrev');
});
$('#content07 .xi-angle-right-min').on('click',function(){
    $('.news_slider').slick('slickNext');
});



//-----------------------------------------------------------------

$('.mopen').on('click',function(){
    $('.gnb').toggleClass('on');
    $('.m_logo').toggleClass('on');
});

$('.depth01>li>a').on('click', function(){
    if ($(window).width() < 769 ) { //769px보다 작을때부터 반응형으로 작동해라

        $(this).next().slideToggle();
        $(this).parents().siblings().find('.sub').slideUp();

    }
    
});


var Rsd = $('.tab_content_menu');

	var slickOptions = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		dots:false,
		arrows:false,
	};

	$(window).on('load resize', function() {
		if($(window).width() > 768) {
			Rsd.slick('unslick');
		}else{
			Rsd.not('.slick-initialized').slick(slickOptions);
		}
	});



$(window).on('resize', function(){

    $('.sub').removeAttr('style');
    
});






})