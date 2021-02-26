$(function () {
  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  })


});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".menu__wrapper").addClass("dark-header");
  } else {
    $(".menu__wrapper").removeClass("dark-header");
  }
});