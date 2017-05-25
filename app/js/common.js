$(function() {

  var $menu = $('#my-menu').mmenu({
    extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
    navbar: {
      title: '<img src="img/logo.svg">'
    },
    offCanvas: {
      position: 'right'
    }
  });

  var api = $menu.data('mmenu');
  var $icon = $('#my-icon');

  $icon.on("click", function() {
    api.open();
  });

  api.bind("open:finish", function() {
    setTimeout(function() {
      $icon.addClass("is-active");
    }, 100);
  });

  api.bind("close:finish", function() {
    setTimeout(function() {
      $icon.removeClass("is-active");
    }, 100);
  });

  $('.carousel-services').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouselService();
    }, 100);
  });
  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $('.carousel-services-content').equalHeights();

  function carouselService() {
    $('.carousel-services-item').each(function() {
      var $ths = $(this);
      var $thsh = $ths.find('.carousel-services-content').outerHeight();
      $ths.find('.carousel-services-image').css('min-height', $thsh);
    });
  };
  carouselService();

  $('.carousel-services-composition .h3').each(function() {
    var $ths = $(this);
    $ths.html($ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

  function onResize() {
    $('.carousel-services-content').equalHeights();
  };
  onResize();
  window.onresize = function() {
    onResize();
  };

});
