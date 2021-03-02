

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  })




const animItems = document.querySelectorAll(`._anim-items`);
if (animItems.length > 0) {
  window.addEventListener(`scroll`, animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
        animItem.classList.add(`_active`);
      } 
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

}


$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".menu__wrapper").addClass("dark-header");
  } else {
    $(".menu__wrapper").removeClass("dark-header");
  }
});


