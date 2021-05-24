$(function(){

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1
    }
  });

  var pos = 0;

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var currentPos = $(this).scrollTop();
    
    if (height > 48) {
      $('.header').addClass('header--bg');
    } else {
      $('.header').removeClass('header--bg');
    };

    if (currentPos > pos) {
      $('.header').addClass('header--display');
    } else {
      $('.header').removeClass('header--display');
    };
    pos = currentPos;
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
    $('.user-nav').removeClass('user-nav--active');
  });

  $('.menu__link, .logo').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('body').removeClass('lock');
    $('.user-nav').removeClass('user-nav--active');
  });

  $('.tools-btn').on('click', function () {
    $('.user-nav').toggleClass('user-nav--active');
    $('.tools-btn').toggleClass('tools-btn--active');
  });


  $('.top-slider').slick({
    dots: true,
    arrows: false
  });

  $('.slider-partners__items').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  

  var mixer1 = mixitup('.week-products', {
    animation: {
      effects: 'fade translateZ(-30px)'
    },
    controls: {      
        scope: 'local'
    }
  });

  var mixer2 = mixitup('.new-design', {
    animation: {
      effects: 'fade translateZ(-30px)'
    },
    controls: {      
        scope: 'local'
    }
  });

});