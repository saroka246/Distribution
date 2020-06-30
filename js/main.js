$(document).ready(function(){

	// header search

	$('.header_search__btn-under').on('click', function() {
		$('.header_search__btn').addClass('active');
		$('.header_search').addClass('active');
		$(this).hide();
	});

	$(document).mouseup(function (e){
		var div = $('.header_search');
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0 ) {
			$('.header_search__btn').removeClass('active');
			$('.header_search').removeClass('active');
			$('.header_search__btn-under').show();
		}
	});

	$('.header_search__dropdown-list li span').on('click', function() {
		var itemContent = $(this).text();
		$('.header_search input').val(itemContent);
	});

	// benefits slider
	
	$('.patterns_list').slick({
		centerMode: true,
		centerPadding: '0',
		swipeToSlide: true,
		variableWidth: true,
		focusOnSelect: true,
		infinite: true,
		pauseOnHover: true,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1200,
		slidesToScroll: 1,
		initialSlide: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1
				}
			}
		]
		});

	// main-page-hero slider
 	$('.main-page-hero_slider').slick({
	  	dots: true,
	  	infinite: true,
	  	slidesToShow: 1,
	  	arrows: false,
	  	speed: 200,
		fade: true,
		asNavFor: '.header_photo-slider',
  		prevArrow: '<div class="main-page-hero_slider__arrow prev"><img src="img/main-page-hero_slider__arrow-prev.svg" alt="ico"></div>',
  		nextArrow: '<div class="main-page-hero_slider__arrow next"><img src="img/main-page-hero_slider__arrow-next.svg" alt="ico"></div>',
  		cssEase: 'linear',
	    responsive: [
		    {
				breakpoint: 1400,
				settings: {
					dots: false,
					arrows: true
				}
		    }
		  ]
	});

	$('.header_photo-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		speed: 200,
		fade: true,
		cssEase: 'linear'
  	});

 	// products

	$( window ).resize(function() {
		var windowWidth = $( window ).width();
		var classCheck = $('.interiors_items' ).find('.slick-list');
	  	if (windowWidth < 768 &&  !classCheck.length == 1) {
	  		$('.interiors_items').slick({
				dots: true,
				arrows: false,
				infinite: false,
				mobileFirst: true,
				adaptiveHeight: true,
			    responsive: [
			         {
			            breakpoint: 768,
			            arrows: false,
			            settings: 'unslick'
			         }
			    ]
			});
	  	}
	});
 	$('.interiors_items').slick({
	  	dots: true,
	  	arrows: false,
	  	infinite: true,
	  	slidesToShow: 1,
	  	infinite: false,
	 	mobileFirst: true,
	 	adaptiveHeight: true,
	    responsive: [
	         {
	            breakpoint: 768,
	            arrows: false,
	            settings: 'unslick'
	         }
	    ]
	});


 	$('.tab-link').on('click', function() {
		$('.tab-link').removeClass('active');
		$(this).addClass('active');

		var tabInfo = $(this).attr('data-tab');

		$('.tab-content').removeClass('active');
		$('.'+tabInfo).addClass('active');

	});



	// Stores
 	$('.where_list_all').on('click', function() {
		$('.stores_wrap').fadeIn();
	});

	$(document).mouseup(function (e){
		var div = $('.stores_wrap');
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0 ) {
			$('.stores_wrap').fadeOut();
		}
	});

 	// language
 	$('.popup-language_list li').on('click', function() {
		$('.popup-language_list li').removeClass('active');
		$(this).addClass('active');
	});

 	$('.popup-language_accept').on('click', function() {
		$('.backdrop-language').fadeOut();
		$('.popup-language').fadeOut();
	});

	$('.backdrop-language').on('click', function() {
		$(this).fadeOut();
		$('.popup-language').fadeOut();
	});

	$('.popup-language_close').on('click', function() {
		$('.backdrop-language').fadeOut();
		$('.popup-language').fadeOut();
	});

	$( window ).resize(function() {
		var windowWidth = $( window ).width();
		var classCheck = $('.popup-language_lists' ).find('.slick-list');
	  	if (windowWidth < 768 &&  !classCheck.length == 1) {
	  		$('.popup-language_lists').slick({
				dots: false,
				arrows: true,
				infinite: false,
				mobileFirst: true,
				adaptiveHeight: true,
				prevArrow: '<div class="main-page-hero_slider__arrow prev"><img src="img/language-arrow-prev.svg" alt="ico"></div>',
  				nextArrow: '<div class="main-page-hero_slider__arrow next"><img src="img/language-arrow-next.svg" alt="ico"></div>',
			    responsive: [
			         {
			            breakpoint: 768,
			            arrows: false,
			            settings: 'unslick'
			         }
			    ]
			});
	  	}
	});


	$('.header_language__btn').on('click', function() {
		$('.backdrop-language').fadeIn();
		$('.popup-language').fadeIn();
	 	$('.popup-language_lists').slick({
		  	dots: false,
		  	arrows: true,
		  	infinite: true,
		  	slidesToShow: 1,
		  	infinite: false,
		 	mobileFirst: true,
		 	adaptiveHeight: true,
		 	prevArrow: '<div class="main-page-hero_slider__arrow prev"><img src="img/language-arrow-prev.svg" alt="ico"></div>',
  			nextArrow: '<div class="main-page-hero_slider__arrow next"><img src="img/language-arrow-next.svg" alt="ico"></div>',
		    responsive: [
		         {
		            breakpoint: 768,
		            arrows: false,
		            settings: 'unslick'
		         }
		    ]
		});
	});

	// nav
		
	$('.header_nav__list li a').on('click', function(e) {
		var windowWidth = $( window ).width();
		// e.preventDefault();
		if (windowWidth < 1400) {

			if ( $(this).hasClass('active') ) {
				$(this).removeClass('active');
				$(this).next().slideUp(200);
			}
			else{
				$('.header_nav__list li a').removeClass('active');
				$(this).addClass('active');
				$('.header_nav__dropdown').slideUp(200);
				$(this).next().slideDown(200);
			}	
		}
	});

	$('.burger-open').on('click', function() {
		$('.header_nav__wrap').addClass('active');
		$('body').addClass('overflow-nav');
	});
	$('.close-mob-nav').on('click', function() {
		$('.header_nav__wrap').removeClass('active');
		$('body').removeClass('overflow-nav');
	});

	$('.inspirational-gallery .tab-link').on('click', function() {
		$('.interiors_items').slick("setPosition", 0);
	});

	// sort by

	$('.store_sort__main').on('click', function() {
		$(this).toggleClass('active , dropdown-active');
		$(this).next().toggleClass('active');
	});

	$('.store_sort__dropdown-list li').on('click', function() {
		var itemContent = $(this).text();
		$('.store_sort__main span').html(itemContent);
		$('.store_sort__main').click();
	});

	// Hide dropdown blocks
	$(document).mouseup(function (e){
		var div = $('.dropdown-active');
		var divDropdown = $('.dropdown-active').next();
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0 
			&&!divDropdown.is(e.target) 
			&& divDropdown.has(e.target).length === 0) { 

			$('.dropdown-active').click();
		}
	});

	// rage slider
	 $("#slider").slider({
		min: 10,
		max: 200,
		values: [10,200],
		range: true,
		stop: function(event, ui) {
			$(".price-min").html('€'+$("#slider").slider("values",0));
			$(".price-max").html('€'+$("#slider").slider("values",1));
	    },
	    slide: function(event, ui){
			$(".price-min").html('€'+$("#slider").slider("values",0));
			$(".price-max").html('€'+$("#slider").slider("values",1));
	    }
	});

	// filter

	$('.store_filter__btn').on('click', function() {
		$('.store_filter-backdrop').fadeIn();
		$('.store_filter').fadeIn();
		$('body').addClass('overflow-nav');
	});
	$('.store_filter-backdrop').on('click', function() {
		$(this).fadeOut();
		$('.store_filter').fadeOut();
		$('body').removeClass('overflow-nav');
	});
	$('.store_filter__close').on('click', function() {
		$('.store_filter-backdrop').fadeOut();
		$('.store_filter').fadeOut();
		$('body').removeClass('overflow-nav');
	});

	// Product

	$('.product_color__item').on('click', function() {
		$('.product_color__item').removeClass('active');
		$(this).addClass('active');
	});


	if ($('.product_color__item').length > 16) {
		$('.product_color__item:gt(15)').hide();
		// $('.product_color__more').show();
	}
	$('.product_color__more').on('click', function() {
		$(this).hide();
		$('.product_color__item').show();
	});

	
	$('.product_photo__slider').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		arrows: false,
		speed: 200,
		fade: true,
		cssEase: 'linear',
		draggable: false,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				dots: true
		
			  }
			}
		]
	  });
	  
	  $('.product_photo__slider-nav').slick({
		dots: false,
		arrows: true,
		infinite: false,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 5,
		draggable: false,
		asNavFor: '.product_photo__slider, .popup-product_slider, .popup-product_slider__nav',
		focusOnSelect: true,
		prevArrow: '<div class="product_photo__slider-nav--arrow prev"><svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg"><path d="M7.56039 1.05439L0.925624 8.21722C0.676428 8.48625 0.672609 8.91593 0.916948 9.1932C1.17536 9.48644 1.60812 9.49366 1.87167 9.20914L8.0229 2.56833L14.0543 9.41254C14.3127 9.70577 14.7454 9.713 15.009 9.42848C15.1326 9.29498 15.1976 9.11813 15.1991 8.9452C15.2006 8.77757 15.145 8.59605 15.0162 8.45406L8.51384 1.07543C8.51353 1.07507 8.51322 1.07471 8.51291 1.07436C8.2575 0.780177 7.8211 0.772935 7.56039 1.05439Z" stroke-width="0.535405"/></svg></div>',
		nextArrow: '<div class="product_photo__slider-nav--arrow next"><svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg"><path d="M8.37827 9.26487L15.0131 2.10195C15.2334 1.86412 15.2368 1.48264 15.0208 1.23753C14.7951 0.981421 14.4198 0.975154 14.1896 1.22365L7.9759 7.93188L1.88332 1.0182C1.65763 0.762083 1.28227 0.755817 1.05209 1.00432C0.94305 1.12203 0.885286 1.27885 0.883923 1.43217C0.882592 1.58185 0.932406 1.74232 1.0455 1.86671L7.54883 9.24649C7.54903 9.24672 7.54924 9.24696 7.54944 9.24719C7.77215 9.50397 8.15095 9.51028 8.37827 9.26487Z" stroke-width="0.368957"/></svg></div>',
		responsive: [
			{
			  breakpoint: 1400,
			  settings: {
				vertical: false,
				verticalSwiping: false,
				variableWidth: true,
				outerEdgeLimit: true
		
			  }
			}
		]
	  });
	  
	  $('.popup-product_slider').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		arrows: true,
		speed: 200,
		fade: true,
		asNavFor: '.product_photo__slider-nav, .product_photo__slider, .popup-product_slider__nav',
		cssEase: 'linear',
		draggable: false,
		prevArrow: '<div class="popup-product_slider-arrow prev"><img src="img/popup-product_slider-arrow--prev.svg" alt="ico"></div>',
		nextArrow: '<div class="popup-product_slider-arrow next"><img src="img/popup-product_slider-arrow--next.svg" alt="ico"></div>'
	  });

	  $('.popup-product_slider__nav').slick({
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		draggable: false,
		focusOnSelect: true,
		asNavFor: '.popup-product_slider, .product_photo__slider, .product_photo__slider-nav'
	  });

	$('.product_photo__popup-open').on('click', function() {
		$('.backdrop-product').fadeIn();
		$('.popup-product').fadeIn();

		$('.popup-product_slider').slick('setPosition', 0);
		$('.popup-product_slider__nav').slick('setPosition', 0);
	});

 	$('.popup-product_close').on('click', function() {
		$('.backdrop-product').fadeOut();
		$('.popup-product').fadeOut();
	});

	$('.backdrop-product').on('click', function() {
		$(this).fadeOut();
		$('.popup-product').fadeOut();
	});

	$('.product_description__more').on('click', function() {
		$(this).parent().hide();
		$(this).parents('.product_description').find('.hide').removeClass('hide');
	});

	$('.product_additional-information__more').on('click', function() {
		$(this).parent().hide();
		$(this).parents('.product_additional-information').find('.hide').removeClass('hide');
	});

	if ($('.product_rewiew').length > 2) {
		$('.product_rewiew:gt(1)').hide();
		// $('.product_color__more').show();
	}
	$('.product_rewiew__more').on('click', function() {
		$(this).hide();
		$('.product_rewiew').show();
	});

	$('.other-products_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		variableWidth: true,
		slidesToShow: 4,
		prevArrow: '<div class="other-product-slider-arrow prev"><img src="img/other-product-slider-arrow.svg" alt="ico"></div>',
		nextArrow: '<div class="other-product-slider-arrow next"><img src="img/other-product-slider-arrow-next.svg" alt="ico"></div>',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				arrows: false
				
			  }
			}
		]
	  
	});

	$('.rewiews_form__rate-stars label').on('click', function() {
		var a = $(this).index();
		$('.rewiews_form__rate-stars label svg').removeClass('fill-star');

		for (a; a >= 0; a--){
			$('.rewiews_form__rate-stars label').eq( a ).find('svg').addClass('fill-star');
		}
	});

	$('.product_rewiews__popup-open').on('click', function() {
		$('.backdrop-rewiews').fadeIn();
		$('.popup-rewiews').fadeIn();
	});

 	$('.popup-rewiews_close').on('click', function() {
		$('.backdrop-rewiews').fadeOut();
		$('.popup-rewiews').fadeOut();
	});

	$('.backdrop-rewiews').on('click', function() {
		$(this).fadeOut();
		$('.popup-rewiews').fadeOut();
	});

});



