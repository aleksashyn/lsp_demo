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
});
