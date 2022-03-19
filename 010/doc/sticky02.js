$(function(){
//-------------------------

    $('nav a').on('click', function(){
        let top=$('.sticky').height();
        let i=$(this).parent().index();
       // let top=$(this.hash).offset().top;
        console.log(top,i)
        $('html, body').stop().animate({scrollTop:top*i}, 800);
        return false;
    });

    $('header i').on('click', function(){
        $('nav').slideToggle();
    });

    $('footer i').on('click', function(){
        $('html, body').animate({scrollTop:0})
    });

//----------------------------
})