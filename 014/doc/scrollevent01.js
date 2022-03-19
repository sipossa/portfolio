$(function(){
//--------------------------------------------------------------------------
    
    /*let con02Top = $('.con02').offset().top;
    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        console.log(sct,con02Top);
        if(sct > con02Top) {
            $('.con02').addClass('on')
        }else{
            $('.con02').removeClass('on')
        }
    }); <-이건 기본적인거. 콘02 스크롤하면 사라졌다 나오게 css-4,5번*/

    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        $('.ani').each(function(){
            let secTop = $(this).offset().top;
            if(sct > secTop - 300) {
                $(this).addClass('on');
            }else{
                $(this).removeClass('on');
            }
        })
    });








//--------------------------------------------------------------------------
});






































