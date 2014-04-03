/*
 * Copyright (c) 2013 MyPassion
 * Author: MyPassion 
 * This file is made for CURRENT TEMPLATES
*/



jQuery(document).ready(function(){
	
	"use strict";
	


// -----------------------------------------------------  MAIN FUNCTIONALITY OF THE THEME

	// Get all "li" elements to top
	var streamHeight = jQuery('.post-stream').outerHeight();
	var topH = streamHeight+20;
	jQuery('.post-stream li').css({top: topH+'px', opacity:0});
	jQuery('.post-stream li').find('.car-nav').animate({right:-100+'px'}, 1);
	jQuery('.post-stream li.active').css({top:'0px', opacity:1});
	jQuery('.post-stream li.active').find('.car-nav').animate({right:0+'px'}, 1);


	jQuery('.trigger-holder ul li a').removeAttr('href').css('cursor','pointer');


	// Do main animation
	jQuery('.trigger-holder ul li a').click(function(e) {
		
		
		
		
		var xclass = jQuery(this).attr('x-class');
		var test = jQuery('.post-stream').find('li.active');
		
		
		// Change active link
		jQuery('.trigger-holder ul li a').removeClass('clicked');
		jQuery(this).addClass('clicked');
		
		
		
		// Change main content
		if(test.hasClass(xclass)){
			// Do nothing
		}else{
			
			setTimeout(function() {
					
						jQuery('.post-stream li.active').stop().animate({top:-streamHeight+'px', opacity:0}, 1500, 'swing');
						jQuery('.post-stream li.active').animate({top:topH+'px'}, 0);
						jQuery('.post-stream li.active').delay(600).removeClass('active');
						
						
						
						jQuery('.post-stream').find('li.'+xclass).stop().addClass('active').animate({top:0, opacity:1}, 1000, 'swing');
				}, 300);
			
			jQuery('.post-stream li.active').find('.car-nav').stop(true,true).animate({right:-60+'px', opacity:0}, 200);
			
			setTimeout(function() {jQuery('.post-stream').find('li.active').find('.car-nav').stop(true,true).animate({right:0, opacity:1}, 200, 'swing');}, 1300);
			//setTimeout(function() {jQuery('.trigger-holder ul li a').click(function(){return true;});}, 1300);	
		}

    });
	
	
	
	
	// Carousel post-stream
	
	function streamCarousel(){
		jQuery('.post-stream li').each(function() {
			jQuery(this).find('.carousel').carouFredSel({
				align: true,
				auto: false,
				width: '100%',
				prev : {
					button :  jQuery(this).find('.car-prev'),
					key : "left",
					items : 1,
					duration : 750
				},
				next : {
					button : jQuery(this).find('.car-next'),
					key : "right",
					items : 1,
					duration : 750
				},
				mousewheel: false,
				swipe : {
					onTouch     : true,
					onMouse     : true,
					options      : {
			        	excludedElements: "button, input, select, textarea, .noSwipe"	
			        }
				},
			});	
		});
		
	}
	if(jQuery().carouFredSel) {
		streamCarousel();
	}
	jQuery(window).load(function(e) {
        // Detect existence of javascript function
		if(jQuery().carouFredSel) {
			streamCarousel();
		}
    });
	
	jQuery(window).resize(function(e) {
        streamCarousel();
    });




// -----------------------------------------------------  EXTRA TOPBAR
	jQuery('.top-opener i').click(function(e) {
        jQuery('.extra-topbar').delay(480).slideDown(300, 'swing');
		jQuery('.top-closer').delay(300).fadeIn(1).animate({bottom:'-24px'}, 300);
		jQuery('.top-opener').animate({bottom:'20px'}, 300).fadeOut(1);
    });
	
	jQuery('.top-closer i').click(function(e) {
        jQuery('.extra-topbar').slideUp(300, 'swing');
		jQuery('.top-opener').delay(610).fadeIn(1).animate({bottom:'-24px'}, 300);
		jQuery('.top-closer').delay(250).animate({bottom:'20px'}, 300).fadeOut(1);
    });
	


// -----------------------------------------------------  SIDEBAR UL	
	jQuery(".widget_pages ul li, .widget_meta ul li, .widget_categories ul li, .widget_recent_entries ul li, .widget_nav_menu ul li, .widget_recent_comments ul li, .widget_archive ul li, .widget_display_forums ul li, .widget_display_views ul li").prepend("<i class='icon-right-open-mini'></i>");

		
// -----------------------------------------------------  SEARCH POPUP
	/*jQuery('.search-button a').click(function(){
		jQuery('.popup-search').stop(true,true).slideToggle(300);
		return false;
	});*/
	
	jQuery('.search-button a.close_s').css('display', 'none');
	
	jQuery('.search-button a.open_s').click(function(){
		jQuery('.popup-search').fadeIn(400, 'easeOutCubic');
		jQuery(this).css('display', 'none');
		jQuery('.search-button a.close_s').css('display', 'block');
		return false;
	});
	
	jQuery('.search-button a.close_s').click(function(){
		jQuery('.popup-search').fadeOut(400, 'easeOutCubic');
		jQuery(this).css('display', 'none');
		jQuery('.search-button a.open_s').css('display', 'block');
		return false;
	});

// -----------------------------------------------------  DEVICE MENU TOGGLE
	
	jQuery('ul.sf-menu').superfish({
		 delay: 200,
		 speed: 'fast',
		 speedOut:      'fast',             
		 animation:   {opacity:'show'}
	});
	

	
	
	
	jQuery("[rel=tooltip]").tooltip();
	
	
	
	var heightBody = jQuery(window).height();
	jQuery('.body-wrap').css({minHeight:heightBody});
	
	
// -----------------------------------------------------  MOBILE MENU
	jQuery(function() {
		jQuery('nav#menu').mmenu({
			//slidingSubmenus: true
		});
	});
	
	// Mm closer
	jQuery('.menu-device').before('<a href="#" id="mm-closer"><i class="icon-cancel-1"></i></a>').delay(10,[something]);
	function something(){jQuery('#mm-closer').bind('click', function() { jQuery('nav#menu').trigger('close'); });}
	
	
	jQuery('.page_item_has_children > a').removeAttr('href').css('cursor','pointer').click(function(e) {
        jQuery(this).parent('li').children('ul.children').slideToggle(400);
    });
	
	jQuery('.page_item_has_children > a').append('<i class="icon-plus"></i>')
	
	jQuery('.widget_nav_menu .menu-item-has-children > a').removeAttr('href').css('cursor','pointer').click(function(e) {
        jQuery(this).parent('li').children('ul.sub-menu').slideToggle(400);
    });
	
	jQuery('.widget_nav_menu .menu-item-has-children > a').append('<i class="icon-plus"></i>')	



// -----------------------------------------------------  FLEX SLIDER
	if(jQuery().flexslider) {
		jQuery('.flexslider').flexslider({
			animation: 'fade',
			controlNav: true,
			slideshowSpeed: 4000,
			animationDuration: 300
		});	
		jQuery('.flex-next').html('<i class="icon-right-open"></i>');
		jQuery('.flex-prev').html('<i class="icon-left-open"></i>');
	}
	
	
// -----------------------------------------------------  FITVIDS	
	if(jQuery().fitVids) {jQuery(".video").fitVids();}
	
});