$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    // typed //
    let dada=new Typed('.slogan_txt',{
        strings: ['DAYOUNG : Portfolio'],
        typeSpeed:100,
    });
    
    // cover btn (메뉴)//
    $('.cover_btn').on('click',function(){
     $('#cover').slideToggle();  //fadeToggle
    });

    $('#cover li').on('click',function(){
     $('#cover').slideUp();  
    });

    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu);
    $('#cover').append(cloneMenu);


    $('#cover').on('scoll wheel', function(){
        return false;
    })
    
    




    //-----------------------------------------------------
    })