$(function(){
    $('#section02 .content>figure').on('click',function(){
        $(this).prev().addClass('on')
    });
    
    $('#section02 .content>div i').click(function(){
        $('#section02 .content>div').removeClass("on");
    });




    $('#section03 .container li').eq(0).addClass("on")
    $('#section03 .container li').click(function(){
        var idx=$(this).index();
        $('#section03 .container .cover01 figure').css({visibility:"hidden"});
        $('#section03 .container .cover01 figure').eq(idx).css({visibility:"visible"});
        $('#section03 .container .cover02 figure').css({visibility:"hidden"});
        $('#section03 .container .cover02 figure').eq(idx).css({visibility:"visible"});
        $('#section03 .container .cover03 figure').css({visibility:"hidden"});
        $('#section03 .container .cover03 figure').eq(idx).css({visibility:"visible"});
        $(this).addClass("on").siblings().removeClass("on");
    });





})