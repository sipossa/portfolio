
$(function(){

    //----------------------------------------------

    let con02Top = $('.con02').offset().top;
    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        console.log(sct,con02Top);
        if(sct > con02Top -300) {
            $('.con02').addClass('on')
        }else{
            $('.con02').removeClass('on')
        }
    });  





    //----------------------------------------------
})