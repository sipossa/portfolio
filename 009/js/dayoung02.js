$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        css3:false,
        // responsiveWidth: 768,
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    
    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu);
    $('#cover').append(cloneMenu);

    // mopen (메뉴)//
    $('.mopen').on('click',function(){
     $(this).toggleClass('is-active');
     $('#cover').slideToggle();
     $("#cover").addClass('on');   
    });

    $('#cover li').on('click',function(){
     $('#cover').slideUp();  
    });



    $('#cover').on('scoll wheel', function(){
        return false;
    });
    
    //scroll event //
    const SEC = document.querySelectorAll('.action');
    const WT=window.innerHeight;

    window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 -200 ? e.classList.add('on') : e.classList.remove('on');
        });
    });


    // guide 페이지
    $('.guide_link a').on('click',function(){
        //console.log($(this).index());
        var idx=$(this).data('num');
        console.log(idx)
        $('.guide'+idx).fadeToggle();
       });

    $('.guide i').on('click',function(){
        $('.guide').slideUp();
    });

    $('.guide').on('scroll wheel', function(e){
        e.stopPropagation();
    });


   


    //-----------------------------------------------------
    });