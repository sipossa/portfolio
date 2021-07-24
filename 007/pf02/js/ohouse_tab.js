$(document).ready(function(){
//    $(".tab-m>li").eq(0).on("click",function(){
//        $(".tab-con>div").hide(); 
//        $(".tab-con>div").eq(0).show();
//    }); 
//    $(".tab-m>li").eq(1).on("click",function(){
//        $(".tab-con>div").hide(); 
//        $(".tab-con>div").eq(1).show();
//    }); 
//    $(".tab-m>li").eq(2).on("click",function(){
//        $(".tab-con>div").hide(); 
//        $(".tab-con>div").eq(2).show();
//    }); 
//
//    $(".tab-m>li").click(function(){
//        console.log($(this).index())
//    });
    $(".tab-m>li").on("click",function(){
        $(".tab-con>div").hide();
        $(".tab-con>div").eq($(this).index()).show();
        $(".tab-m>li").removeClass("on")
        $(this).addClass("on")
    }) /* 달달외우기 */
})





