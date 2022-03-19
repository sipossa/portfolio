$(function(){
//-------------------------------
    $('.tab_menu>li').on('click', function(){
        var $this=$(this); //자기자신
        var idx= $(this).index();//자기자신의 번호 0 1 2
        //console.log($this,idx); //test
       // $('.tab_content>div').eq(idx).show().siblings().hide();//1) :nth-child로 주는 방법
       $this.addClass('on').siblings().removeClass('on');//클릭했을 때 탭메뉴 스타일 변경하는 방법 (class=“on”주기)
       $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on'); //2) class=“on”주는 방법

    })




//---------------------------------
});