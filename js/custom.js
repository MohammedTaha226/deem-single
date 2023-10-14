const splash = 	document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=> {
	setTimeout(()=> {
		splash.classList.add("displayNone");
	})
});

$(function(){


	$(".closeX,.BgClose,.menuMobile .menuContent a").click(function () {
		$(".openMenuMobile").removeClass("active");
		$("body,html").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});

	$.scrollIt({topOffset:0});
	
	   var c, currentScrollTop = 0,
	       navbar = $('.header');
	   $(window).scroll(function () {
	      var a = $(window).scrollTop();
	      var b = navbar.height();
	      currentScrollTop = a;
	      if (c < currentScrollTop && a > b + b) {
	        navbar.addClass("scrollUp");
	      } else if (c > currentScrollTop && !(a <= b)) {
	        navbar.removeClass("scrollUp");
	      }
	      c = currentScrollTop;
	  });
  
	if($(window).scrollTop() > 100) {
		$(".header").addClass("headerFixed");
	} else {
		$(".header").removeClass("headerFixed");
	}

	$(window).scroll(function () {
		if($(this).scrollTop() > 100) {
			$(".header").addClass("headerFixed");
		} else {
			$(".header").removeClass("headerFixed");
		}
	});
	
	$(".openMenuMobile").click(function() {
		$(this).toggleClass("active");
		
		setTimeout(function(){ 
			$("body,html").addClass("overflowH");
			$(".menuMobile").fadeIn();
			$(".transformPage,.menuMobile .menuContent").addClass("active");
 		},500);
	});
	
	/****** Start Tabs ******/
	
	$(".tabsBtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	
	

	  var owlClients = $('#owlClients');
	 
	  owlClients.owlCarousel({
	    stagePadding:0,
	    loop:false,
	    margin:0,
	    nav:true,
	    dots:true,
	    rtl: true,
	    autoplay:true,
	    items:1,
	    navText:["<i class='flaticon-right-arrow'></i>","<i class='flaticon-left-arrow'></i>"]
	  });
	
	/****** Start  countTo ******/
	
	$('.statistics').one('inview', function (event, visible) {
		
		if (visible === true) {
			/****** Start  countTo******/
			$('.statistics .numb').countTo();
			/****** End  countTo******/
		}
	
	});
	
	/****** End  countTo ******/
	
	/* WOW Js */
    new WOW().init();
	
	
	
});
