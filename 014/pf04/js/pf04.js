$(function(){
    //------------------------------------------------------------------
    
        $('.main_slider').slick({
            arrows:false,
            autoplay:true,
            pauseOnHover:false,
            fade:true,
            dots:true,
        });
        





        var mS=$('#content_01 .container').slick({
                    arrows:false,
                    autoplay:true,
                    slidesToShow: 3,
                    slidesToScroll : 1,
                    center:true,
                    responsive: [
                        {
                          breakpoint: 769,
                          settings: {
                            slidesToShow: 1,
                          }
                        },
                
                        {
                            breakpoint: 600,
                            settings: {
                              slidesToShow: 1,
                            }
                          },
                
                
                
                      ]
                    
        });


        mS.on('afterChange', function(e,s,c){
            $('#content_01 figure').eq(c+3).addClass('on').siblings().removeClass('on');
        })


        $('#content_01 .btn i.xi-angle-left').on('click', function(){  
            $('#content_01 .container').slick('slickPrev')
        });
        
        $('#content_01 .btn i.xi-angle-right').on('click', function(){
            $('#content_01 .container').slick('slickNext')
        });                                                         



        // var aoscx=setTimeout(function(){
        //     if($(window).width() > 769){AOS.init()}else{
        //         clearTimeout(aoscx);
        //         $('#content_03 figure').removeAttr('data-aos')
        //     }
        // }
            
        //     );

            AOS.init({

                disable: function () {
                  var desktop = 768;
                  return window.innerWidth < desktop;
                } // 768px 이하일 때 disable
              
              });
        //if ($(window).width() < 769) clearTimeout(aoscx)








        $(function(){
            $('.tab_meun>li').on('click', function(){
                var $this= $(this);
                var idx= $(this).index(); 
                $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
                $this.addClass('on').siblings().removeClass('on');
            });
        });






        $('.slider').slick({
            arrows:false,
            infinite: true,
            autoplay:true,
            pauseOnHover:false,
            autoplaySpeed:1000,
            slidesToShow:8,
            responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 4,
                  }
                },
        
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 4,
                    }
                  },
        
        
        
              ]
        });
        

        // $('.slider').on("mousemove", moMove);    
        // function moMove(e){
        //     if(e.pageX < $(this).width() / 2){
        //         $('.slider').slick("slickPrev")
        //     }else{
        //         $('.slider').slick("slickNext")
        //     } 
        // }







        $('.mopen').on('click', function(){
            $(this).toggleClass('on');
            $('nav').toggleClass('on');
            $('.mopen .xi-bars').toggleClass('on');
        });
    
    
        $('nav>ul>li>a').on('click', function(){
            if($('nav').hasClass('on')) {
                $(this).next().stop().slideToggle();
                $(this).parent().siblings().find('.sub_menu').slideUp();  
            }
        });
    



        $('.top_b').on('click', function(){
          $('html, body').animate({scrollTop:0},800);
      });
  
      $(window).on('scroll', function(){
          var sct=$(window).scrollTop();
          var wd=$(window).width();
          if (wd>768) {
              if(sct>400) {
                  $('.top_b').fadeIn()
              }else{
                  $('.top_b').fadeOut()
              }
          }
  
      });

      $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        var wd=$(window).width();
        if (wd<768) {
            if(sct>400) {
                $('.top_b').fadeIn()
            }else{
                $('.top_b').fadeOut()
            }
        }

    });



    $(window).on('resize', function(){
        $('.sub_menu').removeAttr('style');
    });

    //------------------------------------------------------------------
    });