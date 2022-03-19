$(function(){
// -----------------------------



$('#magazine').turn({gradients: true, acceleration: true});


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














// -----------------------------
});