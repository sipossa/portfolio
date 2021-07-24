$(function(){
     //풀페이지
     $('#fullpage').fullpage({
        //options here
        anchors:['intro', 'ptf01', 'ptf02', 'ptf03', 'ptf04', 'ptf05', 'outtro'],
        autoScrolling:true,
        scrollHorizontally: true,
        css3:false,
        afterLoad: function(origin,destination){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".btn li").eq(destination.index).addClass("on").siblings().removeClass("on");
        },

        });
})