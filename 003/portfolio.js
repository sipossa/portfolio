$(function(){
    var $this=$(".section");
    var $this_s=$(".slide");
    $this.eq(0).addClass("on");
    
    $("#portfolio").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors:['intro', 'pf01', 'pf02', 'profile'],
        controlArrows: false,
        loopHorizontal: false,
        afterRender:function(){
            $this.eq(0).addClass("on");
        },              
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index==1) {
                $this_s.eq(0).addClass("on");
            }
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass("on").siblings().removeClass("on");
        }
        
        
    });

    //슬라이드에 훨이벤트
    $(".pf01").on("mousewheel", function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else{
            fullpage_api.moveSlideRight();
        }
    });

    // 메인 타이포
    var introTxt = new Typed('.type01', {
        strings: ['2021년'],
        typeSpeed: 150,
        backSpeed: 100,
        fadeOut: true,
        smartBackspace: true,
        cursorChar: '',
        loop: false,
    });
    var introTxt = new Typed('.type02', {
        strings: ["Lee's"],
        typeSpeed: 150,
        backSpeed: 100,
        startDelay:1100,
        fadeOut: true,
        smartBackspace: true,
        cursorChar: '',
        loop: false,
    });
    var introTxt = new Typed('.type03', {
        strings: ['지은'],
        typeSpeed: 150,
        backSpeed: 100,
        startDelay:2300,
        fadeOut: true,
        smartBackspace: true,
        cursorChar: '',
        loop: false,
    });
    var introTxt = new Typed('.type04', {
        strings: ['포트폴리오'],
        typeSpeed: 150,
        backSpeed: 100,
        startDelay:3200,
        fadeOut: true,
        smartBackspace: true,
        cursorChar: '',
        loop: false,
    });
    
    // 모바일 버튼
    $(".mopen").on("click", function(){
        $(this).toggleClass('on');
        $(".cover").slideToggle()
    });

    // 모바일 메뉴
    $(".cover li").on("click", function(){
        $(".mopen").removeClass("on");
        $(".cover").slideUp();
    });

    
});