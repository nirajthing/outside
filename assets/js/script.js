$(document).ready(function () {
   $(".owl-gallery").lightGallery({
    selector: ".gallery-card",
  });
  $(".owl-beneficiaries").owlCarousel({
    margin: 25,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 4,
        nav: true,
      },
    },
  });
  $(".owl-founders").owlCarousel({
    margin: 25,
    autoplay: true,
    items: 1,
  });
  $(".owl-gallery").owlCarousel({
    margin: 25,
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
})