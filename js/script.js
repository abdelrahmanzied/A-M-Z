/*global $, alert, console*/

$(function () {
    
    'use strict';

    $('header').height($(window).height());
    $(window).resize(function() {
    	$('header').height($(window).height());
        
        $('header .slider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('header .slider').height()) / 3);
        });
    
    });
    
    //end resize

    $('.site-nav-list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('header .slider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('header .slider').height()) / 3);
    });

    
    $('.bxslider').bxSlider({
        auto: true
    });
    
    (function autoSlider() {
        
        $('.active-slide').each(function () {
           
            if (!$(this).is(':last-child')) {
                
               $(this).delay(8000).fadeOut(3000, function () {
                  
                   $(this).removeClass('active-slide').next().addClass('active-slide').fadeIn();
                   
                   autoSlider();
                   
               });
                
            } else {
                
                $(this).delay(8000).fadeOut(3000, function (){
                    
                    $(this).removeClass('active-slide');
                    
                    $('.slider div').eq(0).addClass('active-slide').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
   
});
