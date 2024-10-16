$(document).ready(function () {
  $('.results-carousel').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.token-a').html('[V<sub>1</sub>]');
  $('.token-b').html('[V<sub>2</sub>]');
  $('.token-c').html('[V<sub>3</sub>]');
  $('.token-d').html('[V<sub>4</sub>]');
  $('.token-bg').html('[V<sub>bg</sub>]');
})
