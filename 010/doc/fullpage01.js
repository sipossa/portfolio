$(function(){

    var main=$('.main_full').fullpage({
        //navigation: true,
        anchors:['page01', 'page02', 'page03', 'page04'], //주소줄에 표시됨
        afterLoad: function(origin, destination, direction){
           var idx=destination.index
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

})