// Stepper Increment Style Element, use container as class="stepper"
var inc = document.getElementsByClassName("stepper");
for (i = 0; i < inc.length; i++) {
  var incI = inc[i].querySelector("input"),
    id = incI.getAttribute("id"),
    min = incI.getAttribute("min"),
    max = incI.getAttribute("max"),
    step = incI.getAttribute("step");
  
  
  //onfocus
  document
    .getElementById(id).setAttribute(
      "onfocus", "inputFocus('" + id + "')");
  
  
  //onblur (lost focus)
  document
    .getElementById(id).setAttribute(
      "onblur", "checkEmpty('" + id + "')");
  
  // Down
  document
    .getElementById(id)
    .previousElementSibling.setAttribute(
      "onclick",
      "stepperInput('" + id + "', -" + step + ", " + min + ")"
    ); 
  
  // Up
  document
    .getElementById(id)
    .nextElementSibling.setAttribute(
      "onclick",
      "stepperInput('" + id + "', " + step + ", " + max + ")"
    ); 
}

// Stepper Increment Function with Min/Max
//id, step, min
function stepperInput(id, s, m) {
  var el = document.getElementById(id);
  if (s > 0) {
    if (parseInt(el.value) < m) {
      el.value = parseInt(el.value) + s;
    }
  } else {
    if (parseInt(el.value) > m) {
      el.value = parseInt(el.value) + s;
    }
  }
  // Execute other functions when stepping below eg. if zero or less disable minus button, also check if empty
    if (parseInt(el.value) <= 0){
        el.previousElementSibling.disabled = true;
      }
    else{
      el.previousElementSibling.disabled = false;
    }
    checkEmpty(id);
}

