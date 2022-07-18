$(document).ready(function () {
  $(".close-btn").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".owl-gallery").lightGallery({
    selector: ".gallery-card",
  });
  $(".owl-beneficiaries").owlCarousel({
    margin: 25,
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60
      },
      600: {
        items: 4,
      },
    },
  });
  $(".owl-founders").owlCarousel({
    margin: 25,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    dots: false,
    loop: true,
    items: 1,
  });
  $(".owl-gallery").owlCarousel({
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: true,
      },
    },
  });

  // navbar move up

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $(".header-section-wrapper").addClass("top-bar-moveup");
      $(".navbar").addClass("navbar-shrink");
    } else if ($(this).scrollTop() <= 200) {
      $(".header-section-wrapper").removeClass("top-bar-moveup");
      $(".navbar").removeClass("navbar-shrink");
    }
  });
})