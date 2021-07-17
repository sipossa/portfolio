$(function(){
    var $this=$(".section");
    $("#sgnc").fullpage({           
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  
        anchors:['intro', 'sns2', 'sns3', 'sns4', 'sns5'],//hash 직접만들어줘야함
        //css3:false,//이 것 만으로 패럴렉스
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".gnb-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });

    var brandSlide=$(".brend-slider>div").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        swipe:false,
    });

    brandSlide.on("afterChange", function(e,s,c){
        //console.log(c);
        $(".brend-tab li").eq(c).addClass("on").siblings().removeClass("on");
    });


    $(".brend-tab li").on("click", function(){
        var idx=$(this).index();
        $(".brend-slider>div").slick("slickGoTo", idx);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".mopen").on("click", function(){
        $("#cover").slideDown();
    });

    $("#cover i").on("click", function(){
        $("#cover").slideUp();
    });

    $("#cover ul>li>a").on("click", function(){
        $("#cover").slideUp();
    });

});
