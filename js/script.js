$(document).ready(function () {
    $('#button-callback').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
    $('.modal__close').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
  })

  $(document).ready(function () {
      $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<div class="arrow arrow__right"></div>',
        prevArrow: '<div class="arrow arrow__left"></div>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 994,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      });
    });