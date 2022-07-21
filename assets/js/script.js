$(document).ready(function () {
  //LOADING SPINNER
  function loaderClose() {
    $('.loading-bar-spinner').fadeOut()
  }
  setTimeout(loaderClose, 500)

  //MOBILE MENU CLOSE BUTTON
  $('.close-btn').on('click', function () {
    $('.navbar-collapse').removeClass('show')
  })

  //LIGHT GALLERY
  $('.gallery-cards-wrapper').lightGallery({
    selector: '.gallery-card',
  })

  //OWL CAROUSEL
  $('.owl-beneficiaries').owlCarousel({
    margin: 25,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      600: {
        items: 4,
      },
    },
  })
  $('.owl-founders').owlCarousel({
    margin: 25,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    dots: false,
    loop: true,
    items: 1,
  })
  $('.owl-gallery').owlCarousel({
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
  })
  //NAVBAR MOVE UP & SHRINK
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $('.header-section-wrapper').addClass('top-bar-moveup')
      $('.navbar').addClass('navbar-shrink')
    } else if ($(this).scrollTop() <= 200) {
      $('.header-section-wrapper').removeClass('top-bar-moveup')
      $('.navbar').removeClass('navbar-shrink')
    }
  })

  //GSAP ANIMATIONS
  // ScrollTrigger.saveStyles('.mobile, .desktop')

  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 992px)': function () {
      var tl = gsap.timeline()
      tl.from('.page-section_intro__heading', {
        duration: 0.75,
        y: -250,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5,
      })

      gsap.from('.news-card', {
        scrollTrigger: {
          trigger: '.news-card',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        duration: 1,
        y: 100,
        stagger: 0.5,
      })

      gsap.from('.page-section_mission__header .header-elem', {
        scrollTrigger: {
          trigger: '.page-section_mission__header .header-elem',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
        duration: 1,
        x: 300,
        stagger: 0.5,
      })

      gsap.from('.img-custom-space-right', {
        scrollTrigger: {
          trigger: '.img-custom-space-right',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
        duration: 1,
        x: -300,
      })

      gsap.from('.owl-beneficiaries .owl-item', {
        scrollTrigger: {
          trigger: '.owl-beneficiaries .owl-item',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
        duration: 1,
        x: 300,
        stagger: 0.5,
      })

      gsap.from('.owl-founders .owl-stage-outer', {
        scrollTrigger: {
          trigger: '.owl-founders .owl-stage-outer',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
        duration: 1,
        x: -300,
      })

      gsap.from('footer', {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        duration: 1,
        y: 200,
      })
    },
  })
})