function checkEmpty(id){
  var el = document.getElementById(id);
  if (el.value === '' || el.value === null || el.value === undefined){
      el.value=parseInt(0);
      el.previousElementSibling.disabled = true;
    }
  if(parseInt(el.value)>0){
    el.previousElementSibling.disabled = false;
  }
  else{
    el.previousElementSibling.disabled = true;
  }
}

function inputFocus(id){
  var el = document.getElementById(id);
  //if zero empty it
  if (el.value < 1){
    el.value='';
  }
}

$("a.scrollto").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 800);
	return false;
});

$('.important_more').each(function () {
	$(this).on("click", function() {
		$('.important_text').toggleClass('active');
	})
})

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        var play = document.getElementsByClassName("video_icon");
        videos[i].onclick = function() {
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

// custom selects

$( function() {
	$( ".checkout_input.select" ).selectmenu();
	$( ".summary_select" ).selectmenu();
} );

// checkout

$('.checkout_link_address').on('click', function() {
	$(this).hide();
	$('.checkout_address_manually').fadeIn().css('display', 'flex');
	$('.checkout_address_auto').hide();
});

$('.summary_link_discount').on('click', function() {
	$(this).hide();
	$('.summary_discount-field').fadeIn().css('display', 'flex');
});

$('.checkout_link_edit').on('click', function() {
	$(this).hide();
	$('.checkout_edit').fadeIn();
	$('.checkout_details').addClass('editing');
});

$('.checkout_save').on('click', function() {
	$(this).parent().hide();
	$('.checkout_link_edit').show();
	$('.checkout_details').removeClass('editing');
});

// address 

$('.checkout_input_address').on('click', function() {
	$('.checkout_address-dropdown').addClass('active');
});

$(document).mouseup(function (e){
	var address = $('.checkout_address-dropdown');
	if (!address.is(e.target) 
		&& address.has(e.target).length === 0 ) {
		$('.checkout_address-dropdown').removeClass('active');
	}
});

$('.checkout_address-dropdown li').on('click', function() {
	var itemAddress = $(this).text();
	$('.checkout_input_address').val(itemAddress);
});

// Inner checkout fields

$('.checkout input[type="radio"]').on("click", function() {
	var target = $(this).val();
	var id = $('#' + target);

	$(this).closest('.checkout_row').find('.checkout_fade').addClass('active');
	$(this).closest('.checkout_wrap').find('.checkout_fade').removeClass('active');

		id.addClass('active');

		if ($(this).closest('.checkout_wrap').find('.checkout_option').hasClass('active')) {
			$(this).closest('.checkout_wrap').find('.checkout_option').removeClass('active');
		}

		if(target === $(this).closest('.checkout_wrap').find('.checkout_fade').attr('id')) {
			$(this).closest('.checkout_option').addClass('active');
		}
})

// Steps

var current_fs, next_fs, last_step, previous_fs;

$(".next").click(function(){	
	current_fs = $(this).parent().closest('.checkout_step');
	next_fs = $(this).parent().next();
	current_step = $('.checkout_main');
	last_step = $('.checkout_success');

	if ($(this).hasClass('last')) {
		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").removeClass("active");
		$("#progressbar li:last-of-type").addClass("active");
	
		// show success message
		last_step.fadeIn();
		$(window).scrollTop(0);
		$("h1").css('display', 'none');
		$(".checkout").css('padding-top', '70px');
		$(".checkout_progressbar").css('margin-bottom', '15px');
		current_step.hide();
	}
	else {
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		//show the next fieldset
		next_fs.fadeIn(); 
		current_fs.hide();
	}
});

$(".previous").click(function(){	
	current_fs = $(this).parent().parent();
	previous_fs = $(this).parent().parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	$("#progressbar li").eq($("fieldset").index(previous_fs)).addClass("active");
	
	//show the previous fieldset
	previous_fs.fadeIn(); 
	current_fs.hide();
});

$(".submit").click(function(){
	return false;
})

// Custom scrollbar for cart

jQuery(document).ready(function(){
	jQuery('.scrollbar-dynamic').scrollbar();
});

// Cart popups

$('.header_cart').on('click', function() {
	$('.backdrop-cart').fadeIn();
	$('.popup-cart').addClass('active');
	$('body').css('overflow', 'hidden');
});

$('.popup-cart_close').on('click', function() {
	$('.backdrop-cart').fadeOut();
	$('.popup-cart').removeClass('active');
	$('body').css('overflow', 'visible');
});

$(document).mouseup(function (e){
	var cart = $('.popup-cart');
	if (!cart.is(e.target) 
		&& cart.has(e.target).length === 0 ) {
		$('.popup-cart').removeClass('active');
		$('.backdrop-cart').fadeOut();
		$('body').css('overflow', 'visible');
	}
});
$(document).ready(function(){
	var dropZone = $('#upload-container');

	$('#file-input').focus(function() {
		$('label').addClass('focus');
	})
	.focusout(function() {
		$('label').removeClass('focus');
	});


	dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
		return false;
	});

	dropZone.on('dragover dragenter', function() {
		dropZone.addClass('dragover');
	});

	dropZone.on('dragleave', function(e) {
		let dx = e.pageX - dropZone.offset().left;
		let dy = e.pageY - dropZone.offset().top;
		if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
			dropZone.removeClass('dragover');
		}
	});

	dropZone.on('drop', function(e) {
		dropZone.removeClass('dragover');
		let files = e.originalEvent.dataTransfer.files;
		sendFiles(files);
	});

	
});
function myFunction(){
  var x = document.getElementById("myFile");
   
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      
    } else {
      for (var i = 0; i < x.files.length; i++) {
          var pc = document.getElementById("fileImg");
          var remove = document.getElementById("remove");
          var galka = new Image();
          var removeBtn = document.createElement('button');
          removeBtn.classList.add("remove-btn");
          galka.src="img/form/galka.png";
          pc.appendChild(galka);
        var file = x.files[i];
        if ('name' in file) {
          txt +=file.name + "<br>";
        }
         remove.appendChild(removeBtn); 
      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
   
  document.getElementById("demo").innerHTML =  txt;
    
}

