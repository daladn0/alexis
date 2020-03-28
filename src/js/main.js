$(document).ready(function(){

	// Smooth scroll & pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $('.scrolltotop').fadeIn();
    } else {
      $('.scrolltotop').fadeOut();
    }
  });

  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    }, 600);
    return false;
  });

  // Sidebar
	$('.burger').on('click', function(){
		$(this).toggleClass('burger_active');
		$('.sidebar').toggleClass('sidebar_active');
	});

});