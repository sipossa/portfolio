$(function(){
    $('.tab_meun>li').on('click', function(){
        var $this= $(this); //this는 자기 자신
        var idx= $(this).index(); //자신의 번호
        //console.log($this,idx)
        //$('.tab_content>div').eq(idx).show().siblings().hide();
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });
});