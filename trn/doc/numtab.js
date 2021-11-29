$(function(){
    
    function sNUm(){
        $('.num .container i').each(function(idx){
            let num = $(this).text();
            //console.log(num);
            $('.num .container i').eq(idx).delay(idx*500).animate({backgroundPositionY:-100*num+3000}, 500)
        })
        
        
        //$('.num .container i').css({backgroundPositionY:-100*num})
    }
    $('.num_action li').on('click', sNUm)
    //setInterval(sNUm,500)
})