$(function(){
     //풀페이지
     $('#fullpage').fullpage({
        //options here
        anchors:['intro', 'ptf01', 'ptf02', 'ptf03', 'ptf04', 'ptf05', 'ptf06','outtro'],
        autoScrolling:true,
        scrollHorizontally: true,
        css3:false,
        afterLoad: function(origin,destination){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".btn li").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".m_btn_menu li").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });

    $(".case a").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").css({
            top:-(imgH-caseH)
        })
    });
    $(".case a").on("mouseleave", function(){
        $(this).find("img").css({
            top:0
        })
    })

    // 모바일 버튼 
    $(".m_btn").on("click", function(){
        $(".m_btn_menu").toggleClass("on")
        $(this).toggleClass("on")
    })
})