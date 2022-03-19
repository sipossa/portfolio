$(function(){

    //----------------------------------------------



    
    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        let bt=$(window).outerHeight(true);
        $('.ani').each(function(){
            let secTop = $(this).offset().top;
            let this_h = $(this).outerHeight(true);
            console.log(bt,this_h)
            sct > secTop - (bt-this_h)/2  ? $(this).addClass('on') : $(this).removeClass('on');
        })

    });  



    //----------------------------------------------
})