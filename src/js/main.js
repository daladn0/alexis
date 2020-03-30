$(document).ready(function(){

	// Smooth scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $('.scrolltotop').fadeIn();
    } else {
      $('.scrolltotop').fadeOut();
    }
  });

  function pageScroll(anchor) {
    $(anchor).click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: ($(_href).offset().top - 75) + "px"
      }, 600);
      $('.burger').removeClass('burger_active');
      $('.sidebar').removeClass('sidebar_active');
      return false;
    });
  }

  pageScroll("a[href=#up]");
  pageScroll("a[href=#about-us]");
  pageScroll("a[href=#focus]");
  pageScroll("a[href=#portfolio]");
  pageScroll("a[href=#team]");
  pageScroll("a[href=#work]");
  pageScroll("a[href=#price]");
  pageScroll("a[href=#testimonials]");
  pageScroll("a[href=#blog]");
  pageScroll("a[href=#contact]");

  // Sidebar
	$('.burger').on('click', function(){
		$(this).toggleClass('burger_active');
		$('.sidebar').toggleClass('sidebar_active');
	});

  // Tabs 
  $('.team__items').on('click', '.team__item:not(.team__item_active)', function() {
    $(this)
      .addClass('team__item_active').siblings().removeClass('team__item_active')
      .closest('div.container').find('div.team__content').removeClass('team__content_active')
      .eq($(this).index()).addClass('team__content_active');
  });

  // Modal window & Team

  $('.team__item').each(function(i) {
    $(this).on('click', function() {
      if( $(window).width() <= 575 ) {
        $('.modal__wrapper').toggleClass('modal__wrapper_active');
        $('.modal__wrapper .team__person').text($('.team__name').eq(i).text());
      }
    });
  });
  $('.modal__close').on('click', function() {
    $('.modal__wrapper').toggleClass('modal__wrapper_active')
  });
});