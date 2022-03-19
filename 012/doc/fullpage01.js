$(function(){
// ---------------------------------------------------

var fp= $('.fullpage');
fp.fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],
    // navigation:true,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(destination.index);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
});


















// ---------------------------------------------------
});