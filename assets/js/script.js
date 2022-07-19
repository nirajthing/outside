$(document).ready(function () {
  function loaderClose() {
    $("#loading-bar-spinner").fadeOut();
  }
  setTimeout(loaderClose, 500);

  $("#lightgallery").lightGallery({
    selector: ".item"
  });

  $(".close-btn").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".gallery-cards-wrapper").lightGallery({
    selector: ".gallery-card",
  });
  $(".owl-beneficiaries").owlCarousel({
    margin: 25,
    nav: false,
    dots: false,
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
    autoplayTimeout: 5000,
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

  //animation
  gsap.from('.page-section_intro__heading', { opacity: 0, duration: 1, y: -190 });
  gsap.from('.img-custom-space-left', { opacity: 0, duration: 1, y: 130 });

})