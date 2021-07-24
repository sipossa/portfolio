$(function(){
    $(".slide").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        fade: true,
        arrows:false,
        dots:false,
    });
    $(".button>li").on("click",function(){
        var i=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".slide").slick("slickGoTo", i)
    });
    $(".button>li").eq(0).addClass("on");
        $(".slide").on('afterChange', function(event, slick, currentSlide, nextSlide){
             //$("ul>li").eq(currentSlide).css({color:"#f00"}).siblings().css({color:"#333"})
            $(".button>li").eq(currentSlide).addClass("on").siblings().removeClass("on");
        });
    $(".xi-search").on("click",function(){
         $(".search").show("on")
    });
    $(".search>i").on("click",function(){
         $(".search").hide("on")
    }); 
    $(".menu>li>ul>li").on("click",function(){
        var i=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".xi-profile-o").on("click",function(){
         $(".login").toggle("on")
    }); 
    $(".login>i").on("click",function(){
         $(".login").hide("on")
    }); 
    
    $(".xi-apps").on("click",function(){
         $(".m-menu").show("on")
    });
    $(".m-menu>i").on("click",function(){
         $(".m-menu").hide("on")
    });     
    
    /* more버튼 */
    $(".more-btn").on("click",function(){
//        $(".p_con").toggleClass("on");
        $(".p_con").animate({height:"+=400"},200);
        if($(".p_con").height()>200){
            $(this).hide();
        }
    });
    
    /* 상품탭메뉴 */
    $(".p_icon li").eq(0).addClass("on"); //첫화면고정 
    
     $(".p_icon li>a").on("click",function(e){
         e.preventDefault();
     });//클릭시 위로이동 방지
            
    $(".p_icon li").on("click",function(){
        $(".p_icon li").removeClass("on");
        $(".p_con").removeClass("on");
        $(this).addClass("on");
        $(".p_item").hide();
        $(".p_con").animate({height:"400"})
        $(".p_item").eq($(this).index()).show();  
        $(".more-btn").show();
    });
    $(".p_icon li").eq(0).on("click",function(){
        $(".p_item").show();
        $(".more-btn").show();
    });
    
    $(".pr-pop-c").on("click",function(){
        $(".pr-pop").hide("on")
    }); 
    $(".pr-pop-c").on("click",function(){
        $(".re-pop").hide("on")
    });     
    $(".pr-bg").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        fade: true,
        arrows:false,
        dots:false,
    });
    
    /* 브랜드 탭메뉴 슬라이드 */
    $(".s_slide").slick({
        autoplay:false,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        fade: true,
        dots:false,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
//        variableWidth: true,
    });    
    
    
    /* 브랜드 탭메뉴 */
    
    $(".s_menu>div").eq(0).addClass("on");//첫화면고정
    $(".s_item>div>div").eq(0).addClass("on");
    $(".s_menu>div").on("click",function(){
        $(".s_menu>div").removeClass("on");
        $(this).addClass("on");
        $(".s_item>div>div").removeClass("on");
        $(".s_item>div>div").eq($(this).index()).addClass("on");
    });
    
    $(".f-menu>li>ul>li").on("click",function(e){
     e.preventDefault();
     }); 
    
    $(".up-btn").click(function() {
        $('html, body').animate({
            scrollTop : 0}, 400);
            return false;
        });
    $(".down-btn").click(function() {
        $('html, body').scrollTop($(document).height());
    });
        
    $('.right-t').on({"click" : function(){
        var number = ($(".s-btn").attr('value'));
        if(number==9){ // 숫자가 9이상이라면 초기화
            $(".s-btn").attr('value', '0');
            }else{
            var plus_num = parseInt(number) + 1;
            $(".s-btn").attr('value', plus_num);
		    }
        }
    });
    $('.right-b').on({"click" : function(){
        var number = ($(".s-btn").attr('value'));
        if(number==0){ // 숫자가 9이상이라면 초기화
            $(".s-btn").attr('value', '0');
            }else{
            var plus_num = parseInt(number) - 1;
            $(".s-btn").attr('value', plus_num);
		    }
        }
    }); 
    $(function(){ 
      $('.right-t').click(function(){ 
        var n = $('.right-t').index(this);
        var num = $(".price:eq("+n+")").val();
        num = $(".price:eq("+n+")").val(num*1+374000); 
      }); 
    });
    $(function(){ 
      $('.right-b').click(function(){ 
        var n = $('.right-t').index(this);
        var num = $(".price:eq("+n+")").val();
        num = $(".price:eq("+n+")").val(num*1-374000); 
        });
    });



		$("#sub01").elevateZoom({
			constrainType:"height", 
            constrainSize:300, 
            zoomType: "lens", 
            containLensZoom: true, 
            cursor: 'pointer',
            galleryActiveClass: "active"
		}); 
    
    
        $(".s-ico").on("click",function(){
            //$(".s-ico").removeClass("on");
            $(this).addClass("on");
            $(this).next().toggle();   
        });
    
        $(".s-rev>div").on("click",function(){
             $(".s-review-main").show("on")
        });
        $(".xi-close").on("click",function(){
             $(".s-review-main").hide("on")
        }); 
    
        $(".det").on("click",function(event){
            var offset = $(".s-detail").offset();
            $('html').animate({scrollTop:offset.top},400);
        });
        $(".infor").on("click",function(event){
            var offset = $(".s-inf").offset();
            $('html').animate({scrollTop:offset.top},400);
        });
        $(".ship").on("click",function(event){
            var offset = $(".s-ship").offset();
            $('html').animate({scrollTop:offset.top},400);
        });
        $(".rev").on("click",function(event){
            var offset = $(".s-review").offset();
            $('html').animate({scrollTop:offset.top},400);
        });
        $(".qna").on("click",function(event){
            var offset = $(".s-qna").offset();
            $('html').animate({scrollTop:offset.top},400);
        });    
});