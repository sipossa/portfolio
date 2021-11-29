$(function(){

$('.main_full').fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
});

})