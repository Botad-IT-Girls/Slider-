// Slick slider

$(document).ready(function () {
  // Initialize Slick Slider
  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
  });
});

// owl-carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 1,
      },
    },
  });
});
