$(function(){
//-----------------------------------------------------------------
let sc=$('.section');
let sideBar=$('nav li');   /*<-옆에 네비바(사이드바) on붙였다 떼는거때문에 이름지어줌 nav li는 sideBar이다!*/
$('#main').fullpage({
    anchors:['intro','portfolio_01','portfolio_02','portfolio_03','portfolio_04','portfolio_05','profile',],              /*풀페이지에서 페이지 번호 정해주기*/

    afterLoad:function(origin, destination, direction){
        let idx=destination.index;                                 /*<-afterLoad가 실행될때 이름을 붙이는거라 안쪽에 넣고 섹션은 매번 해야하니까 바깥쪽에!*/
        sc.eq(idx).addClass("on").siblings().removeClass('on');  /*<-섹션에 on붙였다 떼기*/
        sideBar.eq(idx).addClass("on").siblings().removeClass('on');  /*<-옆에 네비바(사이드바) on붙였다 떼는거*/
        // sct > sTop ? $('.section').addClass('on') : $('.section').removeClass('on');
    },

});




new Typed('.slogan_type',{
    strings: ['brand new design and publishing portfolio by noh hyejin'],
    typeSpeed:50,
});



$('.cover_btn').on('click',function(){
    $('#cover').slideToggle(); /*fadeToggle하면 슈우웅나타남*/
});  



let cloneMenu = $('nav>ul').clone();
$('#cover').append(cloneMenu);  

$('#cover').on('scroll wheel touchmove', function(){
    return false;
});



$('#header .cover_btn i').on('click', function(){
    $('#header .cover_btn i').toggleClass('on');
    $('#header').toggleClass('on');
});



$('#cover ul').on('click', function(){
    $('#header .cover_btn i').toggleClass('on');
    $('#header').toggleClass('on');
    $('#cover').slideUp('on');
});
//-----------------------------------------------------------------
});