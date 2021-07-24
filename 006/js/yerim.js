$(function(){
    
 
    
    //메뉴
    $(".m-btn").on("click",function(){
      $("header").toggleClass("on");  
      $(this).toggleClass("on");  
    });
    $("nav>ul>li>a").on("click",function(){
      //e.preventDefault();
      $("header").removeClass("on");
      $(".m-btn").removeClass("on");
        
        $("html, body").animate({scrollTop:$(this.hash).offset().top}, 500)
    });
    
    
    //pf02 슬라이더
    $('.pf02-slide').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed:1000,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
        dots:true,
    });
    
    var imgH1=$(".page01>img").eq(0).height();
    var imgH2=$(".page01>img").eq(1).height();
    var imgH3=$(".page01>img").eq(2).height();
    
    //pf03 슬라이더
    $(".vd-slider").slick({
        slidesToShow:3,
        dots:true,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
        speed:1000,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });

//    imgH=[imgH1,imgH2,imgH3];
//    console.log(imgH);
    $(".page01").on({
        mouseenter:function(){
            var imgH=$(this).find("img").height();
            console.log(imgH);
            $(this).find("img").stop().animate({top:-(imgH-346)},3000)
            $(".hover-p").addClass("off");
        },
        mouseleave:function(){
            $(this).find("img").stop().animate({top:0},3000)
            $(".hover-p").removeClass("off");
        }
    });
    
    //풀페이지
    
    var $this=$(".section");
    $("#fullpage").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤
        anchors:['1Page', '2Page', '3Page', '4Page', '5Page'],
        navigation: true,
        navigationPosition: 'right',
        //scrollOverflow:true,
        afterLoad: function(origin,destination){            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index==3){
                pg();
            }
            $(".m-list li").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });
    
    //프로그래스바
    function pg(){
        $(".ps, .ai").circleProgress({
            value:0.9,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(90 * progress) + '<i>%</i>');
        });
        $(".id").circleProgress({
            value:0.6,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(60 * progress) + '<i>%</i>');
        });

        $(".ae").circleProgress({
            value:0.3,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(30 * progress) + '<i>%</i>');
        });
        $(".pr").circleProgress({
            value:0.2,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(20 * progress) + '<i>%</i>');
        });
        $(".ht").circleProgress({
            value:0.8,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(80 * progress) + '<i>%</i>');

        });
        $(".cs").circleProgress({
            value:0.7,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(70 * progress) + '<i>%</i>');

        });

        $(".js").circleProgress({
            value:0.5,
            lineCap:"round",
            thickness:"10",
            startAngle:80,
            fill:{gradient : ['#f2ae86','#fdd28b']}
        }).on('circle-animation-progress', function(event, progress){
          $(this).find('p').html(Math.round(50 * progress) + '<i>%</i> ' + '- jQuery');
        
        });
    }
    //pg();
    
//    $(".profile02").on("scroll",function(){
//        fullpage_api.setAllowScrolling(false);
//    })
  
    $(".profile02").on("touchstart",function(){
        fullpage_api.setAllowScrolling(false);
    }); 
    $(".profile02").on("touchend",function(){
        fullpage_api.setAllowScrolling(true);
    });  
    
    
    $("#loading").on("mouseenter",function(){
        fullpage_api.setAllowScrolling(false);
    }); 
   $("#loading").on("scroll",function(){
        fullpage_api.setAllowScrolling(false);
    }); 
    $("#loading").on("mouseleave",function(){
        fullpage_api.setAllowScrolling(true);
    }); 
    
//    if($(".profile02")){
//        fullpage_api.setAllowScrolling(false);
//    }else{
//        fullpage_api.setAllowScrolling(true);
//    }
    
    
    
    
    
    
    
});